// FFP Order:

// getUID(<UID>)
// addUserToChatroom(<email>)
// makeMessage(sender, message)

// bigArray - array of all UIDs
// NEXT? to run through all array of


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

//================================================

var currentChatroom = "";
function getUID(UID){
    currentChatroom = 'chatrooms/'+UID+'/';
    console.log('currentChatroom', currentChatroom);
}



async function addUserToChatroom(user){
    // functiont that adds a 'user' to a corresponding 'Current' of chatroom
    db.ref(currentChatroom+'usersEmails').push({
        users: user
    });
}

async function addBoxToChatroom(text){
    db.ref(currentChatroom+'box').push({
        text:text,
    });
}

async function addMessageToChatroom(message, sender){
    // function that gets a chatroom based on NUM
    // then appends a obj{}
    // obj{} is a sender&message 
 
    // await pathLoop('chatrooms/');
    // await pathLoop(strungArray[3]);
    var chatroomID = await db.ref(currentChatroom+'messages').push({
        message: message,
        sender: sender,
    });
}



//================================================
var arrayOfMassGather = [];
async function massEmailGatherAndCheck(){
    // function that loops through all 'chatrooms' 
    // then extracts email based on location of userEmails
    // pushes them to an array
    await pathLoop('chatrooms/');
    for (let i = 0; i < strungArray.length; i++) {
        await getChatRoomBasedOnEmail(i);
        arrayOfMassGather.push(await getChatRoomBasedOnEmail(i));
    }
}

//================================================
async function makeListOfChatroomsThatBelongToYou(email){
    await pathLoop('chatrooms/');


    



}
//================================================
var arrayOfEmails = [];
async function getChatRoomBasedOnEmail(){
    // function that pulls a single chatroom
    // runs through a for loop to extract users
    // then spits out users
    // NEXT? 
    // compare to email passed
    // make array of all chats with my email
    await pathLoop(currentChatroom+'usersEmails');
    for (let i = 0; i < arrayOfVal.length; i++) {
        arrayOfEmails.push(arrayOfVal[i].users);   
        console.log('arrayOfVal', arrayOfEmails);
        
    }
}

var bigArray = [];
function makeHugeArrayOfAllUIDs(){
    db.ref('chatrooms/').once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            console.log(me);
            bigArray.push(me.ref.path.pieces_[1]);
        })});

    return bigArray;
}



