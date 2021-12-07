

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



/*function createMyArray()
{
   checkCheckboxes();
}

function displayQuestion()
{
    console.log("firstTime is " + firstTime);
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
        console.log("were in the right part of the if statement");
        console.log("firstTag is " + firstTag);
        console.log("secondTag is " + secondTag);
        firstTag = secondTag;
        console.log("firsTag becomes" + firstTag);
        firstWorks = secondWorks; 
    }
}

function displayValues()
{
    document.getElementById("blank1").innerHTML =firstTag;
    console.log("first tag in display values is " + firstTag);
    document.getElementById("blank2").innerHTML =firstWorks;
    document.getElementById("blank3").innerHTML =secondTag;
    console.log(firstTag + " has " + firstWorks + " works. ");
    console.log(secondTag + " has " );
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
        console.log("correct");
    }
    else
    {
        incorrect();
        console.log("incorrect");
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
        incorrect();
        console.log("incorrect");
    }
}

function correct()
    {
        console.log("Correct function runs");
        displayCorrectScreen();

    }

function incorrect()
    {
        
        displayIncorrectScreen();
    }

function displayIncorrectScreen() 
    {
        //popup saying incorrect, there were x works w button to return to main gameplay
        document.getElementById("incorrectTag").innerHTML =secondTag;
        document.getElementById("incorrectBlank").innerHTML =secondWorks;
        document.getElementById("finalScore").innerHTML =score;
        document.getElementById("incorrect").style.display = "inline-block";
    }

function displayCorrectScreen()
    {
        //popup saying you're right, there were x works that dissapears
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

