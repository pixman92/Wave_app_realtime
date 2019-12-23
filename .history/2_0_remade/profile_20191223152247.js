//========================================

function ax(myEmail){
    await whereMe('myEmail', myEmail);
}

function axx(){
    //function to get all 'chatRooms' I'm a part of
    wholeProfiles=[];
    await db.collection("chatrooms2").doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await wholeProfiles.push(snap.data());
    });

}