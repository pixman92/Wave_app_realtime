//========================================
//file to select a chatRoom ID and store in global variable


function getRoomID(adminEmail) {
    async function one(adminEmail){
        //this function pulls IDs
        whereIds=[];
        await whereMe("adminEmail", adminEmail);
    
        console.log('one run');
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