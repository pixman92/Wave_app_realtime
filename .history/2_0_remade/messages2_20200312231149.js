// var messagesJSON="";
// async function messageMaker (adminEmail, message, memberEmail){   


//     await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

//         var tmpArr = []; 
//         //pull messages from list
//         await getting('chatrooms3', whereIds[0], ()=>{
//             tmpArr= {message: message, memberEmail:memberEmail};

//             if(wholeDoc[0].messageData==undefined){
//                 messagesJSON = JSON.stringify(tmpArr);
//             }else{
//                 messagesJSON = JSON.stringify(tmpArr) + wholeDoc[0].messageData;
//             }
            
//             console.log('tmpArr', tmpArr);
//         });


//         await addDoc('chatrooms3', whereIds[0], {messageData: messagesJSON});      //whereId[<index>] - to be changed

//     });


// }

function addMessageToData(message, memberEmail){
    adding('chatrooms3/' +whereIds[0] + '/messagesData/', {memberEmail: memberEmail, message: message})
}




var rootStr = "";
var exitCount = 0; var exitCount2 = 0;
async function pullMessageData(adminEmail){
    //pulls all message Data from within COLLECTION within a DOC, based on adminEmail
    whereIds=[];
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{
        // if(whereIds.length==0) pullMessageData(adminEmail);
                while(exitCount<100){
                    wait(900).then(async ()=>{
                        if(whereIds.length>0){
                            exitCount=100;
                            // break;
                        }else{
                            pullMessageData(adminEmail);
                            exitCount++;
                        }

                    });

                }
            });

                await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', 'student1', async()=>{
                    console.log('whereIds[1]', whereIds[1]);
                    tmp = whereIds[1];
                    while(exitCount2<20){
                            wait(1700).then(async ()=>{
                                if(whereIds[1]!=undefined){
                                    exitCount2=21;
                                    // break;
                                }
                                pullMessageData(adminEmail);
                                exitCount2++;

                            }); 
                        }
                    });
                    
                    // if( whereIds[1])

                    await getting('chatrooms3/' + whereIds[0] + '/messagesData/', whereIds[1], async()=>{
                        while(rootStr==""){
                            wait(900).then(()=>{
                                if(rootStr==""){
                                    pullMessageData(adminEmail)
                                }
                                rootStr = 'chatrooms3/' + whereIds[0] + '/messagesData/' + whereIds[1];
    
                            });
                        }
                    });
                // });
            // });
        // });

}


var oneFinished; 
async function one(adminEmail){
    whereIds=[];
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{
        // return new Promise((resolve)=>{
        //     resolve(whereIds);
        // });
        setTimeout(() => {
            return whereIds;
        }, 5000);
    });
}

var twoFinished;
var tmpIds=[];
async function two(memberEmail){
    // whereIds=[];
    await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', memberEmail, async()=>{

        // return twoFinished = true;
        setTimeout(() => {
            tmpIds = whereIds;
            return whereIds;
        }, 5000);
    });
}

var threeFinished;
async function three(whereIds){
    console.log('whereIds[0]', whereIds[0]);
    rootStr = 'chatrooms3/' + tmpIds[0] + '/messagesData/';
    console.log('root', root);
    await getting(rootStr.toString(), whereIds[1], async()=>{
        rootStr =  + whereIds[1];
        setTimeout(() => {
            return whereIds;
        }, 5000);
    });
}

function runAll(adminEmail, memberEmail){
    // one(adminEmail)
    // if(oneFinished==true){
    //     two(memberEmail)
    //     if(whereIds[1]==undefined){
    //         console.log('No Message found');
    //     }
    //     if(twoFinished==true){
    //         three();
    //         if(threeFinished==true){
    //             console.log('rootStr', rootStr);
    //         }
    //     }
    // }

    one(adminEmail).then((whereIds)=>{
        two(memberEmail).then((whereIds)=>{
            wait(800).then(()=>{
                three(whereIds);

            });
        });
    });

}