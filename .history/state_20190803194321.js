function state(s, email, message){       
    //function to set the Stage, per each run!

    if(s==1){
        //creating a message for a chatroom, based on who is admin
        // 
        addMessage("iCPK9FJyJlfktOJL2v9T", message, email, "");


    }
    if(s==2){
        //creating a chat room, with who is named Admin
        createRoom(email)
    }

    if(s==3){
        //retrieving 10 messages, or all messages
        pullMessages("iCPK9FJyJlfktOJL2v9T")
    }

}