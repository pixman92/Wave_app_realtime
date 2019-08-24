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

    }).then((savedMessagePaths)=>{
        if(savedMessagePaths.length==0){
            return false;
        }else{
            return true;
        }


    })
    .then(async(foundPaths)=>{
      
        console.log('found Paths?', foundPaths);
        return foundPaths;

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