//file of referenced functions

function addDataMergeTrue(path, data){
    //adding data to Firebase, doesn't matter odd/even path

    if(isOddOrEven(path)=="even"){
        console.log("even");
        
        db.collection(path).add(data).
        catch((error)=>{
            console.error('error caught', error);
        });   
    }
    if(isOddOrEven(path)=="odd"){
        console.log("odd");
        db.doc(path).set(data, {merge: true}).
        catch((error)=>{
            console.error('error caught', error);
        });   
    }

}




// function addDataTwo(name, data, mergeMaybe){
//     db.collection('chatrooms').doc(name).set(data, {merge: mergeMaybe});

// }


var dataMe = []; var firestorePaths = [];
var slashCount = 0;
//for finding paths
async function queryData2(path){
    //queries data from the database
    dataMe=[]; firestorePaths=[];
    await db.collection(path).get().
    then(async (snap)=>{
        snap.forEach(async (doc)=>{
            // console.log('data', doc.data);
            await dataMe.push(doc);
            
        });
        for(var i=0; i<dataMe.length; i++){
            firestorePaths.push(dataMe[i].ref.path);
        }
        console.log('firestorePaths', firestorePaths);
        return dataMe;
    });  
}



async function queryData3(path){
    var evenArr=[];
    if(isOddOrEven(path)=="even"){
        console.log('even');
        await db.collection(path).get().
        then(async (snap)=>{
            snap.forEach(async (doc)=>{
                // console.log('data', doc.data);
                await evenArr.push(doc);
                
            });
            return evenArr;
        });
    }


    var oddArr=[];
    if(isOddOrEven(path)=="odd"){
        console.log('odd');
        db.collection(path).get().then((doc)=>{
            console.log(doc);
            return doc;
        });
    }




}

function adding(data){
    //function that adds to firebase

    db.collection('chatrooms2').add(data);

}

var evenArr2=[];
function getting(collectionMe, docMe){
    db.collection(collectionMe).doc(docMe).get().then(async (snap)=>{
        snap.forEach(async (doc)=>{
            // console.log('data', doc.data);
            await evenArr2.push(doc);
            
        })
    });

}

// function getting2(collectionMe, docMe, collectionMe2){
//     db.collection(collectionMe).doc(docMe).collection(collectionMe2).get().then((doc)=>{
//         console.log(doc);
//     });
// }




//=============================================
//where function stuff
function whereMe(first, second){
    tmp = db.collection("chatrooms2");

    tmp2 = tmp.where(first, '==', second)

    tmp2.get().then((snap)=>snap.forEach((doc)=>{
        console.log(doc)}
    ));
}