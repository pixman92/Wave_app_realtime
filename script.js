    // FFP Order:

// - setup();
// - pullChatroomsBasedOnEmail(email)
// - addMessages()


// Add users...
// - users(UID, email)
// Get users...
// - getUsers(num)



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


var globalData=[];
function general(path){
    globalData=[];
    let ref = db.ref(path).on('value', ((snapshot)=>{
        snapshot.forEach((el)=>{
            console.log('data', el.val());        
            globalData.push(el.val());
        });
    }));
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
var foundPos;
async function pullChatroomsBasedOnEmailFromUsers(email){
    //trying to PULL all chatrooms said email (user) is participating in
    //stored in IDS in an array
    // NOT WORKING
    await pathLoop('users/');

    for (let i = 0; i < arrayOfVal.length; i++) {
        if(arrayOfVal[i].email == email){
            savedUID = i;
        }
    }

    return new Promise((resolve)=>{
        resolve(arrayOfVal[savedUID]);
        console.log('found', arrayOfVal[savedUID].email + " at Pos: " + savedUID);
        foundPos=savedUID;
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
        resolve(globalData);
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

var chats = [];
async function getChats(email) {
    // hopefully to get all chats in their string form
    await pullChatroomsBasedOnEmail(email);

    let nextPath = await pathLoop('users/'+arrayForPath[foundPos].pieces_[1])
    .then(()=>{
        db.ref('/chatrooms').once('value').then((snapshot)=>{
            snapshot.forEach((el)=>{
                var tmp = el;
                chats.push(tmp.val());
            });
        });
        
    }); 

    return new Promise((resolve)=>{
        resolve(chats);
    });
}





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
//================================================

function makeChatRoom(title, topText){
    // making chat room 
    // to have users & messages working at a later time
    let refMe = db.ref("/chatroom/").
    push({
        title: title,
        users: {},
        messages: {}, 
        topText: topText
    })
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


function users(UID, email){
    //add email to chatroom
    let refMe = db.ref(UID+'/users/').push({
        email,
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









