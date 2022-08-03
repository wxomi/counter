let counter=0;

const decrease=document.querySelector(".decrease");
const reset=document.querySelector(".reset");
const increase=document.querySelector(".increase");


const span=document.getElementById("span");

decrease.addEventListener("click", function(){
    counter--;
    if(counter<0){
        span.style.color="red";
    }else if(counter==0){
        span.style.color="black";
    }
    console.log(counter);
    span.textContent=counter;
});
reset.addEventListener("click", function(){
    counter=0;
    span.style.color="black";
    span.textContent=counter;
});
increase.addEventListener("click", function(){
    counter++;
    if(counter>0){
        span.style.color="green";
    }else if(counter==0){
        span.style.color="black";
    }
    console.log(counter);
    span.textContent=counter;
});