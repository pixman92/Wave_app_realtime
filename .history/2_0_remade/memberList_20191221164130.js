//========================================
//this file ist 5 functions
//they take adminEmail data, find room, and add memebers to an array
//return that data back to Firestore()
//addMember(adminEmail, memberEmail)
function member(adminEmail, memberEmail){
    addMember(adminEmail, memberEmail);


    async function one(adminEmail){
        //this function pulls IDs
        await whereMe("adminEmail", adminEmail);
    
        console.log('one run');
    }
    
    async function two(){
        //this function gets the doc.data();
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
        //this function transfers one array to another
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
        //this function weeds out the undefined
        //those undefined prevent uploading to Firebase
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
        //this function uploads the 
        await addDoc(whereIds[0], {memberList: tmpTwo} );
    }
    
    async function addMember(adminEmail, memberEmail) {
        one(adminEmail);
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

}
