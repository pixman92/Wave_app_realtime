// FFP Order:

// - setup();
// - pullChatroomsBasedOnEmail(email)
// - addMessages()


// Add users...
// - users(UID, email)
// Get users...
// - getUsers(num)


// Getting fields from chatroom
// - pathLoop(path)
// - general(strungArray[i]+'field')
// 


var db = firebase.database();


function setup(){
    //sets up dummy data
    makeUser('sam', 'sam@gmail.com', 'i rock');
    makeUser('tim', 'tim@gmail.com', 'this will give me nightmare');
    makeUser('george', 'george@gmail.com', 'i so cool');
    
}




//================================================
function makeUser(name, email, bio){
    // makes a user obj
    // to have in separate root in Realtime DB
    firebase.database().ref('users/').push({
        username: name,
        email: email,
        bio: bio,
    });
}
//================================================
var globalData2=[];
function general2(path, type){
    let ref = db.ref(path + '/' + type).on('value', ((snapshot)=>{
        snapshot.forEach((el)=>{
            console.log('data', el.val());        
            globalData2.push(el.val());
        });
    }));
}


var globalData=[], meVals=[];
async function general(path){
    globalData=[], meVals=[];
    let ref = await db.ref(path).once('value').then( ((snapshot)=>{
        snapshot.forEach((el)=>{
            console.log('data', el);
            meVals.push(el.val());      
            globalData.push(el.val());
        });
    }));

    return new Promise((resolve)=>{
        resolve(meVals);
        console.log('meVals', meVals);
    });

}

//================================================


// Fucntion completely necessary??? Maybe
// var savedUID;
// async function addChatRoomsToUser(email, chatroom){
//     // add new messages to chatrooms
//     await pathLoop('users/');

//     for (let i = 0; i < arrayOfVal.length; i++) {
//         if(arrayOfVal[i].email == email){
//             savedUID = i;
//         }
//     }


//     await db.ref('users/'+arrayForPath[savedUID].pieces_[1]+'/chatrooms').push({
//         chatroom: chatroom, 
//     });

//     return new Promise((resolve)=>{
//         resolve("Saved Pos,", savedUID);
//     });

// }
// var foundPos;
// async function pullChatroomsBasedOnEmailFromUsers(email){
//     //trying to PULL all chatrooms said email (user) is participating in
//     //stored in IDS in an array
//     // NOT WORKING
//     await pathLoop('users/');

//     for (let i = 0; i < arrayOfVal.length; i++) {
//         if(arrayOfVal[i].email == email){
//             savedUID = i;
//         }
//     }

//     return new Promise((resolve)=>{
//         resolve(arrayOfVal[savedUID]);
//         console.log('found', arrayOfVal[savedUID].email + " at Pos: " + savedUID);
//         foundPos=savedUID;
//     });

// }
var messagesArray=[];
async function getMessages(i){
    await pathLoop('chatroom/').then(()=>{
        general(strungArray[i]+'/messages/');
        console.log('messages', globalData);
    });
    return new Promise((resolve)=>{
        messagesArray = globalData;
        resolve(messagesArray);
    });
}


var groupsOfUsersArray=[];
async function getUsers(i){
    // globalData=[], strungArray=[];
    await pathLoop('chatroom/').then(()=>{
        general(strungArray[i]+'/users/');
        console.log('email', globalData);


    });
    return new Promise((resolve)=>{
        groupsOfUsersArray=globalData;
        resolve(groupsOfUsersArray);
    })
}

var iDArray=[], tmp;
// ref.path.pieces_
async function getID(i){
    // globalData=[], strungArray=[];
    await pathLoop('chatroom/').then(()=>{
    console.log('strungArray1', strungArray);
    // console.log('tmp', tmp);
    pathLoop(strungArray[i]+'/id/');
            // general(strungArray[i]);
    console.log('strungArray2', strungArray);

    if(arrayOfVal[0]==undefined){
        console.log('no id for this chatroom found!');
    }

    });
    return new Promise((resolve)=>{
        iDArray=globalData;
        resolve(iDArray);
    })
}




//================================================

function getEmailPosFromChatroom(email){
    // let ret = db.ref('chatroom/'+UID+'/users/'+UID2)
    // .once('value').then((snapshot)=>{
    //     snapshot.forEach((el)=>{

    //     });
    // });
    general('chatroom/');
    pathLoop('chatroom/');
    for (let i = 0; i < 4; i++) {
        // if(globalData[i].email==email){
        //     console.log('match! Pos: ', i);
        // }
        console.log('strungArray', strungArray[i]);
        pathLoop(strungArray[i]);
        // console.log('', );
        general(strungArray[i]);
        console.log('data', globalData);

    }

}


//================================================

// var chats = [];
// async function getChats(email) {
//     // hopefully to get all chats in their string form
//     await pullChatroomsBasedOnEmail(email);

//     let nextPath = await pathLoop('users/'+arrayForPath[foundPos].pieces_[1])
//     .then(()=>{
//         db.ref('/chatrooms').once('value').then((snapshot)=>{
//             snapshot.forEach((el)=>{
//                 var tmp = el;
//                 chats.push(tmp.val());
//             });
//         });
        
//     }); 

//     return new Promise((resolve)=>{
//         resolve(chats);
//     });
// }





//================================================

// function push(path, passed){
//     var pushed = db.ref('chatrooms');
//     pushed.child(path).push(passed);

// }

// var globalSnap;
// function query(path){
//     var userId = db.ref(path).once('value').then(snapshot=>{
//         console.log('snap', snapshot.val());
//         globalSnap = snapshot.val();
//     });

// }

async function addId(i){
    await pathLoop('chatroom/');
        let ref = db.ref(strungArray[i]).push({
            id: 'id',
        });

    return new Promise((resolve)=>{
        resolve(strungArray[i]);
    });
}


//================================================

var newDate = new Date();
var currentChat=-1;
async function makeChatRoom(title, topText){
    // making chat room 
    // to have users & messages working at a later time
  
    // console.log('newDate', newDate);
    let refMe = db.ref("/chatroom/").
    push({
        title: title,
        users: {},
        messages: {}, 
        topText: topText,
        dateCreated: newDate.toString(),
    });
    await pathLoop('chatroom/').then(()=>{
        for (let i = 0; i <= strungArray.length; i++) {
            console.log('i', i);
            // console.log('strung date', strung[i]);
            // console.log('strungArray', strungArray);
            meArray = arrayOfVal[i];
            if(meArray.dateCreated == newDate){
                console.log('correct! found at:', i);
                currentChat=i;
            }else{
                console.log('failed', );
            }
        }

    });


    return new Promise((resolve)=>{
        resolve(currentChat);
    });

}

//================================================


function addMessages(UID, text){
    // add message to said UID user

     // i++;
    // makeMessageObj(text, i)
    var tmp = new Date();
    let ref2 = db.ref(UID+'/messages')
    .push({
        text,
        date: tmp.toString(), 
    });
}


async function addUsers(index, email){
    //add email to chatroom
    await pathLoop('chatroom').then(()=>{
        let refMe = db.ref(strungArray[index]+'/users/').push({
            email,
        });

    });
}

function usersDel(UID1, UID2, email){
    //function that removes
    let refMe = db.ref('chatroom/'+UID+'/users/'+UID2).remove();
}

//================================================

// var arrayOfUIDStmp=[], arrayOfUIDS=[];
// var elMe;
// async function getUID(){
//     //get UID for chatroom with these emails involved
//     let refMe = await db.ref('chatroom/').once('value')
//     .then((snapshot)=>{
//         snapshot.forEach((el)=>{
//             // elMe = el;
//             // var tmp = el.val();
//             arrayOfUIDStmp.push(el.ref.path);
//         });
//     });
//     for (let i = 0; i < arrayOfUIDStmp.length; i++) {
//         console.log('i', i);
//         arrayOfUIDS.push(arrayOfUIDStmp[i].pieces_.join('/'));
//     }
//     return new Promise((resolve)=>{
//         resolve(arrayOfUIDS);
//     })
// }

//================================================
var arrayForPath=[], arrayOfVal=[], me;
var strungArray=[];
var tmp;
async function pathLoop(path){
    // spits out next node in tree of paths

    arrayForPath=[], arrayOfVal=[], strungArray=[];
    let refMe = await db.ref(path).once('value')
    .then((snapshot)=>{
        snapshot.forEach((el)=>{
            me = el;
            // var tmp = el.val();
            arrayForPath.push(el.ref.path);
            arrayOfVal.push(el.val());
        });
        console.log('arrayForPath', arrayForPath);
        console.log('arrayOfVal', arrayOfVal);
    }).then(()=>{
        for (let i = 0; i < arrayOfVal.length; i++) {
            strungArray.push(arrayForPath[i].pieces_.join('/'));
        }

    });

    
    return new Promise((resolve)=>{
        resolve(arrayOfVal);
        console.log('strungArray', strungArray);
    });

}

//================================================









