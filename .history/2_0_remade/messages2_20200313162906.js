function addMessageToData(adminEmail, message, memberEmail){
    try{
        var one = await getWhereIds(adminEmail);
        var two = await pushMessageData(one);
    }catch(e){
        console.log('e', e);
    }

    async function getWhereIds(){
        await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{

        });
    }
    async function pullMessageData() {
        adding('chatrooms3/' +whereIds[0] + '/messagesData/', {memberEmail: memberEmail, message: message})
        
    }
}




//==
        
async function runAll(adminEmail, memberEmail){
    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1, memberEmail);
        var three3 = await three(two2);
        // let d = await decide(two2, memberEmail);
        // let four = await four(three3);


        return 'done!';
    }catch(e){
        console.log('error', e);
        throw e;
    }

}
//========================================




//========================================

var tmpId=[];
async function one(adminEmail){
    // whereIds=[];
    try{
        await whereMe('chatrooms3/', 'adminEmail', adminEmail,  ()=>{
            console.log('1', whereIds);
            // if(whereIds.length==0){
            //     one(adminEmail);
            // }
        });
    }catch(e){
        console.log('e', e);
    }
}

async function two(etc, memberEmail){
    // whereIds=[];
    // var tmpId = whereIds[0];
    try{
        await whereMe('chatrooms3/' + whereIds[0] + '/messagesData/', 'memberEmail', memberEmail, ()=>{
            console.log('2', whereIds);
        });

    }catch(e){
        console.log('e', e);
    }
}

async function three(){
    // console.log('whereIds[0]', whereIds[0]);
    try{
        rootStr = 'chatrooms3/' + whereIds[0] + '/messagesData/';
        console.log('rootStr', rootStr);
        await getting(rootStr, whereIds[1], ()=>{
            console.log('3', whereIds);
        });
        whereIds=[];
    }catch(e){
        console.log('e', e);
    }
}
