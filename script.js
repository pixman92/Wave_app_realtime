// FFP Order:


// Add users...
// - users(UID, email)
// Get users...
// - getUsers(num)


// Getting fields from chatroom
// - pathLoop(path)
// - general(strungArray[i]+'field')
// 


var db = firebase.database();


function setup(){
    //sets up dummy data
    
}

async function makeChatRoom(email){
    // function that makes a chat room
    // adds 'themselves' as its sole user
    var chatroomID = await db.ref('chatrooms').push();
    console.log('chatroomID', chatroomID);

    var key = await chatroomID.key;
    console.log('key', key);

    db.ref('chatrooms/'+key+'/usersEmails').push({
        users: email
    });



}

async function makeMessage(message, sender, chatRoomNum){
    // function that gets a chatroom based on NUM
    // then appends a obj{}
    // obj{} is a sender&message 
    await pathLoop('chatrooms/');
    // await pathLoop(strungArray[3]);
    var chatroomID = await db.ref(strungArray[chatRoomNum]+'/messages').push({
        message: message,
        sender: sender,
    });
}

async function getChatRoomBasedOnEmail(email){
    await pathLoop('chatrooms/');
    await pathLoop(strungArray[3]);
    // await pathLoop(strungArray[0]);
    // await pathLoop(strungArray[0]);
    // for (let i = 0; i < strungArray.length; i++) {
        console.log('arrayOfVal', arrayOfVal);

}






