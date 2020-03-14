//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room
    var tmpDate = new Date();
    adding('chatrooms3', {adminEmail: email, title: title, dateID: tmpDate});
}


async function addMemeberToRoom(adminEmail, memberEmail){
    //function that adds members to a selected room, based on adminEmail
    //soon to be, adding to a selected list of chatrooms



}
//========================================
function addMessage(adminEmail, message, memberEmail) {
    addMessageToData(adminEmail, message, memberEmail);
}

function getMessages(adminEmail){
    pullMessages(adminEmail);
}

//========================================

function selectRoom(adminEmail){
    //function to pull and select room based on admin
    selectRoom(adminEmail)
}


//========================================

function getMembers(adminEmail, select){
    pullMembersOfRoom(adminEmail, select)
}

function addMember(roomId, memberEmail){
    
}

//========================================

function logOfProfileChatrooms() {
    
}


//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}















