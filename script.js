

runGame();


function runGame()
{
    var firsTime = false;
    var firstTag;
    var secondTag;

    var firstWorks;
    var secondWorks;
    var score = 0;
    reset();
    

    //createMyArray();
    displayQuestion();


}

function reset()
{
    firstTime=true
    score=0
    document.getElementById("scoreSlot").innerHTML =score;
    //hide popups
    //reset checkboxes to defaults

    

}




function displayQuestion()
{
    pickValues();
    displayValues();
}


function pickValues()
{
    pickFirst();
    pickSecond();
}

function pickFirst()
{
    if (firstTime == true)
    {
        //pick random index from my array
        index1= Math.floor(Math.random() * 298);
        var objA = allData[index1];
        firstTag = objA.name;
        firstWorks = objA.number;
    }
    else if (firstTime==false)
    {

        firstTag = secondTag;
        firstWorks = secondWorks; 
    }
}

function displayValues()
{
    document.getElementById("blank1").innerHTML =firstTag;
    document.getElementById("blank2").innerHTML =firstWorks;
    document.getElementById("blank3").innerHTML =secondTag;
    console.log(firstTag + " has " + firstWorks + " works. ");
    console.log(secondTag + " has " + secondWorks);
}

function pickSecond()
{
    index2= Math.floor(Math.random() * 298);
    var objB = allData[index2];
    secondTag = objB.name;
    secondWorks = objB.number;
    
}

function compareValues()
{
    if (firstWorks==secondWorks) //works not tag to catch if certain tags have same # works so i don't have to build in an if they're equal fallback when checking
    {
        pickSecond();
    }
}

function checkResponseHigher()
{
    console.log("higher clicked");
    if (secondWorks > firstWorks)
    {
        correct();
        console.log("correct called");
    }
    else
    {
        console.log("incorrect higher called");
        incorrectHigher();
    }
}

function checkResponseLower()
{
    console.log("lower clicked");
    if (secondWorks < firstWorks)
    {
        correct();
        console.log("correct");
    }
    else
    {
        incorrectLower();
    }
}

function correct()
    {
        console.log("Correct function runs");
        displayCorrectScreen();

    }

function incorrectLower()
    {
        
        document.getElementById("incorrectTagL").innerHTML =secondTag;
        document.getElementById("incorrectBlankL").innerHTML =secondWorks;
        document.getElementById("finalScoreL").innerHTML =score;
        document.getElementById("otherTagL").innerHTML =firstTag;
        document.getElementById("otherWorksL").innerHTML =firstWorks;
        var lowerDiff = secondWorks-firstWorks;
        document.getElementById("lowerDiff").innerHTML =lowerDiff;
        document.getElementById("incorrectLower").style.display = "inline-block";
    }

    function incorrectHigher()
    {
        console.log("inc higher reached");
        document.getElementById("incorrectTag").innerHTML =secondTag;
        document.getElementById("incorrectBlank").innerHTML =secondWorks;
        document.getElementById("finalScore").innerHTML =score;
        document.getElementById("otherTag").innerHTML =firstTag;
        document.getElementById("otherWorks").innerHTML =firstWorks;
        var higherDiff = firstWorks-secondWorks;
        document.getElementById("higherDiff").innerHTML =higherDiff;
        document.getElementById("incorrectHigher").style.display = "inline-block";
    }

function displayIncorrectScreen() 
    {
        document.getElementById("incorrectTag").innerHTML =secondTag;
        document.getElementById("incorrectBlank").innerHTML =secondWorks;
        document.getElementById("finalScore").innerHTML =score;
        document.getElementById("otherTag").innerHTML =firstTag;
        document.getElementById("otherWorks").innerHTML =firstWorks;
        
    }

function displayCorrectScreen()
    {
        console.log("Display correct screen runs");
        document.getElementById("correctTag").innerHTML =secondTag;
        document.getElementById("correctBlank").innerHTML =secondWorks;
        document.getElementById("correct").style.display = "inline-block";
        score++;
        document.getElementById("scoreSlot").innerHTML =score;
        setTimeout(function () { document.getElementById("correct").style.display = "none"; }, 1500);
        firstTime=false;
        displayQuestion();
    }

//on event play again button clicked
    reset();
    runGame();

