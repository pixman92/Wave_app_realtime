//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room
    adding({adminEmail: email, title: title, memberList:"", messages: ""});
}


async function addMemeberToRoom(adminEmail, memberEmail){
    //function that adds members to a selected room, based on adminEmail
    //soon to be, adding to a selected list of chatrooms



}
//========================================
function addMessage(adminEmail, message, memberEmail) {
    message(adminEmail, message, memberEmail)
}

function getMessages(adminEmail, select){
    pullMessages(adminEmail, select);
}

//========================================

function selectRoom(adminEmail){
    //function to pull and select room based on admin
    getRoomID(adminEmail);
}

function getRoomBasedOnEmail(email) {

    
}

//========================================

function getMembers()

//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}















