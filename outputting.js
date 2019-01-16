// A file of functions that output <chatroom> data into HTML
// You MUST select a <chatroom> before running functions

async function changeTitle(){
    var newTitle = await getTitle();

    document.getElementById('title').innerText=newTitle;
    // console.log('title', newTitle);
}

var messageObj, tmp;
async function changeMessages(range){
    messageObj = await getAllMsgs();

    // var str = "";
    document.getElementById('makeMessages').innerHTML = "";
    tmp = "";
    for(var i=0; i<=range; i++){
        tmp = tmp + "<div><div class='text'>"+messageObj[i][1]+"</div><br><div class='sender'>"+messageObj[i][2]+"</div><br><div class='time'>"+messageObj[i][0]+"</div></div><div></div>";

    }

    console.log('tmp', tmp);

    document.getElementById('makeMessages').innerHTML = tmp;


}

// function runMe(){
//     setup().then(()=>{
//         changeMessages();

//     });
// }