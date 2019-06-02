//file that deals with creating firestore profiles of paterons
const db2 = firebase.firestore();



function addDataToFirestoreForCompletelyNew(path, data){   
    db2.collection(path).add(data).
    catch((error)=>{
        console.error('error caught', error);
    });   
}

function addDataMergeTrue(path, data){
    if(isOddOrEven(path)=="even"){
        db2.collection(path).add(data).
        catch((error)=>{
            console.error('error caught', error);
        });   
    }
    if(isOddOrEven(path)=="odd"){
        db2.doc(path).set(data, {merge: true}).
        catch((error)=>{
            console.error('error caught', error);
        });   
    }

}

var dataMe = []; var firestorePaths = [];
var slashCount = 0;
//for finding paths
async function queryData(path){
    dataMe=[]; firestorePaths=[];
    await db2.collection(path).get().
    then(async (snap)=>{
        snap.forEach(async (doc)=>{
            // console.log('data', doc.data);
            await dataMe.push(doc);
            
        });
        for(var i=0; i<dataMe.length; i++){
            firestorePaths.push(dataMe[i].ref.path);
        }
        console.log('firestorePaths', firestorePaths);
    });  
}


//================================================


var savedDoc=[];
function pullDataFromFirestore(path){
    //function for finding fields
    if(isOddOrEven(path)=="odd"){
        db2.doc(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc.data());
                savedDoc.push(doc.data());
            }else{
                console.log('no doc, odd');
            }
        }); 
    }
    if(isOddOrEven(path)=="even"){
        db2.collection(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc);
                savedDoc.push(doc);
            }else{
                console.log('no doc, even');
            }
        });
    }
}

function isOddOrEven(str){
    if((str.split('/').length-1)%2==0){
        return "even";
    }else{
        return "odd";
    }
}


//NEX? - working to get multi layered collections
//================================================

//where function 
var docdata; var docId; var docMe=[]; var afterDate; var beforeDate;
var whereFinderPaths = [];
var docDataArray=[];
var originDate;
function whereFinder(inputMe){    //function used in outputting.js to be used with date passed to this function
    //function that takes in an input date,
    //then calls where() for all logins before and after the date given

    //reseting whereFinderPaths[] 
    whereFinderPaths = [];
    docDataArray=[];

    dateLessTmp = new Date();
    dateLessTmp = dateToBePassed.setSeconds(dateToBePassed.getSeconds() - 1);

    dateMoreTmp = new Date();
    dateMoreTmp = dateToBePassed.setSeconds(dateToBePassed.getSeconds() + 2);

    var dateLess = new Date(dateLessTmp);
    // dateLess.setSeconds(dateLessTmp);

    var dateMore = new Date(dateMoreTmp);
    // afterDate = afterDate.setDate(originDate.getDate()+1);
    // beforeDate = beforeDate.setDate(originDate.getDate()-1);

    // input = inputDate.setHours(0,0,0,0);


    db2.collection(path)
    .where('date', '<', dateMore).where('date', '>', dateLess)
    // .where('date', '==', originDate)
    .get()
    .then((snapshot)=>{
        snapshot.forEach((doc)=>{
            docdata = doc.data();
            docDataArray.push(docdata);
            console.log('doc.data()', doc.data());
            docId = doc.id;
            docMe.push(doc);

        });
        for(var i in docMe){
            whereFinderPaths.push(docMe[i].ref.path);
        }
    });

    //return docDataArray!!!!
} 

   
   
   
   //================================================
    //function that takes in an input date,
    //then calls where() for all logins before and after the date given

    //reseting whereFinderPaths[] 
//     whereFinderPaths = [];
//     docDataArray=[];

//     var newDate = new Date(inputDate);
//     afterDate = new Date();
//     beforeDate = new Date();
//     afterDate.setDate(newDate.getDate()+1);
//     beforeDate.setDate(newDate.getDate()-1);
//     // input = inputDate.setHours(0,0,0,0);
//     db2.collection('paterons').where('date', '<', afterDate).where('date', '>', beforeDate)
//     .get()
//     .then((snapshot)=>{
//         snapshot.forEach((doc)=>{
//             docdata = doc.data();
//             docDataArray.push(docdata);
//             console.log('doc.data()', doc.data());
//             docId = doc.id;
//             docMe.push(doc);

//         });
//         for(var i in docMe){
//             whereFinderPaths.push(docMe[i].ref.path);
//         }
//     });

//     //return docDataArray!!!!
// } 

// }

//========================================
//defines the wait function() - for timing out a task
//partically useful in Firestore
function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}