//functions for adding/removing members
//and the such from chatrooms

async function memberList(adminEmail){

    try{
        var one1 = one(adminEmail);
        var two2 = two(one1);
    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(adminEmail){
        whereIds=[];
        await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
            console.log('whereIds1', whereIds);
        });
    }

    async function two(){
        getAll('chatrooms3/' + whereIds[0] + '/memberList/', ()=>{});
    }


}

//========================================


async function addMemberToList(adminEmail, memberEmail){
    try{
        var one1 = one()
    }
}