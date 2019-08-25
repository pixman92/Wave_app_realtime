

var tmp; var tmp2;
async function findRoom(date){
    //functions to find a room based on Date Obj{} - of when Room was created

    passedReset();


    // date1 = new Date("May 26,2019 7:48:05 PM");
    // date2 = new Date("May 26,2019 7:48:07 PM");


    // "July 19, 2019 3:23:19 PM"   //THIS IS THE CORRECT FORMAT!!!
    
    
    date = new Date(date);

    var secondsLess = date.getTime()/1000;
    secondsLess -= 1;
    console.log(secondsLess);

    var secondsMore = date.getTime()/1000;
    secondsMore += 1;
    console.log(secondsMore);


    var newDateLess = new Date(null);
    newDateLess.setTime(secondsLess*1000);
    var newDateMore = new Date(null);
    newDateMore.setTime(secondsMore*1000);

    // debugger


    db.collection("/chatrooms").where("date", "<", newDateMore).where("date", ">", newDateLess).get()
    .then(async function(querySnapshot) {
        tmp2 = querySnapshot;
        await querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tmp = doc.data();
            return doc.data();
        });
        // return new Promise((resolve)=>{

        //     resolve(tmp);
        // });
        return querySnapshot;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });


}
