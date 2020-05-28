async function messageMaker (adminEmail, message, memberEmail){   
    
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

        await addDoc('chatromoms', whereIds[0], {messages: message, memberEmail: memberEmail})       //whereId[<index>] - to be changed

    });


}