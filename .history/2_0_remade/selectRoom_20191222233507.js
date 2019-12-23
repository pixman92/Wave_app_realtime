//========================================
//file to select a chatRoom ID and store in global variable


// function getRoomID() {
    async function one(adminEmail){
        //this function pulls IDs
        await whereMe("adminEmail", adminEmail);
    
        console.log('one run');
    }
    
    async function two(){
        //this function gets the doc.data();
        await getting(whereIds[0]);
        console.log('whereIds', whereIds);
        wait(700).then(()=>{
            if(evenArr2==undefined){
                two();
            }
        });
    }
}