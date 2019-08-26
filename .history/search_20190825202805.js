//================================================
var docMe2=[];
var savedMessage = []; var savedMessagePaths = []; 
async function matchAdmin(adminEmail){
    //function that matches where() - admin <email>

    savedMessagePaths=[]; savedMessage=[];
    docMe2=[];

    passedReset();

    db.collection('chatrooms')
    .where('admin', '==', adminEmail)
    .get()
    .then(async(snapshot)=>{
        snapshot.forEach((doc)=>{
            var docData = doc.data();
            savedMessage.push(docData);
            // var docId = doc.id;
            docMe2.push(doc);

        });

        for(var i in docMe2){
            savedMessagePaths.push(docMe2[i].ref.path);
        }
        console.log('savedMessagePaths', savedMessagePaths);


        findRoomBasedOnTimestamp(savedMessagePaths);



        return await savedMessagePaths;

        }).then((savedMessagePaths)=>{
            if(savedMessagePaths==undefined||savedMessagePaths==[]||savedMessagePaths.length==0){
                passedFalse();
            }else if(savedMessagePaths.length>0){
                passedTrue();
            }            
        });
}

//=============================================
var datesToSiftThrough = [];
async function findRoomBasedOnTimestamp(arr){

    for(var i=0; i<arr.length; i++){
        await pullDataFromFirestore(arr[i]);
        // datesToSiftThrough.push(savedDoc);
        // console.log('datesToSiftThrough', datesToSiftThrough)
    }
    wait(800).then(()=>{
        console.log('savedDoc2', savedDoc);
    }).then(()=>{
        //TODO:
        //split the dates out of 

        var reorganizedDates = savedDoc.sort((a,b) => (a.date > b.date) ? 1: -1)

        console.log('reorganizedDates', reorganizedDates);
    });


}



//=============================================

// functions for knowing when Promise has passed/failed
var passed;


function passedTrue(){
    console.log('passed? true');
    return passed=true;    
}
function passedFalse(){
    console.log('passed? failed');
    return passed=false;
}

function passedReset(){
    passed=undefined;
}


function test(){
    var testMe = matchAdmin('someone@gmail.com');
    return testMe;
}


//========================================

async function bigGET(email, roomNum){
    //function that gets it all! based on RoomID

    await matchAdmin(email);
    // wait(1000).then(async()=>{
    //     if(savedMessagePaths==[]){
    //         bigGET(email, roomNum);
    //     }else{
            
    //     }

    // });

    wait(2000).then(()=>{
        if(passed==true){
            var str = "/"+savedMessagePaths[0].toString()+"/"+"messages";
            pullDataFromFirestore(str);
        }
    });



}