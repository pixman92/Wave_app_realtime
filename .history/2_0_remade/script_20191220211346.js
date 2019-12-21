//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room

    // addDataMergeTrue('/chatroom2/', {adminEmailK: email, titleOfRoom: title});

    adding({adminEmail: email, title: title, memberList:""});
}


function addMemeberToRoom(adminEmail, memberEmail){


    // addDataMergeTrue('/chatroom2/'+roomId, {mem})

    whereMe("adminEmail", adminEmail);

    getting(whereIds[0])
    var tmp1 = []
    var tmp2 = evenArr2[0].memberList;
    tmp1.push(tmp1);
    tmp1.push(memberEmail);

    // var saveStrJSON = JSON.stringify(evenArr2[0]);

    // evenArr2[0].memberList.push(memberEmail);
    

    addDoc(whereIds[0], {memberList: tmp1} )

}


















