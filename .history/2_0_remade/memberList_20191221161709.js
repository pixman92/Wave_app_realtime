//========================================
//


async function one(adminEmail="john@gmail.com"){
    await whereMe("adminEmail", adminEmail);

    console.log('one run');
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

var tmpOne=[];
async function three(memberEmail) {
    tmpOne=[];
    console.log('evenArr2', evenArr2);
    if(evenArr2[0]==undefined){
        console.log('emptied, adding', memberEmail);
        // tmpOne.push(memberEmail);
    }else{
        if(evenArr2[0].memberList!=undefined){
            for(var i=0; i<evenArr2[0].memberList.length; i++){
                tmpOne.push(evenArr2[0].memberList[i]);
                console.log('i', i);
            }
            tmpOne.push(memberEmail);
            console.log('memberEmail', memberEmail);
            // wait(700).then(async ()=>{
            //     tmpOne.push(memberEmail);
    

            // });
            console.log('tmpOne', tmpOne);
        }else{

            tmpOne.push(memberEmail);
        }
        console.log('tmpOne, close to done', tmpOne);
    }
}
var tmpTwo=[];
function four(){
    tmpTwo=[];
    console.log('four ran');
    console.log('tmpOne', tmpOne);
    //error case...
    if(evenArr2[0]==undefined){
        console.log('nothing here');
        console.log('tmpTwo', tmpTwo);
        tmpTwo.push(tmpOne[0]);
    }else{
        for(var i=0; i<tmpOne.length; i++){
            if(tmpOne[i]==undefined){
                // tmpOne.splice(i);
                console.log('undefined i', i);
            }
            else{
                tmpTwo.push(tmpOne[i]);
                
            }
        }
    }
}

async function five(){
    await addDoc(whereIds[0], {memberList: tmpTwo} );
}

async function runThemAll(memberEmail) {
    one();
    wait(700).then(async()=>{
        await two();
        wait(800).then(async ()=>{
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
