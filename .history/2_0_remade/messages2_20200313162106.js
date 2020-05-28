function addMessageToData(message, memberEmail){
    adding('chatrooms3/' +whereIds[0] + '/messagesData/', {memberEmail: memberEmail, message: message})
}




// var rootStr = "";
// var exitCount = 0; var exitCount2 = 0;
// async function pullMessageData(adminEmail){
//     //pulls all message Data from within COLLECTION within a DOC, based on adminEmail
//     whereIds=[];
//     await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{
//         // if(whereIds.length==0) pullMessageData(adminEmail);
//         while(exitCount<100){
//                     wait(900).then(async ()=>{
//                         if(whereIds.length>0){
//                             exitCount=100;
//                             // break;
//                         }else{
//                             pullMessageData(adminEmail);
//                             exitCount++;
//                         }

//                     });

//                 }
//             });
            
//                 await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', 'student1', async()=>{
//                     console.log('whereIds[1]', whereIds[1]);
//                     tmp = whereIds[1];
//                     while(exitCount2<20){
//                             wait(1700).then(async ()=>{
//                                 if(whereIds[1]!=undefined){
//                                     exitCount2=21;
//                                     // break;
//                                 }
//                                 pullMessageData(adminEmail);
//                                 exitCount2++;
                                
//                             }); 
//                         }
//                     });
                    
//                     // if( whereIds[1])
                    
//                     await getting('chatrooms3/' + whereIds[0] + '/messagesData/', whereIds[1], async()=>{
//                         while(rootStr==""){
//                             wait(900).then(()=>{
//                                 if(rootStr==""){
//                                     pullMessageData(adminEmail)
//                                 }
//                                 rootStr = 'chatrooms3/' + whereIds[0] + '/messagesData/' + whereIds[1];
                                
//                             });
//                         }
//                     });
//                 // });
//             // });
//             // });

//         }
        
async function runAll(adminEmail, memberEmail){
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1, memberEmail);
        var three3 = await three(two2);
        // let d = await decide(two2, memberEmail);
        // let four = await four(three3);


        return 'done!';
    }catch(e){
        console.log('error', e);
        throw e;
    }

}

        
// var oneFinished; 
// var tmpIds=[];
// async function one(adminEmail){
//     // whereIds=[];
//     await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{
//         // return new Promise((resolve)=>{
//         //     resolve(whereIds);
//         // });
//         // tmpIds[0] = whereIds[0];
//         setTimeout(() => {
//             console.log('1', whereIds);
//             return true;
//         }, 2000);
//     });
// }

// var twoFinished;
// async function two(etc, memberEmail){
//     // whereIds=[];
//     try{
//         await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', memberEmail, async()=>{
    
//             // return twoFinished = true;
//             setTimeout(() => {
//                 whereIds = whereIds;
//                 console.log('2', whereIds);
//             //     return true;
//             }, 2000);
//         });

//     }catch(e){
//         console.log('e', e);
//         throw e;
//     }
// }

// var threeFinished;
// var rootStr;
// async function three(){
//     // console.log('whereIds[0]', whereIds[0]);
//     rootStr = 'chatrooms3/' + whereIds[0] + '/messagesData/';
//     console.log('rootStr', rootStr);
//     await getting(rootStr.toString(), whereIds[1], async()=>{
//         // rootStr =  + whereIds[1];
//         setTimeout(() => {
//             console.log('3', whereIds);
//             return true;
//         }, 2000);
//     });
// }


//========================================




//========================================

var tmpId=[];
async function one(adminEmail){
    // whereIds=[];
    try{
        await whereMe('chatrooms3/', 'adminEmail', adminEmail,  ()=>{
            console.log('1', whereIds);
            // if(whereIds.length==0){
            //     one(adminEmail);
            // }
        });
    }catch(e){
        console.log('e', e);
    }
}

async function two(etc, memberEmail){
    // whereIds=[];
    // var tmpId = whereIds[0];
    try{
        whereMe('chatrooms3/' + tmpId[0] + '/messagesData/', 'memberEmail', memberEmail, ()=>{
            console.log('2', whereIds);
        });

    }catch(e){
        console.log('e', e);
    }
}

async function three(){
    // console.log('whereIds[0]', whereIds[0]);
    try{
        rootStr = 'chatrooms3/' + tmpId[0] + '/messagesData/';
        console.log('rootStr', rootStr);
        await getting(rootStr, whereIds[1], ()=>{
            console.log('3', whereIds);
        });

    }catch(e){
        console.log('e', e);
    }
}
