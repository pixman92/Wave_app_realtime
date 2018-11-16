// pathLoop('chatroom')     - main array    
// pathLoop(strungArray[0]) - single chatroom
// pathLoop(strungArray[6]) - users array
// general(strungArray[0-n])- returns user arrays

        
var input = 'users';

// getUsers(i)
var getUsersArray=[], tmp, tmp2;
async function getAllPosOfUser(email){
    getUsersArray=[];
    getUsersArray[0] = email;
    await pathLoop('chatroom/');
        tmp = strungArray.length;
        // console.log('tmp', tmp);
    //     for (let i = 0; i < tmp; i++) {
    // //         getUsers(i);
    //         // console.log('i', i);
    //         tmp2 = await general(strungArray[i]+'/users').then(()=>{
    //             tmp2=meVals.length;
    //             console.log('meVals', meVals);

    //         });
    //         // getUsersArray = globalData;
    //     }
        // }}).then(()=>{


        // });

        // pathLoop('chatroom')     - main array    
        // pathLoop(strungArray[0]) - single chatroom
        // pathLoop(strungArray[6]) - users array
        // general(strungArray[0-n])- returns user arrays

        pathLoop('chatroom');
        for (let i = 0; i < strungArray.length; i++) {
            pathLoop(strungArray[i]);
        }
        pathLoop(strungArray[6]);
        for (let i = 0; i < strungArray.length; i++) {
            pathLoop(strungArray[i]);
        }


}




// var groupsOfUsersArray=[];
// async function getUsers(i){
//     // globalData=[], strungArray=[];
//     await pathLoop('chatroom/').then(()=>{
//         general(strungArray[i]+'/users/');
//         console.log('email', globalData);


//     });
//     return new Promise((resolve)=>{
//         groupsOfUsersArray=globalData;
//         resolve(groupsOfUsersArray);
//     })
// }


// //================================================
// var arrayForPath=[], arrayOfVal=[], me;
// var strungArray=[];
// var tmp;
// async function pathLoop(path){
//     // spits out next node in tree of paths

//     arrayForPath=[], arrayOfVal=[], strungArray=[];
//     let refMe = await db.ref(path).once('value')
//     .then((snapshot)=>{
//         snapshot.forEach((el)=>{
//             me = el;
//             // var tmp = el.val();
//             arrayForPath.push(el.ref.path);
//             arrayOfVal.push(el.val());
//         });
//         console.log('arrayForPath', arrayForPath);
//         console.log('arrayOfVal', arrayOfVal);
//     }).then(()=>{
//         for (let i = 0; i < arrayOfVal.length; i++) {
//             strungArray.push(arrayForPath[i].pieces_.join('/'));
//         }

//     });

    
//     return new Promise((resolve)=>{
//         resolve(arrayOfVal);
//         console.log('strungArray', strungArray);
//     });

// }
