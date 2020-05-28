// //file of referenced functions

// functions that:
// -add data
// -get data
// -where() query data



function adding(data){
    //function that adds to firebase
    //when there is no existing doc, already
    db.collection("/chatrooms2/").add(data);

}

function addDoc(docMe, data){
    //function to push updated data up to firebase
    db.collection('chatrooms2').doc(docMe).set(data, {merge: true});
}

var evenArr2=[];
async function getting(main, docMe){
    evenArr2=[];
    await db.collection(main).doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());
        await evenArr2.push(snap.data());
    });

}
//=============================================
//where function stuff
var whereIds=[];
async function whereMe(root, first, second){
    tmp = db.collection(root);

    tmp2 = tmp.where(first, '==', second)

    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc)
        await whereIds.push(doc.id);
    }));


}
//========================================
var newD = new Date();
newD.setSeconds(seconds);


//=============================================
function isOddOrEven(str){
    if((str.split('/').length-1)%2==0){
        return "even";
    }else{
        return "odd";
    }
}