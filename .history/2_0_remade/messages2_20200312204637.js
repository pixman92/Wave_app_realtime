async function messageMaker (adminEmail, message, memberEmail){   
    
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

        await addDoc(whereIds[0], message, {messages: message})

    });


}