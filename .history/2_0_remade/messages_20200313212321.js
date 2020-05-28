async function addMessageToData(adminEmail, message, memberEmail, i){
    try{

        var one = await getWhereIds(adminEmail);
        var two = await pushMessageData(one, message, memberEmail);
    }catch(e){
        console.log('e', e);
    }

    async function getWhereIds(adminEmail){
        whereIds=[];
        await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
            console.log('whereIds1', whereIds);
        });
    }
    async function pushMessageData(one, message, memberEmail, i) {
        var tmpDate = new Date();
        adding('chatrooms3/' +whereIds[i] + '/messagesData/', {memberEmail: memberEmail, message: message, date: tmpDate})
        
    }
}




//=//========================================
        
var tmpId=[];
async function pullMessages(adminEmail, i){
    //function to pull all messages from firestore -> based on adminEmail
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1, i);
        return 'done!';
    }catch(e){
        console.log('error', e);
        throw e;
    }
    async function one(adminEmail){
        // finds path to Message Data based on adminEmail
        try{
            await whereMe('chatrooms3/', 'adminEmail', adminEmail,  ()=>{
                console.log('1', whereIds);
                if(!whereIds){
                    console.log('NONE FOUND');
                }
            });
        }catch(e){
            console.log('e', e);
        }
    }
    
    async function two(etc, i){
        // pulls all messages from Message Data -> from specified whereIds[]
        try{
            getAll('chatrooms3/' + whereIds[i] + '/messagesData/', ()=>{});
        }catch(e){
            console.log('e', e);
        }
    }
}
//========================================




//========================================

