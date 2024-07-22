 var heart1=document.getElementById('heart1')
 function Toggle1(){
    if(heart1.style.color=="red"){
        heart1.style.color="gray"
    }
    else{heart1.style.color="red"}
 }

 var heart2=document.getElementById("heart2")
 function Toggle2(){
    if(heart2.style.color=="red"){
        heart2.style.color="gray"
    }
    else{heart2.style.color="red"}
 }
 var heart3=document.getElementById("heart3")
 function Toggle3(){
    if(heart3.style.color=="red"){
        heart3.style.color="gray"
    }
    else{heart3.style.color="red"}

 }

  var trash1=document.getElementById("trash1");
 var line1=document.getElementById("line1");
document.getElementById("trash1").addEventListener('click', function(){
    line1.remove();
 })

 
 var trash2=document.getElementById("trash2")
 var line2=document.getElementById("line2")
document.getElementById("trash2").addEventListener('click', function(){
     line2.remove();
 })


 const trash3=document.getElementById("trash3")
 const line3=document.getElementById("line3")
document.getElementById("trash3").addEventListener('click', function(){
    line3.remove();
 })

 
var counterElement = document.getElementById('counter');
 var count = 0; // Initial count

 // Function to increment the counter
 function increment() {
     count++;
     counterElement.innerText = count;
     calculateTotalPrice();
 }

 // Function to decrement the counter
 function decrement() {
     count--;
     counterElement.innerText = count;
     calculateTotalPrice();
 }


var counterElement2 = document.getElementById('counter2');
var ItemCount = 0; // Initial count

// Function to increment the counter
function increment2() {
    ItemCount++;
    counterElement2.innerText = ItemCount;
    calculateTotalPrice();

}

// Function to decrement the counter
function decrement2() {
    ItemCount--;
    counterElement2.innerText = ItemCount;
    calculateTotalPrice();
}

var counterElement3 = document.getElementById('counter3');
var ItemCount1 = 0; // Initial count

// Function to increment the counter
function increment3() {
    ItemCount1++;
    counterElement3.innerText = ItemCount1;
    calculateTotalPrice();
}

// Function to decrement the counter
function decrement3() {
    ItemCount1--;
    counterElement3.innerText = ItemCount1;
    calculateTotalPrice();
} 

function calculateTotalPrice() { 
    var totalPrice = 60 * count + 50 * ItemCount + 30 * ItemCount1; 
    document.getElementById("total").innerText = totalPrice; 
  }








