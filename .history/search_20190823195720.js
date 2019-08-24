//================================================
var docMe2=[];
var savedMessage = []; var savedMessagePaths = []; 
function matchAdmin(adminEmail){
    //function that matches where() - admin <email>

    savedMessagePaths=[]; savedMessage=[];
    docMe2=[];

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

        return savedMessagePaths;


    }).then((savedMessagePaths)=>{
        if(savedMessagePaths==undefined||savedMessagePaths==[]||savedMessagePaths.length==0){
            console.log('false');
            return false;
        }else{
            console.log('true');
            return true;
        }

    });
}


//========================================

async function bigGET(email, roomNum){
    //function that gets it all! based on RoomID

    await matchAdmin(email);
    wait(1000).then(async()=>{
        if(savedMessagePaths==[]){
            bigGET(email, roomNum);
        }else{
            
        }

    });



}