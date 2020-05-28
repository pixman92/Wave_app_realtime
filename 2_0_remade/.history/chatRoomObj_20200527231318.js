class Room{
    constructor(adminEmail, date, roomTitle){
        this.adminEmail;
        this.date = moment().format();
        this.roomTitle;
        this.messagesArray = [];
        this.memeberList = [];
    }

    addMessages(message){
        this.messagesArray.push(message);
    }

    printMessages(){
        console.log('Messages:\n================', this.messagesArray);
    }

    addMembers(memberObj){
        this.memeberList.push(memberObj);
    }
    removeMember(memberName){
        for(var i=0; i<this.memeberList.length; i++){
            if(memberName == this.memeberList[i]){
                this.memeberList.splice(i, 1);
            }
        }
        console.log('New Member List:\n=======', this.memeberList);
    }
    printMembers(){
        console.log('Memberlist: ', this.memeberList);
    }

    addAdminStuffToFirebase(){
        adding('chatrooms3/', {adminEmail: this.adminEmail, dateID: this.date, title: this.roomTitle});
    }

    addMessagesToFirebase(adminEmail, memberEmail, messageText){
        whereIds=[];
        await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
            console.log('whereIds1', whereIds);
        });
        adding('chatrooms3/' +whereIds[i] + '/messagesData/', {memberEmail: memberEmail, message: message, date: tmpDate})
    }


}