function state(prop, email, message){       
    //function to set the Stage, per each run!

    if(prop==1){
        //creating a message for a chatroom, based on who is admin
        // createMsg('email', 0, 'msg', 'sam@gmail.com');

        addMessage("", message, email, "");


    }
    if(prop==2){
        //creating a chat room, with who is named Admin
        createRoom("lover@gmail.com")
    }

    if(prop==3){
        //retrieving 10 messages, or all messages

    }

}