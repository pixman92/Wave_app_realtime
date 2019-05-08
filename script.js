

//functions to add data, then pull data

async function createRoom(myEmail){
    // function that creates a new Chat Room
    var tmpDate = new Date();
    addDataToFirestoreForCompletelyNew('chatrooms2', {email: myEmail, date: tmpDate, counter: 1});
}

var meCount=0;
function createMsg(myEmail, chatroomNum, msg){
    //function that creates a message and appends it to the correct child Chat Room

    // wait(1000).then(()=>{
    //     roomNumber(chatroomNum);
    // });

    returnedQuery();
    pullingData(chatroomNum);

    

    console.log('meCount', meCount);
    console.log('savedDoc', savedDoc);    

    console.log('firepath', firestorePaths[chatroomNum]);

    // pathsComplete(myEmail, chatroomNum, msg);

    addDataMergeTrue(firestorePaths[0], {email: myEmail, msg: msg, counter: meCount++ });
    
}


function selectChatRoomFromThoseIAmApart(myEmail){
    //function that will return an array of Chat Room paths of which this Email is listed within
    
}

//================================================
// queryData('chatrooms2')
// pullData(firestorePaths[<index>])


//================================================
// function roomNumber(chatroomNum){
    
//     if(savedDoc==""){
//         returnedQuery();
//         console.log('no savedDoc', );
//     }else{
//         pullDataFromFirestore(firestorePaths[chatroomNum]);
//         meCount = savedDoc[savedDoc.length].counter;
//         console.log('savedDoc', savedDoc);
//     }
// }

// async function returnedQuery(chatroomNum){
//     await queryData('chatrooms2');
//     wait(800).then(()=>{
//         if(firestorePaths==""){
//             returnedQuery();
//         }else{
//             pullDataFromFirestore(firestorePaths[chatroomNum]);
//             meCount = savedDoc[savedDoc.length].counter;
//             console.log('savedDoc', savedDoc);    }

//     });
// }

//========================================
var globMe;
async function returnedQuery(){
    await queryData('chatrooms2');
    wait(800).then(async()=>{
        // globMe = firestorePaths;
        // console.log('firestorePaths2', firestorePaths);
        if(!firestorePaths){
            console.log('paths null', );
            returnedQuery();
        // }else{
    }
    });
}   
// function pullingData(chatroomNum){
//     console.log('firepaths3', firestorePaths);
//     pullDataFromFirestore(firestorePaths[chatroomNum]);
//     wait(800).then(()=>{
//         if(!savedDoc){
//             pullingData();
//         }
//         meCount = savedDoc[savedDoc.length-1].counter;
//     });
// }

function pullingData(chatroomNum){
    console.log('firepaths3', firestorePaths);
    wait(800).then(()=>{
        if(!firestorePaths){
            returnedQuery();
            pullingData(chatroomNum);
        }
    });
    pullDataFromFirestore(firestorePaths[chatroomNum]);
    meCount = savedDoc[savedDoc.length-1].counter;
}


function pathsComplete(myEmail, chatroomNum, msg){
    wait(800).then(()=>{
        if(!firestorePaths){
            console.log('paths incomplete for messages', );
            pathsComplete();
        }
    });
    addDataMergeTrue(firestorePaths[0]+"/messages", {email: myEmail, msg: msg, counter: meCount });
}