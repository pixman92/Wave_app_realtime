//functions for adding/removing members
//and the such from chatrooms

async function pullUpMemberList(adminEmail){

    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1);
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


async function addMemberToList(adminEmail, memberEmail, i){
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1, memberEmail, i);
    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(adminEmail){
        try{
            whereIds=[];
            await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
                console.log('whereIds1', whereIds);
            });
        }catch(e){
            console.log('e', e);
        }
    }

    async function two(etc, memberEmail, i){

        try{
            console.log('whereIds', whereIds);
            await adding('chatrooms3/' +whereIds[0] + '/memberList', {memberEmail: memberEmail});
        }catch(e){
            console.log('e', e);
        }

    }
}

//========================================

async function removeMemberFromList(adminEmail, memberEmail, i){
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1, memberEmail, i);
    }catch(e){
        console.log('e', e);
        throw e;
    }

    async function one(adminEmail){
        try{
            whereIds=[];
            await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
                console.log('whereIds1', whereIds);
            });
        }catch(e){
            console.log('e', e);
        }
    }

    async function two(one1, memberEmail, i){
        try{
            await db.collection('chatr')
        }catch(e){
            console.log('e', e);
            throw e;
        }
    }
}