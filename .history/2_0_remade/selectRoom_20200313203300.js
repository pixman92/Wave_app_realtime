//========================================
//file to select a chatRoom ID and store in global variable

var selectingRoomID = [];
async function getRoomID(adminEmail) {
    //function to get room based on adminEmail

    try{
        var one1 = await one(adminEmail);
        var two2 = await two(one1);

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
    
    async function two(){
        //function to push all matching adminEmail(s) (rooms) to an Array[]
        selectingRoomID=[];
        //this function gets the doc.data();

        for(var i=0; i<whereIds.length; i++){
            await getting('chatrooms3', whereIds[i], ()=>{
                selectingRoomID.push(wholeDoc);
                selectRoomPaths.push(doc.id);
            });
        }
        // console.log('returned values', evenArr2);
        console.log('selectingRoomID', selectingRoomID );
    }

    return selectingRoomID;

}
