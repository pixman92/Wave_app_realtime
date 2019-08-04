// file that creates message based on chatroom

function addMessage(roomID, msg, senderEmail, counter){
    // function that will add <data> to a message [doc] in cloud firestore
    // db.collection("/chatrooms/I4IwkTcAnzFWUhs5dKHL").update()


    var tmpDate = new Date();

    addDataMergeTrue("/chatrooms/"+roomID+"/messages/", {message: msg, email: senderEmail, date: tmpDate});   //important! have last '/' in path String






}

function pullMessages(roomID){
    // function that pulls messages from a specific Room
    // -it will pull last 10 days of messages, based on a .where("date", "<", tenDatesVariable)
    // -if there is are no messages within less than 10 days, or there are less than 10 Messages, it will pool all messages, until the requirement for 10 Messages has been met
    // -this function will also compare and query only 

    pullDataFromFirestore("/chatrooms/"+roomID+"/messages/");
    
}