class Room{
    constructor(adminEmail, date){
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

    addDataToFirestore(){
        whereIds=[];
        await whereMe('chatrooms3', 'adminEmail', adminEmail, ()=>{
            console.log('whereIds1', whereIds);
        });
        adding('chatrooms3/' +whereIds[i] + '/messagesData/', {memberEmail: memberEmail, message: message, date: tmpDate})
    }


}