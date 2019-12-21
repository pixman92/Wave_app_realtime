// file that creates message based on chatroom

async function createRoom(myEmail){
    // function that creates a new Chat Room
    
    var tmpDate = new Date();
    addDataToFirestoreForCompletelyNew('chatrooms', {admin: myEmail, date: tmpDate});
}


function addMessage(roomID, msg, senderEmail, counter){
    // function that will add <data> to a message [doc] in cloud firestore
    // db.collection("/chatrooms/I4IwkTcAnzFWUhs5dKHL").update()



    var tmpDate = new Date();
    addDataMergeTrue("/"+roomID+"/messages/", {message: msg, email: senderEmail, date: tmpDate});   //important! have last '/' in path String
}

