
async function one(){
    await whereMe("adminEmail", "adminEmail");
    console.log('one run');
}

async function two(){
    await getting(whereIds[0]);
    console.log('whereIds', whereIds);
}

async function three() {
    console.log('evenArr2', evenArr2);
    if(evenArr2.length==0){
        evenArr2.push(memberEmail);
    }else{
        for(var i=0; i<=evenArr2[0].memberList.length; i++){
            await tmp1.push(evenArr2[0].memberList[i]);
        }
        tmp1.push(memberEmail);
    }
}

function four(){
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