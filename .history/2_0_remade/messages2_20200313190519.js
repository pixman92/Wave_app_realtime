async function addMessageToData(adminEmail, message, memberEmail){
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
    async function pushMessageData(one, message, memberEmail) {
        var tmpDate = new Date();
        adding('chatrooms3/' +whereIds[0] + '/messagesData/', {memberEmail: memberEmail, message: message, date: tmpDate})
        
    }
}




//=//========================================
        
var tmpId=[];
async function pullMessages(adminEmail){
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1);
        // var three3 = await three(two2);
        // let d = await decide(two2);
        // let four = await four(three3);


        return 'done!';
    }catch(e){
        console.log('error', e);
        throw e;
    }
    async function one(adminEmail){
        // whereIds=[];
        try{
            await whereMe('chatrooms3/', 'adminEmail', adminEmail,  ()=>{
                console.log('1', whereIds);
                if(!whereIds){
                    console.log('NONE FOUND');
                }
                // if(whereIds.length==0){
                //     one(adminEmail);
                // }
            });
        }catch(e){
            console.log('e', e);
        }
    }
    
    async function two(etc){
        // pulls all 
        try{
            
            getAll('chatrooms3/' + whereIds[0] + '/messagesData/', ()=>{});

        }catch(e){
            console.log('e', e);
        }
    }
}
//========================================




//========================================

