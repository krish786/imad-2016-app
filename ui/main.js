//counter code 
var button =document.getElementById('counter');

button.onclick =function(){
    // make a request to thr counter endpoint
       var request = new XMLHttpRequest();
    //capture the response and store in variable
    request.onreadystatechange = function(){
        if(request.readystate== XMLHttpReuest.DONE){
            //take some action
            if(request.status==200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //Not done yet
    };
    //make the request
    
    request.open('GET','http://http://krish786.imad.hasura-app.io/counter',true);
    reqest.send(null);
    
};