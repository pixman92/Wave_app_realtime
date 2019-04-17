// File that will add eventListeners to a node of 'chat msg added', 'chat box', 'chat title'
// this Listner will notify of a 'change' to any of such fields



//========================================
// Msg node - stuff
function makeNewMsgNode(msg){
    // makes/changes NewMsg node
    // usually msg=true
    db.ref(currentChatroom+'/newMsg').set({
        msg:msg,
    });
}

async function makeNewMsgNodeListener(){
    // function that makes a listener for changes to the NewMsg node
    await db.ref(currentChatroom+'newMsg/').on('value', (snapshot)=>{
        console.log('val', snapshot.val);
        // console.log('msg', newMsgTrue);
        // getNewMsgStatus();
        // if(newMsgTrue==true){
        //     console.log('yup i fired', );
        //     changeMessages(arrayOfMsgs.length-1);
        // }
        

        
    });
    await getNewMsgStatus();
    await printWhenTrue();
}

async function printWhenTrue(){
    if(newMsgTrue==true){
        console.log('yup i fired');
        changeMessages(arrayOfMsgs.length-1);
        return new Promise(resolve)
    }
}


var newMsgTrue = false;
async function getNewMsgStatus(){
    // function that retrieves the contents of the NewMsg node
    // sets it to a global Variable
    // can be referenced, throughout
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
    // function that adds Listener in Firebase to the Box node
    await pathLoop(currentChatroom+'box');
    db.ref(strungArray[0]).on('value', (snapshot)=>{
        console.log('box', arrayOfVal[0].text);
        getNewBox();
    });

}
async function getNewBox(){
    // function that gets the value of the Box node
    await pathLoop(currentChatroom+'box');

    return new Promise((resolve)=>{
        console.log(arrayOfVal[0]);
        //  arrayOfVal[0];
        document.getElementById('box').value = arrayOfVal[0];
        resolve(arrayOfVal[0]);
    });

}
