//========================================

var profileSelect=[];
function ax(myEmail){
    tmp = db.collection("profiles");

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

}


//=============================================
//functions to pull chatRoom IDs, based on Timestamp
// function 