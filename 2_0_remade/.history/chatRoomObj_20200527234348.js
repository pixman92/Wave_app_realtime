class Room{
    constructor(adminEmail, roomTitle){
        this.adminEmail = adminEmail;
        this.date = moment().format();
        this.roomTitle = roomTitle;
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

    async addMessagesToFirebase(adminEmail, memberEmail, messageText){
        try{
            var first = await one();
            var second = await two(first);

        }catch(e){
            console.log(e);
            throw e;
        }


        async function one(){
            await whereMe('chatrooms3/', 'adminEmail', adminEmail, ()=>{
                console.log('whereIds1', whereIds);
            }); 

        }
        async function two(){
            await adding('chatrooms3/' +whereIds[0] + '/messagesData/', {memberEmail: memberEmail, message: messageText, date: moment().format()});

        }

    }


}