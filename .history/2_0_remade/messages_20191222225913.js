//this file is for the purpose of creating a message and add messages to a chatRoom


// function message(adminEmail, message, memberEmail){

    async function bx(adminEmail) {
        await whereMe("adminEmail", adminEmail);
        wait(700).then(()=>{
            if(whereIds==undefined){
                one(adminEmail);
                console.log('i ran');
            }
        });
    }

    async function bxx(){
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
    
    async function bxxx() {
        if(evenArr2[0].messages==undefined){
            await addDoc(whereIds[0], {messages: ""});
        }
    }
    
    var messageList = "";
    function bxxx_x(){
        // if(evenArr2[0].messages==undefined||evenArr2[0].messages=={}) five(message);
        if(evenArr2[0].messages==""||evenArr2[0].messages==undefined){
            //  five(message);
        }else{
            // var len = JSON.parse(evenArr2[0].messages);
    
            // for(var i=0; i<len.length; i++){
            //     bigArr.push(JSON.parse(evenArr2[0].messages[i]));
            // }

            bigArr = (JSON.parse(evenArr2[0].messages))


            
            console.log('messageList', messageList);
            // messageList = evenArr2[0].messages;
            // bigArr+=messageList;
            

        }
    }
        
     
    var bigArr=[];
    var smallArr=[];
    function bxxx_xx(message){
        smallArr=[]; 
        //bigArr=[];
        console.log('five done');
        var dateTmp = new Date();
        smallArr.push(message);
        smallArr.push(dateTmp);

        bigArr.push(smallArr);

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
    function bxxx_xxx() {
        
        jsonMe = JSON.stringify(bigArr);
    }

    async function bxxx_xxx_x(){
       await addDoc(whereIds[0], {messages: jsonMe});
        // 
        // addDoc(whereIds[0], {messages: {msg}});
    }

    function msg(){
        bx('sam');
        wait(700).then(()=>{
            bxx();
            bxxx();
        });
    }


// }



//========================================
//pulling down messages to HTMLize them

async function pullMessages(adminEmail){

    await ax(adminEmail);

    async function ax(adminEmail) {
        await whereMe("adminEmail", adminEmail);
            wait(700).then(()=>{
                if(whereIds==undefined){
                    one(adminEmail);
                    console.log('i ran');
                }
            });
    }
    
    async function axx() {
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
    
    var guiStr=[];
    function axxx(){
        guiStr = JSON.parse(evenArr2[0].messages);
        console.log('guiStr', guiStr);
    }

}
