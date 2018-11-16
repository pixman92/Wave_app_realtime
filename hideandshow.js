

var toHideArray = ['chatroom', 'chatroomsList']

function hide(){
    for (var i = 0; i < toHideArray.length; i++) {
        document.getElementById(toHideArray[i]).style.display = "none";
    }
}

function show(id) {   
    document.getElementById('#'+id).style.display = "block";
    
}