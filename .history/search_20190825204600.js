//================================================
var docMe2=[];
var savedMessage = []; var savedMessagePaths = [];
var tmpSavedMessagePaths=[]; 
var bothSaved = [];
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

        tmpSavedMessagePaths.push(docMe2[i].ref.path);
        console.log('tmpSavedMessagePaths', tmpSavedMessagePaths);
    }).then(async (tmpSavedMessagePaths)=>{
        for(var i=0; i<tmpSavedMessagePaths.length; i++){
            await pullDataFromFirestore(tmpSavedMessagePaths[i]);
        }
    }).then(async (tmpSavedMessagePaths)=>{
        // for(var i=0; i<)


        for(var i in savedDoc){
            var obj = {};
            obj[path] = tmpSavedMessagePaths[i];
            obj[admin] = savedDoc[i];
            bothSaved.push(obj);;
        }


        // findRoomBasedOnTimestamp(savedMessagePaths);



        // return await savedMessagePaths;

        // }).then((savedMessagePaths)=>{
        //     if(savedMessagePaths==undefined||savedMessagePaths==[]||savedMessagePaths.length==0){
        //         passedFalse();
        //     }else if(savedMessagePaths.length>0){
        //         passedTrue();
        //     }            
        // });
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

        return reorganizedDates;

    }).then((reorganizedDates)=>{

        // for(var i=0; i<reorganizedDates.length; i++){
            pullMessages()
        // }

    });
}
//=============================================
var savedMessages=[];
async function pullMessages(roomID){
    savedMessages=[];
    // TODO
    // function that pulls messages from a specific Room
    // -it will pull last 10 days of messages, based on a .where("date", "<", tenDatesVariable)
    // -if there is are no messages within less than 10 days, or there are less than 10 Messages, it will pool all messages, until the requirement for 10 Messages has been met
    // -this function will also compare and query only a Reasonable amount of Recent Messagesf

    // pullDataFromFirestore("/chatrooms/"+roomID+"/messages/");

    console.log(roomID+"/messages/");

    await db.collection(roomID+"/messages/").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            savedMessages.push(doc.data());
            console.log(doc.id, ' => ', doc.data());
        });
        
    });
    if(savedMessages.length==0){
        console.log('No messages');
    }   
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