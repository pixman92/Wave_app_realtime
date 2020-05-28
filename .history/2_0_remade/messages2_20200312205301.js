async function messageMaker (adminEmail, message, memberEmail){   
    
    await whereMe('chatrooms3', 'adminEmail', adminEmail, async ()=>{

        //pull messages from list
        await getting('chatrooms3', whereIds[0], ()=>{
            
        });



        await addDoc('chatrooms3', whereIds[0], )       //whereId[<index>] - to be changed

    });


}