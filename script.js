

//functions to add data, then pull data

async function createRoom(myEmail){
    // function that creates a new Chat Room
    var tmpDate = new Date();
    addDataToFirestoreForCompletelyNew('chatrooms2', {admin: myEmail, date: tmpDate, counter: 1});
}

var meCount=0;
function createMsg(myEmail, chatroomNum, msg, adminEmail){
    //function that creates a message and appends it to the correct child Chat Room

    // wait(1000).then(()=>{
    //     roomNumber(chatroomNum);
    // });
    returnedQuery();
    // pullingData(chatroomNum);

    

    console.log('meCount', meCount);
    console.log('savedDoc', savedDoc);    

       
    // returnedQuery(chatroomNum);


    async function returnedQuery(chatroomNum){
        //querying to populate firestorePaths
        // await queryData('chatrooms2');
        // wait(800).then(()=>{
        //     if(firestorePaths==""){
        //         returnedQuery();
        //     }else{
        //         pullingData();
        //     }
        // });

        matchAdmin('chatrooms2', adminEmail, chatroomNum);
        wait(1800).then(()=>{
            if(docMe2==""){
                returnedQuery();
            }else{
                pullingData();
            }
        });

    }   
    function pullingData(){
        //pulling fields, to make sure of right Room
        pullDataFromFirestore(savedMessagePaths[chatroomNum]);
        wait(800).then(()=>{
            if(savedDoc==""){
                pullingData();
            }else{
                console.log('saveDoc undefined?', savedDoc==undefined);
                // NEXT? - Refactor a counter, that is tied to an 'assorted'
                // list of messages, based on timestamp. 
                // Sort, by timestamp, then increment 1 to latest message timestamp.
                // meCount = savedDoc[savedDoc.length-1].counter;
                // meCount++;
                makeMeCount();
                var date = new Date();
                addDataMergeTrue(savedMessagePaths[chatroomNum]+'/messages', {email: myEmail, msg: msg, counter: meCount, date: date});

            }
        });
    }

    console.log('meCount', meCount);
    console.log('savedDoc', savedDoc);    
    console.log('firepath', savedMessagePaths[chatroomNum]);

    // pathsComplete(myEmail, chatroomNum, msg);

    // somehow?? - mixed up in syncing - ugh
    // addDataMergeTrue(firestorePaths[0], {email: myEmail, msg: msg, counter: meCount++ });
}


function makeMeCount(){

}

//================================================





function selectChatRoomFromThoseIAmApart(myEmail){
    //function that will return an array of Chat Room paths of which this Email is listed within
    
}


//================================================
var docMe2=[];
var savedMessage = []; var savedMessagePaths = []; 
function matchAdmin(path, adminEmail, roomNumber){
    //function that matches where() - admin <email>

    savedMessagePaths=[];

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

//funciton that pull messages from a matched Room
function pullMessages(path, adminEmail, chatroomNum){

    first();

    async function first(){
        // await queryData(path);
        // wait(700).then(()=>{
        //     if(firestorePaths==""){
        //         first();
        //     }else{
        //         second();
        //     }
        // });

        matchAdmin(path, adminEmail, chatroomNum);
        wait(700).then(()=>{
            if(savedMessagePaths==""){
                first();
            }else{
                second();
            }
        });
    }
    async function second(){
        await queryData(savedMessagePaths[chatroomNum]+'/messages');
        wait(700).then(()=>{
            if(savedMessagePaths==""){
                second();
            }else{
                third();
            }
        });

    }
    function third(){
        for(var i in firestorePaths){
            pullDataFromFirestore(firestorePaths[0]);

    }

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


//================================================
var countMe=[];
function orderMe(path, orderMe){
    db2.collection(path).orderBy(orderMe)
    // .limit(1)
    .get()
    .then(async(snap)=>{
        snap.forEach(async (doc)=>{
            await countMe.push(doc);
        });
    });

}