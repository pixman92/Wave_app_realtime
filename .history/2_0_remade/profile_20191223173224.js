//========================================
//functions that pull Profile Info 

function wholeProfileFunc(myEmail){

    ax(myEmail);
    wait(700).then(()=>{
        axx(docMe);
        wait(700).then(()=>{
            axxx();
            return 
        });
    });

    var profileSelect=[];
    async function ax(myEmail){
        //field in the profiles(Root) & field = myEmail
        tmp = db.collection("/profiles/");
        tmp2 = tmp.where("myEmail", '==', myEmail);
    
        tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
            console.log(doc)
            await profileSelect.push(doc.id);
        }));
    }
    
    var wholeProfile=[];
    async function axx(docMe=profileSelect[0]){
        //function to get all 'chatRooms' I'm a part of
        wholeProfile=[];
        await db.collection("profiles").doc(docMe).get().then(async (snap)=>{
            console.log(snap.data());
            await wholeProfile.push(snap.data());
        });
    
    }
    
    function axxx(){
        console.log('wholeProfile', wholeProfile);
    }
}


//=============================================
//functions to pull chatRoom IDs, based on Timestamp
// function 


function ax(docMe, data){
    //function to add to chatroom Data
    db.collection('profiles').doc(docMe).set(data, {merge: true});
}



//========================================
//functions to compare the dates stored in my profile to those that exist elsewhere
// 
// whereMe('chatrooms2', 'dateID', evenArr2[0].dateID)
