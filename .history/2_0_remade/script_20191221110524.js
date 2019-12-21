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
                await whereMe("adminEmail", adminEmail);
                console.log('one run');
            });
        }
        if(whereIds.length==undefined){
            one();
        }else{
            console.log('defined!');
            two();
            async function two(){
                    wait(700).then(async ()=>{
                        await getting(whereIds[0]);
                        console.log('whereIds', whereIds);
                        if()
                });
            }
            wait(700).then(async()=>{
                console.log('evenArr2', evenArr2);
                if(evenArr2.length==0){
                    evenArr2.push(memberEmail);
                }else{
                    for(var i=0; i<=evenArr2[0].memberList.length; i++){
                        await tmp1.push(evenArr2[0].memberList[i]);
                    }
                    tmp1.push(memberEmail);
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

            });

        }
    }         
}
//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}















