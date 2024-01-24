// generation of random value
var y =Math.floor(Math.random*10+1);
console.log(y);
var guess = 1;

function submit(){
    var x =document.getElementById("guessField").value;

    if(x=y){
        alert("CONGRTULATIONS!!"+playername+"YOu GUESS IT RIGHT IN"+guess+"Guess");

        guess=1;
    }
    else if(x>y){
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}

function playagain(){
    y = Math.floor(Math.random()*10+1);
}
// count of attempts
// until hit
  
// function for the number sent by the user