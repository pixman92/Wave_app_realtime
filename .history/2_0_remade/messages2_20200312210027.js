var messagesJSON="";
async function messageMaker (adminEmail, message, memberEmail){   
    
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

        var tmpArr = []; tmpArr2=[];
        //pull messages from list
        await getting('chatrooms3', whereIds[0], ()=>{
            tmpArr.push(wholeDoc[0].messages);
            
            console.log('tmpArr', tmpArr);
            messagesJSON = JSON.stringify(tmpArr);
        });


        await addDoc('chatrooms3', whereIds[0], )       //whereId[<index>] - to be changed

    });


}