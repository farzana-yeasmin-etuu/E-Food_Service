var div=document.getElementById('main');
const msg=document.querySelector("#seemore-button");
var display=0;
function show(){
    if(display==1){
        div.style.display='none';
        display=0;
        msg.innerText="See More Products";
    }
    else{
        div.style.display='block';
        display=1;
        msg.innerText="See Less Products";
    }
}
function showtext(){
    document.getElementById("demo").innerHTML="Thank you for your subscription";
    document.getElementById("demo").style.color="red";
}