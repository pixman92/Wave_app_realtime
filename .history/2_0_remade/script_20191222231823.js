//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room

    // addDataMergeTrue('/chatroom2/', {adminEmailK: email, titleOfRoom: title});

    adding({adminEmail: email, title: title, memberList:"", messages: ""});
}


async function addMemeberToRoom(adminEmail, memberEmail){
    //function that adds members to a selected room, based on adminEmail
    //soon to be, adding to a selected list of 

}
//========================================
function addMessage() {
    
}

function getMessages(adminEmail){
    pullMessages(adminEmail);
}

//=============================================
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}














