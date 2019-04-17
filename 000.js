//input
// msg data
// change msg flag
// a certain user

//output
// new msg on html screen
// different for each user
// my msg/your msg
// left & right


async function printOutMsgData(){
    await setUID('-LVg3yX4h-be2DPeGeei');
    await changeMessages(arrayOfMsgs.length-1);
    // await makeNewMsgNode(true);
    await makeNewMsgNodeListener();
    
    
}


