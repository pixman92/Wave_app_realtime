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

function addDataTwo(name, data){
    db.collection('chatrooms').doc(name).set(data);
    
}
