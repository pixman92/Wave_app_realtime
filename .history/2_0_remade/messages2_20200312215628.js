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
        // wait(700).then(async ()=>{
            // if(whereIds.length==0) pullMessageData(adminEmail);
                while(exitCount<100){
                    if(whereIds[0]!=undefined){
                        exitCount==100;
                        break;
                    }
                    pullMessageData(adminEmail);
                    exitCount++;
                }
                await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', 'student1', async()=>{
                    console.log('whereIds[1]', whereIds[1]);
                    tmp = whereIds[1];
                    wait(700).then(async ()=>{
                        while(exitCount2<20){
                            if(whereIds[1]!=undefined){
                                break;
                            }
                            pullMessageData(adminEmail);
                            exitCount2++;
                        }
                        await getting('chatrooms3/' + whereIds[0] + '/messagesData/', whereIds[1], async()=>{
                            rootStr = 'chatrooms3/' + whereIds[0] + '/messagesData/' + whereIds[1];
                        });
                });
            });
        });
    
    });

}