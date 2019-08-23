var storedDates = [];

async function state(s, email){       
    //TODO:
    //tags: state, creatingMessages
    
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

    if(s==4){
        //match an admin email
        //pull all messages
        //pull Date{} of 1 message
        //convert it to timestamp
        await matchAdmin('lover@gmail.com');
        wait(2000).then(async()=>{
            if(savedMessagePaths==[]){
                state(4);
            }else {
                await pullMessages(savedMessagePaths[1]);
                var tmp = savedMessages[0].date.seconds;
                var date = new Date(null);
                date.setTime(tmp*1000);
                console.log('date', date);
                
            }

        });

    }

    if(s==5){
        //state function to pull all messages and sort them based on time
        var storedDates = [];

        await matchAdmin('lover@gmail.com');
        wait(2000).then(async()=>{
            if(savedMessagePaths==[]){
                state(4);
            }else {
                await pullMessages(savedMessagePaths[1]);
               
                
            }

        }).then(()=>{
            for(var i=0; i<savedMessagePaths.length; i++){
                var tmp = savedMessage[i].date.seconds;
                var date = new Date(null);
                date.setTime(tmp*1000);
    
                // console.log('date', date);
    
                storedDates.push(date);
            }
            console.log('storedDates', storedDates);


        });


    }

}