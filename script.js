// FFP Order:

// 1) getUID(<UID>)
// 2) addUserToChatroom(<email>)
// 3) makeMessage(sender, message)

// bigArray - array of all UIDs
// NEXT? to run through all array of


// Getting chatroom data?? 
// reference - line 150


var db = firebase.database();


async function setup(){
    //sets up dummy data
    await makeHugeArrayOfAllUIDs();
    await console.table(bigArray);
    // await getUID(bigArray[]);

    
}
var key = "";
async function makeChatRoom(email){
    // function that makes a chat room
    // adds 'themselves' as its sole user
    var chatroomID = await db.ref('chatrooms').push();
    console.log('chatroomID', chatroomID);

    key = await chatroomID.key;
    console.log('key', key);

    db.ref('chatrooms/'+key+'/usersEmails').push({
        users: email
    });
}

//================================================

var currentChatroom = "";
function setUID(UID){
    currentChatroom = 'chatrooms/'+UID+'/';
    console.log('currentChatroom', currentChatroom);
    return new Promise((resolve)=>{
        resolve(currentChatroom);
    })
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
// var arrayOfEmails = [];
// async function getChatRoomBasedOnEmail(){
//     // function that pulls a single chatroom
//     // runs through a for loop to extract users
//     // then spits out users
//     // NEXT? 
//     // compare to email passed
//     // make array of all chats with my email
//     await pathLoop(currentChatroom+'usersEmails');
//     for (let i = 0; i < arrayOfVal.length; i++) {
//         await arrayOfEmails.push(arrayOfVal[i].users);   
        
//     }
//     console.table(arrayOfEmails);
// }

var bigArray = [];
async function makeHugeArrayOfAllUIDs(){
    db.ref('chatrooms/').once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            console.log(me);
            bigArray.push(me.ref.path.pieces_[1]);
        })});

    return new Promise((resolve)=>{
            console.table(bigArray);
            resolve(bigArray);
            // console.log('', );
        });
}

//================================================


// 1) Select a chatroom
// 2) get all data sets from chat room
// 2.1) getBox() - all box text
// 2.2) getAllMsgs() - get all the messages back and forth
// 2.3) getAllUsers() - pull a list of users from 'currentChatroom'
// 3) output the data to HTML

async function getBox(){
    await pathLoop(currentChatroom+'box');
    console.log('BOX???', arrayOfVal);
}

var arrayOfMsgs = [];
async function getAllMsgs(){
    arrayOfMsgs = [];
    await pathLoop(currentChatroom+'messages');

    var len = strungArray.length;
    var tmpArray = strungArray;
    for (let i = 0; i < len; i++) {
        await pathLoop(tmpArray[i]);
        console.log('messageReturned', arrayOfVal);
        arrayOfMsgs.push(arrayOfVal);         
    }
    log(arrayOfMsgs);
}

//================================================

var arrayOfEmails=[];
async function getAllUsers(){
    arrayOfEmails = [];
    await pathLoop(currentChatroom+'usersEmails');

    var len = strungArray.length;
    var tmpArray = strungArray;

    for (let i = 0; i < len; i++) {
        await pathLoop(tmpArray[i]);

        arrayOfEmails.push(arrayOfVal);
    }

    log(arrayOfEmails);
}


//================================================

function log(data){
    console.table(data);
}