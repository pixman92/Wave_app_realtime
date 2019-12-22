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

    var messageList = [];
    async function three() {
        if(evenArr2[0].messages ==undefined){
            await addDoc(whereIds[0], {messages: ""});
        }
    }
    
    function four(message){
        if(evenArr2[0].messages.length==0) five(message);

        for(var i=0; i<evenArr2[0].messages.length; i++){
            messageList.push(evenArr2[0].messages["objToPass"]);
        }
        console.log('messageList', messageList);
    }
    var messageObj = {};
    function five(message){
        var dateTmp = new Date();
        messageObj['text'] = message;
        messageObj['date'] = dateTmp;

        return messageObj;
        // return JSON.stringify(messageObj);
    }

    var bigArr=[];
    function six() {
        
    }


    async function seven(){
       

        await addDoc(whereIds[0], {messages: {renewArr}});
        // 
        // addDoc(whereIds[0], {messages: {msg}});
    }

// }