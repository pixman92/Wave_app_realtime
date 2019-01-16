// File that will add eventListeners to a node of 'chat msg added', 'chat box', 'chat title'
// this Listner will notify of a 'change' to any of such fields



//========================================
// Msg node - stuff
function makeNewMsgNode(msg){
    db.ref(currentChatroom+'/newMsg').set({
        msg:msg,
    });
}

function makeNewMsgNodeListener(){
    db.ref(currentChatroom+'newMsg/').on('value', (snapshot)=>{
        console.log('val', snapshot.val);
        // console.log('msg', newMsgTrue);
        getNewMsgStatus();
    });
}

var newMsgTrue = false;
async function getNewMsgStatus(){
    await pathLoop(currentChatroom+'newMsg');

    return new Promise((resolve)=>{
        console.log(arrayOfVal[0]);
        newMsgTrue = arrayOfVal[0];
        resolve(arrayOfVal[0]);
    });

}
//========================================
// Box node - stuff
async function makeNewBoxListener(){
    await pathLoop(currentChatroom+'box');
    db.ref(strungArray[0]).on('value', (snapshot)=>{
        console.log('box', arrayOfVal[0].text);
        getNewBox();
    });

}
async function getNewBox(){
    await pathLoop(currentChatroom+'box');

    return new Promise((resolve)=>{
        console.log(arrayOfVal[0]);
        //  arrayOfVal[0];
        document.getElementById('box').value = arrayOfVal[0];
        resolve(arrayOfVal[0]);
    });

}
