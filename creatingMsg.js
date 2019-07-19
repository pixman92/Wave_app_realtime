// file that creates message based on chatroom

function addMessage(roomID, msg, senderEmail, counter){
 
    // db.collection("/chatrooms/I4IwkTcAnzFWUhs5dKHL").update()

    addDataMergeTrue("/chatrooms/I4IwkTcAnzFWUhs5dKHL/messages", {message: msg, email: senderEmail, counter: counter});




}

function pullMessages(roomID){
    db.
}