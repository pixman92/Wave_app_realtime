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

async function removeMemberFromList(adminEmail, memberEmail){
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1, memberEmail);
        var three3 = await three(two2, i);


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


    async function two(one1, memberEmail){
        try{
            await whereMe('/chatrooms3/' + whereIds[0] + '/memberList/', 'memberEmail', memberEmail, ()=>{
                console.log('2', whereIds);
            })
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function three(etc, i){
        try{
            // await db.collection('chatrooms3'+whereIds[i]+'/memberList').update({
            //     memberEmail: firebase.firestore.FieldValue.delete()
            // });

            await addDoc('/chatrooms3/' + whereIds[0] + '/memberList/', whereIds[1], {memberEmail:""});

            // addDoc('/chatrooms3/KkPN1XdURTmNanaksLRi/memberList/', 'TC7GfGKxefHE5EDQnx3i', {memberEmail:""})

        }catch(e){
            console.log('e', e);
            throw e;
        }
    }
}