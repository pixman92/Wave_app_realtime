var messagesJSON="";
async function messageMaker (adminEmail, message, memberEmail){   


    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

        var tmpArr = []; 
        //pull messages from list
        await getting('chatrooms3', whereIds[0], ()=>{
            tmpArr.push({message: wholeDoc[0].messages, memberEmail:memberEmail});

            if(wholeDoc[0].messageData==undefined){
                messagesJSON = JSON.stringify(tmpArr);
                
            }else{
                messagesJSONTotal = JSON.stringify(tmpArr) + wholeDoc[0].messageData;
            }
            
            console.log('tmpArr', tmpArr);
        });


        await addDoc('chatrooms3', whereIds[0], {messageData: messagesJSONTotal});      //whereId[<index>] - to be changed

    });


}