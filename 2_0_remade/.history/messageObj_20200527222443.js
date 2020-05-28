class message{
    constructor(date, sender, text){
        this.date = moment().format();
        this.sender = sender;
        this.text = text;
    }

    printMe(){
        console.log(this.sender);
    }
}