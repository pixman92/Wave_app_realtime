var messagesJSON="";
async function messageMaker (adminEmail, message, memberEmail){   


    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

        var tmpArr = []; 
        //pull messages from list
        await getting('chatrooms3', whereIds[0], ()=>{
            tmpArr= {message: message, memberEmail:memberEmail};

            if(wholeDoc[0].messageData==undefined){
                messagesJSON = JSON.stringify(tmpArr);
            }else{
                messagesJSON = JSON.stringify(tmpArr) + wholeDoc[0].messageData;
            }
            
            console.log('tmpArr', tmpArr);
        });


        await addDoc('chatrooms3', whereIds[0], {messageData: messagesJSON});      //whereId[<index>] - to be changed

    });


}

async function pullMessageData(adminEmail){
    whereIds=[];
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{
        wait(700).then(async ()=>{
                await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', 'student1', async()=>{
                console.log('whereIds[1]', whereIds[1]);
                tmp = whereIds[1];
                getting('chatrooms3/' + whereIds[0] + '/messagesData/', whereIds[1], ()=>{
                    
                });
            });
        });
    
    });

}