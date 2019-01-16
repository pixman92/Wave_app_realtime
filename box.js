// file that deals with taking in 'box' text
// uploading to Firebase
// downloading from Firebase
// (hopefully in real time...)

// HTML listeners, that upload to Firebase realtime database

var boxStringCompound = "";
function attachBoxListener() {
    document.getElementById('box').addEventListener('input', (evt)=>{
        boxStringCompound = document.getElementById('box').value;
        console.log('input??', boxStringCompound);
        text2 = boxStringCompound;
        addBoxToChatroom();

    });

}