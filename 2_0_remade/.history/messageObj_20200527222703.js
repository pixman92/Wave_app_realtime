class Message{
    constructor(date, sender, text){
        this.date = moment().format();
        this.sender = sender;
        this.text = text;
    }

    printMe(){
        console.log("Message from: ", this.sender);
        console.log('message: ', this.text);
        console.log('on date: ', this.date);
    }
}