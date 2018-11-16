var str = "";
function printToDiv(){
    str="";
    for (var i = 0; i < arrayOfMessages.length; i++) {
        str += arrayOfMessages[i] + "<br><br>";
    }
    document.getElementById('printedChatChildren').innerHTML = "";
    document.getElementById('printedChatChildren').innerHTML = str;
}