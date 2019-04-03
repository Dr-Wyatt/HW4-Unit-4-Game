var wins = 0;
var losses = 0;
var result = 0;
var gemNumArr = [];

function gemNumFunc(){
    gemNumArr.length = 0;
    for (i=0; i<4; i++){
        var gemRandomNum = Math.floor((Math.random()*12)+1);
        console.log("gemRandomNum", gemRandomNum);
        gemNumArr.push(gemRandomNum);
        console.log("gemNumArr", gemNumArr);
    }
    return gemNumArr;
}
gemNumFunc();

function randomNumFunc(){
    var randomNum = Math.floor((Math.random()*120) + 19);
    console.log("randomNum", randomNum);
    $("#Random-Number").text(randomNum);
    return randomNum;
}

var matchNum = randomNumFunc();
console.log("matchNum", matchNum);

console.log("result", result);
console.log("Amethyst", gemNumArr[0]);
console.log("Emerald", gemNumArr[1]);
console.log("Ruby", gemNumArr[2]);
console.log("Sapphire", gemNumArr[3]);

$("#Amethyst").on("click", function() {
    console.log("Amethyst Before", result);
    result = parseInt(result) + parseInt(gemNumArr[0]);
    $("#result").text("Your Score: " + result);
    console.log("Amethyst After", result);
    
    if (result === matchNum){
        wins++;
        $("#wins").text("Wins: " + wins);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);

    }
    else if (result > matchNum){
        losses++;
        $("#losses").text("Losses: " + losses);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
});


$("#Emerald").on("click", function() {
    console.log("Emerald Before", result);
    result = parseInt(result) + parseInt(gemNumArr[1]);
    $("#result").text("Your Score: " + result);
    console.log("Emerald After", result);
    if (result === matchNum){
        wins++;
        $("#wins").text("Wins: " + wins);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
    else if (result > matchNum){
        losses++;
        $("#losses").text("Losses: " + losses);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
});

$("#Ruby").on("click", function() {
    console.log("Ruby Before", result);
    result = parseInt(result) + parseInt(gemNumArr[2]);
    $("#result").text("Your Score: " + result);
    console.log("Ruby After", result);
    if (result === matchNum){
        wins++;
        $("#wins").text("Wins: " + wins);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
    else if (result > matchNum){
        losses++;
        $("#losses").text("Losses: " + losses);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
});

$("#Sapphire").on("click", function() {
    console.log("Sapphire Before", result);
    result = parseInt(result) + parseInt(gemNumArr[3]);
    $("#result").text("Your Score: " + result);
    console.log("Sapphire After", result);
    if (result === matchNum){
        wins++;
        $("#wins").text("Wins: " + wins);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
    else if (result > matchNum){
        losses++;
        $("#losses").text("Losses: " + losses);
        result = 0;
        $("#result").text("Your Score: " + result);
        matchNum = randomNumFunc();
        gemNumFunc();
        console.log("newMatchNum", matchNum);
    }
});

