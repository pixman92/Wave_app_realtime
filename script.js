

//functions to add data, then pull data

async function createRoom(myEmail){
    // function that creates a new Chat Room
    await addDataToFirestore('users', myEmail);
}

function createMsg(myEmail){
    //function that creates a message and appends it to the correct child Chat Room
}

function selectChatRoomFromThoseIAmApart(myEmail){
    //function that will return an array of Chat Room paths of which this Email is listed within
    
}