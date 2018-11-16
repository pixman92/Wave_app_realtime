var db = firebase.database();

function makeChatRoom(box){
    db.ref('/chatrooms').push({
        box: box,
        users: [], 
    });
}

var indexSaved=0;
async function getChatRoomIndex(chatroom) {
    await pathLoop('/chatrooms');
    // console.log('chatroom', "chatrooms/"+chatroom);
    for (var i = 0; i < strungArray.length; i++) {
        if(("chatrooms/"+chatroom).toString()==strungArray[i]){
            indexSaved = i;
            console.log('indexSaved', indexSaved);
        }
    }
    return indexSaved;
}



var chatChildTextObj={};
var num = 0;
async function addChatChildren(chatChildText) {
    await pathLoop('/chatrooms');

    db.ref(strungArray[indexSaved]).push({
        num: chatChildText,
    })

}

async function addUsers(){
    await pathLoop('/chatrooms');
}