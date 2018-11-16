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
async function addChatChildren(chatChildText, user) {
    await pathLoop('/chatrooms');

    var newDate = (new Date()).toString();

    db.ref(strungArray[indexSaved]+"/chatMessages").push({
        chatMessage: chatChildText,
        newDate: newDate,
        user: user,
    });

}

var arrayOfMessages=[];
async function pullAllChatChildren(){
    arrayOfMessages=[];
    await pathLoop('/chatrooms');
    await pathLoop(strungArray[indexSaved]);
    await pathLoop(strungArray[1]);
    
    for (var i = 0; i < strungArray.length; i++) {
        await general(strungArray[i]);
        arrayOfMessages.push(meVals[0])
    }

    console.log('arrayOfMessages', arrayOfMessages);

}

var textBox = "";
async function getBox(){
    await pathLoop('/chatrooms');
    await pathLoop(strungArray[indexSaved]);
    await pathLoop(strungArray[0]);
    
   

}

async function addUser(userEmail) {
    await pathLoop('/chatrooms');
    // await pathLoop(strungArray[indexSaved]);
    db.ref(strungArray[indexSaved]+'/users').push({
        user: userEmail
    });
}


async function users(mode, user){
    if(mode=="remove"){
        await pathLoop('/chatrooms');
        await pathLoop(strungArray[indexSaved]);
        await pathLoop(strungArray[2]);

        for (var i = 0; i < strungArray.length; i++) {
            await general(strungArray[i]);
            if(user==meVals[0]){
                console.log('yes deleted');
                db.ref(strungArray[i]).remove();
            }
        }
    }
    if(mode=="add"){

    }
}

function listedUsers(){

}