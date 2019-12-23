//========================================

function ax(myEmail){
    await whereMe('myEmail', myEmail);
}

var wholeProfile=[];
function axx(docMe){
    //function to get all 'chatRooms' I'm a part of
    wholeProfile=[];
    await db.collection("profiles").doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeProfile.push(snap.data());
    });

}

function axxx(){
    
}