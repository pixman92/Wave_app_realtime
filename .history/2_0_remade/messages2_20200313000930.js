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
        
async function runAll(adminEmail, memberEmail){
        // one(adminEmail).then(()=>{
    //     two(memberEmail).then(()=>{
    //         wait(800).then(()=>{
    //             if(tmpIds[0]==undefined){
    //                 runAll(adminEmail, memberEmail)
    //             }
    //             three();

    //         });
    //     });
    // });

    
    try{
        let one1 = await one(adminEmail);
        let two2 = await two(one1, memberEmail);
        let three3 = await three(two2);

        return 'done!';
    }catch(e){
        console.log('error', e);
        throw e;
    }

}
        
var oneFinished; 
var tmpIds=[];
async function one(adminEmail){
    // whereIds=[];
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{
        // return new Promise((resolve)=>{
        //     resolve(whereIds);
        // });
        tmpIds[0] = whereIds[0];
        console.log('1', tmpIds);
        // setTimeout(() => {
        //     return true;
        // }, 5000);
    });
}

var twoFinished;
async function two(etc, memberEmail){
    // whereIds=[];
    await whereMe('chatrooms3/' + tmpIds[0] + '/messagesData/', 'memberEmail', memberEmail, async()=>{

        // return twoFinished = true;
        // setTimeout(() => {
            tmpIds = whereIds;
            console.log('1', tmpIds);
        //     return true;
        // }, 5000);
    });
}

var threeFinished;
async function three(){
    // console.log('whereIds[0]', whereIds[0]);
    rootStr = 'chatrooms3/' + tmpIds[0] + '/messagesData/';
    console.log('rootStr', rootStr);
    await getting(rootStr.toString(), tmpIds[1], async()=>{
        // rootStr =  + whereIds[1];
        // setTimeout(() => {
        //     return true;
        // }, 5000);
    });
}
