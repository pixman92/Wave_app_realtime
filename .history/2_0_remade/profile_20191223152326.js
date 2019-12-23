//========================================

function ax(myEmail){
    await whereMe('myEmail', myEmail);
}

var wholeProfile=[];
function axx(){
    //function to get all 'chatRooms' I'm a part of
    wholeProfile=[];
    await db.collection("chatrooms2").doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeProfile.push(snap.data());
    });

}

function axxx(){
    
}