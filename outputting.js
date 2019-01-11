// A file of functions that output <chatroom> data into HTML
// You MUST select a <chatroom> before running functions

async function changeTitle(){
    var newTitle = await getTitle();

    document.getElementById('title').innerText=newTitle;
    // console.log('title', newTitle);
}

var messageObj;
async function changeMessages(){
    messageObj = await getAllMsgs();

    var str = "";

    


}

// function runMe(){
//     setup().then(()=>{
//         changeMessages();

//     });
// }