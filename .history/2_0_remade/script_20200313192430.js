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
var secsFromRoom = 0;
async function getRoomBasedOnAdmin(adminEmail) {
    //function that pulls room based on adminEmail
    //then returns room:DateID

    await whereMe('chatrooms2', "adminEmail", adminEmail);
    wait(700).then(()=>{
        getting('chatrooms2', whereIds[0]);
        wait(700).then(()=>{
            console.log('secs of Room: ' + adminEmail, evenArr2[0].dateID.seconds);
            secsFromRoom = evenArr2[0].dateID.seconds;
            return evenArr2[0].dateID.seconds;
        });
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















