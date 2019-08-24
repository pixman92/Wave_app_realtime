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

        
        return await false;


    });
    // .then((savedMessagePaths)=>{

        // if(savedMessagePaths==undefined){
        //     debugger;
        //     return 1;
        // }else{
        //     return 0;
        // }
        
    // });
    // return new Promise((resolve)=>{
    //     // console.table(bigArray);
    //     resolve(savedMessagePaths);
    //     if(savedMessagePaths.length==0){
    //         // resolve(false);
    //         return false;
    //     }else{
    //         // resolve(true);
    //         return true;
    //     }
    //     // resolve(savedMessagePaths);
    // });
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