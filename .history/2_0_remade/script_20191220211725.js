//file that makes a new chat room and a new message


function makeNewRoom(email, title){
    //function that makes a chat room

    // addDataMergeTrue('/chatroom2/', {adminEmailK: email, titleOfRoom: title});

    adding({adminEmail: email, title: title, memberList:""});
}


async function addMemeberToRoom(adminEmail, memberEmail){


    // addDataMergeTrue('/chatroom2/'+roomId, {mem})

    await whereMe("adminEmail", adminEmail);

    await getting(whereIds[0])
    var tmp1 = []
    var tmp2 = evenArr2[0].memberList;
    tmp1.push(tmp2);
    tmp1.push(memberEmail);

    // var saveStrJSON = JSON.stringify(evenArr2[0]);

    // evenArr2[0].memberList.push(memberEmail);
    

    await addDoc(whereIds[0], {memberList: tmp1} )

}


















