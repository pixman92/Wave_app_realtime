//this file is for the purpose of creating a message and add messages to a chatRoom


function message(adminEmail, message, memberEmail){

    wait(700).then(()=>{
        bx(adminEmail);
        wait(700).then(()=>{
            bxx();
            wait(700).then(()=>{
                bxxx();
                wait(700).then(()=>{
                    bxxx_x();
                    wait(700).then(()=>{
                        bxxx_xx(message);
                        wait(700).then(()=>{
                            bxxx_xxx();
                            wait(700).then(()=>{
                                bxxx_xxx_x();
                            });
                        });
                    });
                });
            });
        });
    });




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
    function bxxx_xx(message, memberEmail){
        smallArr=[]; 
        //bigArr=[];
        console.log('five done');
        var dateTmp = new Date();
        smallArr.push(message);
        smallArr.push(memberEmail);
        smallArr.push(dateTmp);

        bigArr.push(smallArr);

    }
    
    
    var jsonMe; 
    function bxxx_xxx() {
        
        jsonMe = JSON.stringify(bigArr);
    }

    async function bxxx_xxx_x(){
       await addDoc(whereIds[0], {messages: jsonMe});
        // 
        // addDoc(whereIds[0], {messages: {msg}});
    }
}



//========================================
//pulling down messages to HTMLize them
var guiStr=[];
async function pullMessages(adminEmail){

    function axxx_x(adminEmail){
        wait(700).then(async()=>{
            await ax(adminEmail);
            wait(700).then(()=>{
                axx();
                wait(700).then(()=>{
                    axxx();
                });
            });
        });

    }

    if(guiStr==undefined) axxx_x(adminEmail);
  
    async function ax(adminEmail) {
        await whereMe("adminEmail", adminEmail);
            wait(700).then(async()=>{
                if(whereIds==undefined){
                    one(adminEmail);
                    console.log('i ran');
                }
                else{
                }
            });
        
    }
    
    async function axx() {
        evenArr2 = []
        await getting(whereIds[0]);
        console.log('whereIds', whereIds);
    
        if(whereIds==undefined) ax(adminEmail);
    
        wait(700).then(()=>{
            if(evenArr2==undefined){
                axx();
            }
            else{
                axxx();
            }
        });
    }
    
    
    function axxx(){
        guiStr=[];
        // if(evenArr2.length!=0){
        try{
            guiStr = JSON.parse(evenArr2[0].messages);
        }catch(error){
            console.log('error', );(error);
            console.log('no messages', );
        }

        console.log('guiStr', guiStr);
    }

}
