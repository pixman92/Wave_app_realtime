

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

    returnedQuery(chatroomNum);

    async function returnedQuery(chatroomNum){
        await queryData('chatrooms2');
        wait(800).then(()=>{
            if(firestorePaths==""){
                returnedQuery();
            // }else{
        }
        });
    }   
    function pullingData(){
        pullDataFromFirestore(firestorePaths[chatroomNum]);
    }
    wait(800).then(()=>{
        if(savedDoc==""){
            pullingData();
        }
        meCount = savedDoc[savedDoc.length-1].counter;
    });

    console.log('meCount', meCount);
    console.log('savedDoc', savedDoc);    }

    console.log('firepath', firestorePaths[chatroomNum]);

    addDataMergeTrue(firestorePaths[chatroomNum], {email: myEmail, msg: msg, counter: meCount++ });
    
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