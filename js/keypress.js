//var message = document.getElementById('message');
//Message.addEventListener('keyup', showKey);

$('#message').keyup(showKey);
document.addEventListener('mousemove', showPosition);

function showKey(e){
    console.log(e.key);
    $('lastKey').attr('text', "The key is "+e.key);
}

function showPosition(e){
    console.log("The position is "+e.pageX+", "+e.pageY+" ");
}