//========================================

var profileSelect=[];
function ax(myEmail){
    tmp = db.collection("profiles");

    tmp2 = tmp.where("myEmail", '==', myEmail);)

    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc)
        await whereIds.push(doc.id);
    }));
}

var wholeProfile=[];
function axx(docMe=profileSelect){
    //function to get all 'chatRooms' I'm a part of
    wholeProfile=[];
    await db.collection("profiles").doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeProfile.push(snap.data());
    });

}

function axxx(){
    
}