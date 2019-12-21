//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room

    // addDataMergeTrue('/chatroom2/', {adminEmailK: email, titleOfRoom: title});

    adding({adminEmail: email, title: title});
}


function addMemeberToRoom(adminEmail, memberEmail){


    // addDataMergeTrue('/chatroom2/'+roomId, {mem})

    whereMe("adminEmail", adminEmail);

    getting(whereIds[0])
    // var saveStrJSON = JSON.stringify(evenArr2[0]);

    

    addDoc(whereIds[0], {memberList} )

}


















