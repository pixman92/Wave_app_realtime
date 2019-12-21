
async function one(adminEmail="john@gmail.com"){
    await whereMe("adminEmail", adminEmail);
    console.log('one run');
}

async function two(){
    await getting(whereIds[0]);
    console.log('whereIds', whereIds);
}

async function three(memberEmail) {
    tmp1=[]
    console.log('evenArr2', evenArr2);
    if(evenArr2[0].memberList.length==0){
        console.log('emptied, adding', memberEmail);
        tmp1.push(memberEmail);
    }else{
        for(var i=0; i<=evenArr2[0].memberList.length; i++){
            await tmp1.push(evenArr2[0].memberList[i]);
            console.log('i', i);
        }
        await tmp1.push(memberEmail);
    }
}

function four(){
    console.log('four ran');
    //error case...
    for(var i=0; i<=tmp1.length; i++){
        if(tmp1[i]==undefined){
            tmp1.splice(i);
        }
    }
}

async function five(){
    await addDoc(whereIds[0], {memberList: tmp1} );
}

async function runThemAll(memberEmail) {
    one();
    wait(700).then(()=>{
        two();
        wait(700).then(async()=>{
            await three(memberEmail);
            wait(700).then(()=>{
                four();
                wait(700).then(()=>{
                    five();
                });        
            });                
        });
    });

}
