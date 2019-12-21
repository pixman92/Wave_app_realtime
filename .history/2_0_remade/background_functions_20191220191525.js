// //file of referenced functions

// functions that:
// -add data
// -get data
// -where() query data



function adding(data){
    //function that adds to firebase
    db.collection(path).add(data);

}

function addDoc(docMe, data, mergeMe){
    db.collection('chatrooms2').doc(docMe).set(data, {merge: mergeMe});
}

var evenArr2=[];
async function getting(docMe){
    await db.collection("chatrooms2").doc(docMe).get().then(async (snap)=>{
        console.log(snap.data());

    });

}
//=============================================
//where function stuff
var whereIds=[];
async function whereMe(first, second){
    tmp = db.collection("chatrooms2");

    tmp2 = tmp.where(first, '==', second)

    tmp2.get().then(async (snap)=>snap.forEach(async (doc)=>{
        console.log(doc)
        await whereIds.push(doc.id);
    }));


}