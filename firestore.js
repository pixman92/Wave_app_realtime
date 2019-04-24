//file that deals with creating firestore profiles of paterons


//================================================
// doc - set() - odd
// collection - add() - even

// {merge: true} - makes adding more data a breeze

///================================================
var db2 = firebase.firestore();

function addDataToFirestore(path, data){   
    if(isOddOrEven(path)=="odd"){
        db2.doc(path).set(data, {merge: true}).
    catch((error)=>{
        console.error('error caught', error);
    });
    }
    if(isOddOrEven(path)=="even"){
        db2.collection(path).set(data, {merge: true}).
    catch((error)=>{
        console.error('error caught', error);
    });
    } 
}


var savedDoc=[];
function pullData(path){
    if(isOddOrEven(path)=="odd"){
        db2.doc(path).get().
        then((doc)=>{
            // console.log('docdata', doc.data());
            if(doc.exists){
                console.log('doc', doc.data());
                savedDoc.push(doc.data());
            }else{
                console.log('no doc');
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
                console.log('no doc');
            }
        });
    }
}

//================================================

var dataMe = []; var firestorePaths = [];
var slashCount = 0;
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

function isOddOrEven(str){
    if((str.split('/').length-1)%2==0){
        return "even";
    }else{
        return "odd";
    }
}

//NEXT? - figuring out how to compile all 'fields'
function pullFields(path){

}

//NEX? - working to get multi layered collections


