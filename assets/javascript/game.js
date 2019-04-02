function randomNumFunc(){
    var randomNum = Math.floor((Math.random()*120) + 19);
    console.log("randomNum", randomNum);
    $("#Random-Number").text(randomNum);
}
var testNum = randomNumFunc();
var wins = 0;
var losses = 0;
var AmethystNum = Math.floor((Math.random()*12) + 1);
console.log("AmethystNum", AmethystNum);
var EmeraldNum = Math.floor((Math.random()*12) + 1);
console.log("EmeraldNum", EmeraldNum);
var RubyNum = Math.floor((Math.random()*12) + 1);
console.log("RubyNum", RubyNum);
var SapphireNum = Math.floor((Math.random()*12) + 1);
console.log("SapphireNum", SapphireNum);
var result = 0;
console.log("result", result);

$("#Amethyst").on("click", function() {
    console.log("Amethyst Before", result);
    result = parseInt(result) + parseInt(AmethystNum);
    $("#result").text("Your Score: " + result);
    console.log("Amethyst After", result);
});

$("#Emerald").on("click", function() {
    console.log("Emerald Before", result);
    result = parseInt(result) + parseInt(EmeraldNum);
    $("#result").text("Your Score: " + result);
    console.log("Emerald After", result);
});

$("#Ruby").on("click", function() {
    console.log("Ruby Before", result);
    result = parseInt(result) + parseInt(RubyNum);
    $("#result").text("Your Score: " + result);
    console.log("Ruby After", result);
});

$("#Sapphire").on("click", function() {
    console.log("Sapphire Before", result);
    result = parseInt(result) + parseInt(SapphireNum);
    $("#result").text("Your Score: " + result);
    console.log("Sapphire After", result);
});
console.log("After Clicks", result);

if (result === testNum){
    wins++;
    $("#wins").text(wins);
    randomNumFunc();
}
else if (result > testNum){
    losses--;
    $("#losses").text(losses);
    randomNumFunc();
}

