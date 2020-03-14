//functions for adding/removing members
//and the such from chatrooms

async function memberList(){

    try{
        var one1 = one();
        var two2 = two(one1);
    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(){
        whereIds=[];
        await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
            console.log('whereIds1', whereIds);
        });
    }

    async function two(memberEmail){
        adding('chatrooms3/' +whereIds[0] + '/messagesData/', {memberEmail: memberEmail});
    }


}