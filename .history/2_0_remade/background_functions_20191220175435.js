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

function adding(collectionMe, docMe, data){
    db.collection(collectionMe).doc(docMe).set(data);

}

function getting(collectionMe, docMe){
    db.collection(collectionMe).doc(docMe).get().then((doc)=>{
        console.log(doc);
    });
}