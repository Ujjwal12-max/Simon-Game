let color;
let pattern=[];
let userChosenColour=[];
var x=0;
var started = false;
function nextSequence(){          //emptying user chosen color and animating color to user and x++
  color=colorgenerator();
  $("h1").html("Level "+(x+1));
x++;
userChosenColour=[];
switch(color){
    case "green" : let aud=new Audio('sounds/green.mp3');
    $(".green").fadeOut(200).fadeIn(200);
    aud.play();
    // alert("switch green");
    break;
    case "red": let aud1=new Audio("sounds/red.mp3");
    $(".red").fadeOut(200).fadeIn(200);
    aud1.play();
    // alert("switch red");
    break;
    case "yellow": let aud2=new Audio("sounds/yellow.mp3");
    $(".yellow").fadeOut(200).fadeIn(200);
    aud2.play();
    // alert("switch yellow");
    break;
    case "blue": let aud3=new Audio("sounds/blue.mp3");
    $(".blue").fadeOut(200).fadeIn(200);
    aud3.play();
    // alert("switch blue");
    break;
}
}
function colorgenerator(){           //creating pattern array
    var rn=Math.floor(Math.random()*4);
    // green-0 red-1 yellow-2 blue-3
    switch(rn){
        case 0: var clr="green";
        break;
        case 1: var clr="red";
        break;
        case 2: var clr="yellow";
        break;
        case 3: var clr="blue";
        break;
    }
    pattern.push(clr);
    return clr;
        }
function startover(){
    userChosenColour=[];
    $("h1").html("Start Game");
    pattern=[];
    x=0;
}
$(document).keydown(function(){
    if(!started){
        started=true;
    nextSequence();
    }});

$(".red").click(function(){
 userChosenColour.push("red");
 $(".red").addClass("pressed");
setTimeout( function(){$(".red").removeClass("pressed")},60);
 let aud=new Audio('sounds/red.mp3');
 aud.play();
checkAnswer(userChosenColour.length-1);
})
$(".green").click(function(){
 userChosenColour.push("green");
 let aud=new Audio('sounds/green.mp3');
 $(".green").addClass("pressed");
setTimeout( function(){$(".green").removeClass("pressed")},60);
 aud.play();
 checkAnswer(userChosenColour.length-1);
})
$(".yellow").click(function(){
 userChosenColour.push("yellow");
 let aud=new Audio('sounds/yellow.mp3');
 $(".yellow").addClass("pressed");
setTimeout( function(){$(".yellow").removeClass("pressed")},60);
 aud.play();
 checkAnswer(userChosenColour.length-1);
})
$(".blue").click(function(){
 userChosenColour.push("blue");
 let aud=new Audio('sounds/blue.mp3');
 $(".blue").addClass("pressed");
 setTimeout( function(){$(".blue").removeClass("pressed")},60);
 aud.play();
 checkAnswer(userChosenColour.length-1);
})
function checkAnswer(currentLevel) {

    if (userChosenColour[currentLevel] === pattern[currentLevel]) {
      if (pattern.length === userChosenColour.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        let aud=new Audio('sounds/wrong.mp3');
        aud.play();
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function startOver() {
    x = 0;
    pattern = [];
    started = false;
  }