//========================================
//file to select a chatRoom ID and store in global variable


async function getRoomID(adminEmail) {
    //function to get room based on adminEmail

    try{
        var one1 = await one(adminEmail);
        var two = await two(one);

        return 'finished';
    }catch(e){
        console.log('e', e);
    }

    async function one(adminEmail){
        //this function pulls IDs
        whereIds=[];
        await whereMe("chatrooms3", "adminEmail", adminEmail, ()=>{
            console.log('one run');

        });
    
    }
    
    var selectingRoomID=[];
    async function two(){
        //this function gets the doc.data();

        for(var i=0; i<whereIds.length; i++){
            await getting(whereIds[i]);
            selectingRoomID.push(evenArr2);
        }
        // console.log('returned values', evenArr2);
        console.log('selectingRoomID', selectingRoomID );
    }

    return selectingRoomID;

}
