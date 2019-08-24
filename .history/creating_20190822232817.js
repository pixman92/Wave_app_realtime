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
    addDataMergeTrue("/chatrooms/"+roomID+"/messages/", {message: msg, email: senderEmail, date: tmpDate});   //important! have last '/' in path String
}

var savedMessages=[];
async function pullMessages(roomID){
    savedMessages=[];
    // TODO
    // function that pulls messages from a specific Room
    // -it will pull last 10 days of messages, based on a .where("date", "<", tenDatesVariable)
    // -if there is are no messages within less than 10 days, or there are less than 10 Messages, it will pool all messages, until the requirement for 10 Messages has been met
    // -this function will also compare and query only a Reasonable amount of Recent Messagesf

    // pullDataFromFirestore("/chatrooms/"+roomID+"/messages/");

    console.log(roomID+"/messages/");

    await db.collection(roomID+"/messages/").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            savedMessages.push(doc.data());
            console.log(doc.id, ' => ', doc.data());
        });
        
    });
    if(savedMessages.length==0){
        console.log('No messages');
    }

    

    
}