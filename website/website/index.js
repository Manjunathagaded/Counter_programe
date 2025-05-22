const decreaseBtn = document.getElementById("decreaseBtn");
const restBtn =document.getElementById("restBtn");
const increaseBtn =document.getElementById("increaseBtn");
const countLabel1 = document.getElementById("countLabel1");
let count = 0;

increaseBtn.onclick = function(){
    count++;
     countLabel1.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel1.textContent = count;
}
restBtn.onclick = function(){
    count = 0 ;
    countLabel1.textContent = count;
}