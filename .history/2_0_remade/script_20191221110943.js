//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room

    // addDataMergeTrue('/chatroom2/', {adminEmailK: email, titleOfRoom: title});

    adding({adminEmail: email, title: title, memberList:""});
}


var tmp1=[]
async function addMemeberToRoom(adminEmail, memberEmail){
    big();
    async function big(){
        one();
        async function one(){
            wait(700).then(async()=>{
                
            });
        }
        if(whereIds.length==undefined){
            one();
        }else{
            console.log('defined!');
            two();
            async function two(){
                    wait(700).then(async ()=>{
                        
                        if(evenArr2.length==0){
                            three();
                        }
                });
            }
            function three(){
                console.log('three ran');
                wait(700).then(async()=>{
                    

            });
        }
                //error case...
                for(var i=0; i<=tmp1.length; i++){
                    if(tmp1[i]==undefined){
                        tmp1.splice(i);
                    }
                }
                wait(700).then(async ()=>{
                    await addDoc(whereIds[0], {memberList: tmp1} )
    
                });

            // });
        }
    }
    
}
//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}















