
async function one(adminEmail="john@gmail.com"){
    await whereMe("adminEmail", adminEmail);
    console.log('one run');
}

async function two(){
    await getting(whereIds[0]);
    console.log('whereIds', whereIds);
}

var tmp1=[]
async function three(memberEmail) {
    console.log('evenArr2', evenArr2);
    if(evenArr2[0].memberList.length==0){
        console.log('emptied, adding', memberEmail);
        tmp1.push(memberEmail);
    }else{
        for(var i=0; i<evenArr2[0].memberList.length; i++){
            tmp1.push(evenArr2[0].memberList[i]);
            console.log('i', i);
        }
        console.log('memberEmail', memberEmail);
        // wait(700).then(async ()=>{
        //     tmp1.push(memberEmail);

        // });
        console.log('tmp1', tmp1);
    }
}
var tmpTwo=[];
function four(){
    console.log('four ran');
    //error case...
    for(var i=0; i<tmp1.length; i++){
        if(tmp1[i]!=undefined){
            // tmp1.splice(i);
            tmpTwo.push(tmp1[i]);
        }
    }
}

async function five(){
    await addDoc(whereIds[0], {memberList: tmp} );
}

async function runThemAll(memberEmail) {
    one();
    wait(700).then(()=>{
        two();
        wait(700).then(async ()=>{
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
