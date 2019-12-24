//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room
    var tmpDate = new Date();
    adding({adminEmail: email, title: title, memberList:"", messages: "", dateID: tmpDate});
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

function getRoomBasedOnAdmin(adminEmail) {
    //function that pulls room based on adminEmail
    //then returns room:DateID

    await whereMe('chatrooms2', "adminEmail", adminEmail);
    wait(700).then(()=>{
        getting('chatrooms2', )
    });
}

//========================================

function getMembers(adminEmail, select){
    pullMembers(adminEmail, select)
}

//========================================

function logOfProfileChatrooms() {
    
}


//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}















