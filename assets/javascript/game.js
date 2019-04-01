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
else { 
    $("#Amethyst").on("click", function() {
        result = parseInt(result) + parseInt(AmethystNum);
        $("#result").text("Your Score: " + result);
    });

    $("#Emerald").on("click", function() {
        result = parseInt(result) + parseInt(EmeraldNum);
        $("#result").text("Your Score: " + result);
    });

    $("#Ruby").on("click", function() {
        result = parseInt(result) + parseInt(RubyNum);
        $("#result").text("Your Score: " + result);
    });

    $("#Sapphire").on("click", function() {
        result = parseInt(result) + parseInt(SapphireNum);
        $("#result").text("Your Score: " + result);
    });
}