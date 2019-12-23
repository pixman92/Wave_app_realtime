//========================================
//file to select a chatRoom ID and store in global variable


// function getRoomID() {
    async function one(adminEmail){
        //this function pulls IDs
        whereIds=[];
        await whereMe("adminEmail", adminEmail);
    
        console.log('one run');
    }
    
    async function two(){
        //this function gets the doc.data();

        for(var i=0; i<whereIds.length; i++){
            await getting(whereIds[i]);
        }
        console.log('returned values', evenArr2);
        // console.log('whereIds', whereIds);
        // wait(700).then(()=>{
        //     if(evenArr2==undefined){
        //         two();
        //     }
        // });
    }
// }