//================================================
var docMe2=[];
var savedMessage = []; var savedMessagePaths = []; 
function matchAdmin(adminEmail){
    //function that matches where() - admin <email>

    savedMessagePaths=[];

    db.collection('chatrooms')
    .where('admin', '==', adminEmail)
    .get()
    .then((snapshot)=>{
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
    });
}