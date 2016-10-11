//counter code 
var button =document.getElementById('counter');
var counter = 0;
button.onclick =function(){
    // make a request to thr counter endpoint

    //capture the response and store in variable
    
    //render the variable in the crrect span
    counter =counter +1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}