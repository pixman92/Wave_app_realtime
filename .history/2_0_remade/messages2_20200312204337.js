async function messageMaker (adminEmail, message, memberEmail){   
    
    await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{

        await addDoc(where, docMe, data)

    });


}