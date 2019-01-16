// This file, purposely put 1st
// for whatever reason, it fouls up functions that rely on <currentChatroom> string data

var currentChatroom = "";
async function setUID(UID){
    currentChatroom = 'chatrooms/'+UID+'/';
    console.log('currentChatroom', currentChatroom);
    return new Promise((resolve)=>{
        resolve(currentChatroom);
    })
}