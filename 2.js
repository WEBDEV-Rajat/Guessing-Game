let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random()*1000);

btn.addEventListener("click", function(){
   let input = document.getElementById("userInput").value;
   if(input == number){
    output.innerHTML = `You guessed it right, the number was ${number}`
   }
   else if(input < number){
    output.innerHTML = "You guessed too low!"
   };
   if(input > number){
    output.innerHTML = "You guessed too high!"
   }
});
