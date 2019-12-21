// //file of referenced functions

// function addDataMergeTrue(path, data){
//     //adding data to Firebase, doesn't matter odd/even path

//     if(isOddOrEven(path)=="even"){
//         console.log("even");
        
//         db.collection(path).add(data).
//         catch((error)=>{ 
//             console.error('error caught', error);
//         });   
//     }
//     if(isOddOrEven(path)=="odd"){
//         console.log("odd");
//         db.doc(path).set(data, {merge: true}).
//         catch((error)=>{
//             console.error('error caught', error);
//         });   
//     }

// }




// // function addDataTwo(name, data, mergeMaybe){
// //     db.collection('chatrooms').doc(name).set(data, {merge: mergeMaybe});

// // }


// var dataMe = []; var firestorePaths = [];
// var slashCount = 0;
// //for finding paths
// async function queryData2(path){
//     //queries data from the database
//     dataMe=[]; firestorePaths=[];
//     await db.collection(path).get().
//     then(async (snap)=>{
//         snap.forEach(async (doc)=>{
//             // console.log('data', doc.data);
//             await dataMe.push(doc);
            
//         });
//         for(var i=0; i<dataMe.length; i++){
//             firestorePaths.push(dataMe[i].ref.path);
//         }
//         console.log('firestorePaths', firestorePaths);
//         return dataMe;
//     });  
// }



// async function queryData3(path){
//     var evenArr=[];
//     if(isOddOrEven(path)=="even"){
//         console.log('even');
//         await db.collection(path).get().
//         then(async (snap)=>{
//             snap.forEach(async (doc)=>{
//                 // console.log('data', doc.data);
//                 await evenArr.push(doc);
                
//             });
//             return evenArr;
//         });
//     }


//     var oddArr=[];
//     if(isOddOrEven(path)=="odd"){
//         console.log('odd');
//         db.collection(path).get().then((doc)=>{
//             console.log(doc);
//             return doc;
//         });
//     }




// }

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
        // snap.forEach(async (doc)=>{
        //     // console.log('data', doc.data);
        //     await evenArr2.push(doc);
            
        // })

        console.log(snap);

    });

}

async function getting2(docName){

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