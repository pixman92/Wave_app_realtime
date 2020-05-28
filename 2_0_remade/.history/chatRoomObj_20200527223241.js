class Room{
    constructor(adminEmail, date, messages, memeberList){
        this.adminEmail;
        this.date = moment().format();
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
        
    }
}