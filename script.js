

//functions to add data, then pull data

async function createRoom(myEmail){
    // function that creates a new Chat Room
    var tmpDate = new Date();
    addDataToFirestoreForCompletelyNew('chatrooms2', {admin: myEmail, date: tmpDate, counter: 1});
}

var meCount=0;
function createMsg(myEmail, chatroomNum, msg){
    //function that creates a message and appends it to the correct child Chat Room

    // wait(1000).then(()=>{
    //     roomNumber(chatroomNum);
    // });

    returnedQuery(chatroomNum);


    async function returnedQuery(chatroomNum){
        //querying to populate firestorePaths
        await queryData('chatrooms2');
        wait(800).then(()=>{
            if(firestorePaths==""){
                returnedQuery();
            // }else{
        }
        });
        // console.log('firestorePaths undefined?', firestorePaths=="");
    }   

    wait(700).then(()=>{
        pullingData();

    });
    function pullingData(){
        //pulling fields, to make sure of right Room
        pullDataFromFirestore(firestorePaths[chatroomNum]);
    }
    wait(800).then(()=>{
        if(savedDoc==""){
            pullingData();
        }
        console.log('saveDoc undefined?', savedDoc==undefined);
        meCount = savedDoc[savedDoc.length-1].counter;
    });

    console.log('meCount', meCount);
    console.log('savedDoc', savedDoc);    
    console.log('firepath', firestorePaths[chatroomNum]);

    wait(800).then(()=>{
        if(firestorePaths==""){
            returnedQuery();
        }else{
            addDataMergeTrue(firestorePaths[chatroomNum]+'/messages', {email: myEmail, msg: msg, counter: meCount++});
        }
    });
    
}


function selectChatRoomFromThoseIAmApart(myEmail){
    //function that will return an array of Chat Room paths of which this Email is listed within
    
}


//================================================
var docMe2=[];
var savedMessage = []; var savedMessagePaths = []; 
function matchAdmin(path, adminEmail, roomNumber){
    //function that matches where() - admin <email>
    db2.collection(path)
    .where('admin', '==', adminEmail)
    .get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            var docData = doc.data();
            savedMessage.push(docData);
            // var docId = doc.id;
            docMe2.push(doc);

        });
        for(var i in docMe2){
            savedMessagePaths.push(docMe2[i].ref.path);
        }
        console.log('savedMessagePaths', savedMessagePaths);
    });
}

function pullMessages(path, chatroomNum){
    //funciton that pull messages from a matched Room

    queryData(path);
    queryData(savedMessagePaths[chatroomNum]+'/messages');
    for(var i in firestorePaths){
        pullDataFromFirestore(firestorePaths[0]);

    }

}


//================================================
// steps for adding Msg(s)
// -query data
// -pullDataFromFirestore()
// -add msg, using 'firestorePaths[<index>]+"/messages"'


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