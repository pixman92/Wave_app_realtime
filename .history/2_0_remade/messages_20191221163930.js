//this file is for the purpose of creating a message and add messages to a chatRoom


// function message(adminEmail, message, memberEmail){

    async function one(adminEmail) {
        await whereMe("adminEmail", adminEmail);
        wait(700).then(()=>{
            if(whereIds==undefined){
                
            }
            one(adminEmail);
        });
    }

    async function two(){
        await getting(whereIds[0]);
        console.log('whereIds', whereIds);
        wait(700).then(()=>{
            if(evenArr2==undefined){
                two();
            }
        });
    }

    var messageList = [];
    // function three() {
    //     for(var i=0; i<evenArr2)
    // }


// }