//this file is for the purpose of creating a message and add messages to a chatRoom


// function message(adminEmail, message, memberEmail){

    async function one(adminEmail) {
        await whereMe("adminEmail", adminEmail);
        wait(700).then(()=>{
            if(whereIds==undefined){
                one(adminEmail);
                console.log('i ran');
            }
        });
    }

    async function two(){
        evenArr2 = []
        await getting(whereIds[0]);
        console.log('whereIds', whereIds);

        if(whereIds==undefined) one();

        wait(700).then(()=>{
            if(evenArr2==undefined){
                two();
            }
        });
    }
    
    async function three() {
        if(evenArr2[0].messages==undefined){
            await addDoc(whereIds[0], {messages: ""});
        }
    }
    
    var messageList = "";
    function four(message){
        if(evenArr2[0].messages.length==0||evenArr2[0].messages=={}) five(message);

        // for(var i=0; i<evenArr2[0].messages.length; i++){
            //     messageList.push(evenArr2[0].messages[i]);
            // }

            messageList = evenArr2[0].messages;
            
            console.log('messageList', messageList);

            bigArr+=messageList;
    }
        
     
    var bigArr=[];
    var smallArr=[];
    function five(message){
        smallArr=[];
        console.log('five done');
        var dateTmp = new Date();
        smallArr.push(message);
        smallArr.push(dateTmp);

        bigArr+=JSON.stringify(smallArr);

    }
    
    // var bigArr=[];
    // function six() {
    //     bigArr=[];
    //     for(var i=0; i<messageList.length; i++){
    //         bigArr.push(messageList[i]);
    //     } 
    //     bigArr.push(smallArr);
    // }
    var jsonMe; 
    function six() {
        
        jsonMe = JSON.stringify(bigArr);
    }

    async function seven(){
       await addDoc(whereIds[0], {messages: jsonMe});
        // 
        // addDoc(whereIds[0], {messages: {msg}});
    }

    function messagesFunc(){
        one('sam');
        wait(700).then(()=>{
            two();
            three();
        });
    }


// }



//========================================
//pulling down messages to HTMLize them

async function ax() {
    await whereMe("adminEmail", adminEmail);
        wait(700).then(()=>{
            if(whereIds==undefined){
                one(adminEmail);
                console.log('i ran');
            }
        });
}

function axx() {
    evenArr2 = []
    await getting(whereIds[0]);
    console.log('whereIds', whereIds);

    if(whereIds==undefined) one();

    wait(700).then(()=>{
        if(evenArr2==undefined){
            axx();
        }
    });
}

function axxx(){

}