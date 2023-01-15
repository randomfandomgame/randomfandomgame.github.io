filterButton.addEventListener("click", showFilter);
closeButton.addEventListener("click", hideFilter);
goButton.addEventListener("click", startToFilter);

addtlTags = document.getElementById("Additional Tags");
addtlTags.addEventListener("click", checkAddtl);

genshinImpact = document.getElementById("Genshin Impact");
genshinImpact.addEventListener("click", checkGenshin);

fullmetalAlchemist= document.getElementById("Fullmetal Alchemist");
fullmetalAlchemist.addEventListener("click", checkFullmetal);

hunterXHunter= document.getElementById("Hunter x Hunter");
hunterXHunter.addEventListener("click", checkHunter);

marvel= document.getElementById("Marvel");
marvel.addEventListener("click", checkMarvel);

starWars= document.getElementById("Star Wars");
starWars.addEventListener("click", checkSW);

harryPotter = document.getElementById("Harry Potter");
harryPotter.addEventListener("click", checkHP);

supernatural = document.getElementById("Supernatural");
supernatural.addEventListener("click", checkSupernatural);

miscRPF = document.getElementById("Misc. RPF");
miscRPF.addEventListener("click", checkRPF);

myHeroAcademia = document.getElementById("My Hero Academia");
myHeroAcademia.addEventListener("click", checkMHA);

sherlock = document.getElementById("Sherlock (TV)");
sherlock.addEventListener("click", checkSherlock);

teenWolf = document.getElementById("Teen Wolf (TV)");
teenWolf.addEventListener("click", checkTeenWolf);

haikyuu = document.getElementById("Haikyuu!!");
haikyuu.addEventListener("click", checkHaikyuu);

dreamSMP = document.getElementById("Dream SMP");
dreamSMP.addEventListener("click", checkDreamSMP);

DCU = document.getElementById("DCU");
DCU.addEventListener("click", checkDCU);

let newArray=allData;
let addtlArray;
let genshinArray;
let fullmetallArray;
let hunterArray;
let marvelArray;
let SWArray;
let HPArray;
let supernaturalArray;
let RPFArray;
let MHAArray;
let sherlockArray;
let teenWolfArray;
let haikyuuArray;
let dreamSMPArray;
let DCUArray;

function showFilter()
{
    console.log("show filter");
    document.getElementById("filter").style.display="initial";
}

function hideFilter()
{
    console.log("hide filter");
    document.getElementById("filter").style.display="none";
}

var addtlClicked=false;
var genshinClicked=false;
var fullmetalClicked=false;
var hunterClicked=false;
var marvelClicked = false;
var SWClicked = false;
var HPClicked = false;
var supernaturalClicked = false;
var RPFClicked=false;
var MHAClicked = false;
var sherlockClicked = false;
var teenWolfClicked = false;
var haikyuuClicked = false;
var dreamSMPClicked = false;
var DCUClicked = false;
 
function checkAddtl()
{
    console.log("check addtl");
   if (addtlClicked == false)
   {
       addtlClicked=true;
   }
   else
   {
       addtlClicked=false;
   }
   console.log(addtlClicked);
}


function checkGenshin()
{
    console.log("check genshin");
    if (genshinClicked == false)
   {
       genshinClicked=true;
   }
   else
   {
       genshinClicked=false;
   }
   console.log(genshinClicked);
}

function checkFullmetal()
{
    if (fullmetalClicked == false)
   {
       fullmetalClicked=true;
   }
   else
   {
       fullmetalClicked=false;
   }
   console.log(fullmetalClicked);
}

function checkHunter()
{
    if (hunterClicked == false)
    {
        hunterClicked=true;
    }
    else
    {
        hunterClicked=false;
    }
    console.log(hunterClicked);
 }


function checkMarvel()
{
    if (marvelClicked == false)
    {
        marvelClicked=true;
    }
    else
    {
        marvelClicked=false;
    }
    console.log(marvelClicked);
 }

 function checkSW()
{
    if (SWClicked == false)
    {
        SWClicked=true;
    }
    else
    {
        SWClicked=false;
    }
    console.log(SWClicked);
 }

 function checkHP()
{
    if (HPClicked == false)
    {
        HPClicked=true;
    }
    else
    {
        HPClicked=false;
    }
    console.log(HPClicked);
 }

 function checkSupernatural()
 {
     if (supernaturalClicked == false)
     {
         supernaturalClicked=true;
     }
     else
     {
         supernaturalClicked=false;
     }
     console.log(supernaturalClicked);
  }

  function checkRPF()
  {
      if (RPFClicked == false)
      {
          RPFClicked=true;
      }
      else
      {
          RPFClicked=false;
      }
      console.log(RPFClicked);
   }

   function checkMHA()
   {
       if (MHAClicked == false)
       {
           MHAClicked=true;
       }
       else
       {
           MHAClicked=false;
       }
       console.log(MHAClicked);
    }

    function checkSherlock()
    {
        if (sherlockClicked == false)
        {
            sherlockClicked=true;
        }
        else
        {
            sherlockClicked=false;
        }
        console.log(sherlockClicked);
     }

     function checkTeenWolf()
    {
        if (teenWolfClicked == false)
        {
            teenWolfClicked=true;
        }
        else
        {
            teenWolfClicked=false;
        }
        console.log(teenWolfClicked);
     }

       
     function checkHaikyuu()
     {
         if (haikyuuClicked == false)
         {
             haikyuuClicked=true;
         }
         else
         {
             haikyuuClicked=false;
         }
         console.log(haikyuuClicked);
      }


     function checkDreamSMP()
    {
        if (dreamSMPClicked == false)
        {
            dreamSMPClicked=true;
        }
        else
        {
            dreamSMPClicked=false;
        }
        console.log(dreamSMPClicked);
     }

     function checkDCU()
    {
        if (DCUClicked == false)
        {
            DCUClicked=true;
        }
        else
        {
            DCUClicked=false;
        }
        console.log(DCUClicked);
     }
   
function startToFilter()
{
    document.getElementById("filter").style.display="none";
    console.log("startTofilter");
   if (addtlClicked==true)
   {
    addtlArray = allData.filter(data => data.fandom === 'Additional');
   console.log(addtlArray);
   }
   else if (addtlClicked==false)
   {
        addtlArray= [];
       console.log(addtlArray);
   }

   if (genshinClicked==true)
   {
    genshinArray = allData.filter(data => data.fandom === 'Genshin Impact');
   console.log(genshinArray);
   }
   else if (genshinClicked==false)
   {
        genshinArray= [];
       console.log(genshinArray);
   }

   if (fullmetalClicked==true)
   {
    fullmetalArray = allData.filter(data => data.fandom === 'Fullmetal Alchemist');
   console.log(fullmetalArray);
   }
   else if (fullmetalClicked==false)
   {
        fullmetalArray= [];
       console.log(fullmetalArray);
   }

   if (hunterClicked==true)
   {
    hunterArray = allData.filter(data => data.fandom === 'Hunter x Hunter');
   console.log(hunterArray);
   }
   else if (hunterClicked==false)
   {
        hunterArray= [];
       console.log(hunterArray);
   }

   if (marvelClicked==true)
   {
    marvelArray = allData.filter(data => data.fandom === 'Marvel');
   console.log(marvelArray);
   }
   else if (marvelClicked==false)
   {
        marvelArray= [];
       console.log(marvelArray);
   }

   if (SWClicked==true)
   {
    SWArray = allData.filter(data => data.fandom === 'Star Wars');
   console.log(SWArray);
   }
   else if (SWClicked==false)
   {
        SWArray= [];
       console.log(SWArray);
   }

   if (HPClicked==true)
   {
    HPArray = allData.filter(data => data.fandom === 'Harry Potter');
   console.log(HPArray);
   }
   else if (HPClicked==false)
   {
        HPArray= [];
       console.log(HPArray);
   }

   if (supernaturalClicked==true)
   {
    supernaturalArray = allData.filter(data => data.fandom === 'Supernatural');
   console.log(supernaturalArray);
   }
   else if (supernaturalClicked==false)
   {
        supernaturalArray= [];
       console.log(supernaturalArray);
   }

   if (RPFClicked==true)
   {
    RPFArray = allData.filter(data => data.fandom === 'Misc. RPF');
   console.log(RPFArray);
   }
   else if (RPFClicked==false)
   {
        RPFArray= [];
       console.log(RPFArray);
   }

   if (MHAClicked==true)
   {
    MHAArray = allData.filter(data => data.fandom === 'My Hero Academia');
   console.log(MHAArray);
   }
   else if (MHAClicked==false)
   {
        MHAArray= [];
       console.log(MHAArray);
   }

   if (sherlockClicked==true)
   {
    sherlockArray = allData.filter(data => data.fandom === 'Sherlock (TV)');
   console.log(sherlockArray);
   }
   else if (sherlockClicked==false)
   {
        sherlockArray= [];
       console.log(sherlockArray);
   }

   if (teenWolfClicked==true)
   {
    teenWolfArray = allData.filter(data => data.fandom === 'Teen Wolf (TV)');
   console.log(teenWolfArray);
   }
   else if (teenWolfClicked==false)
   {
        teenWolfArray= [];
       console.log(teenWolfArray);
   }

   if (haikyuuClicked==true)
   {
    haikyuuArray = allData.filter(data => data.fandom === 'Haikyuu!!');
   console.log(haikyuuArray);
   }
   else if (haikyuuClicked==false)
   {
        haikyuuArray= [];
       console.log(haikyuuArray);
   }

   if (dreamSMPClicked==true)
   {
    dreamSMPArray = allData.filter(data => data.fandom === 'Dream SMP');
   console.log(dreamSMPArray);
   }
   else if (dreamSMPClicked==false)
   {
        dreamSMParray= [];
       console.log(dreamSMPArray);
   }

   if (DCUClicked==true)
   {
    DCUArray = allData.filter(data => data.fandom === 'DCU');
   console.log(DCUArray);
   }
   else if (DCUClicked==false)
   {
        DCUArray= [];
       console.log(DCUArray);
   }

   let tempArray = addtlArray.concat(genshinArray, fullmetalArray, hunterArray, marvelArray, SWArray, HPArray, supernaturalArray, RPFArray, MHAArray, sherlockArray, teenWolfArray, haikyuuArray, dreamSMPArray, DCUArray);
   tempArray.pop();
   newArray=tempArray;

   if (newArray.length == 0)
   {
       alert("You must select at least one fandom to filter for!")
   }
   console.log(newArray);
   runGame();
}

runGame();
var firstWorks;
var secondWorks;

function runGame()
{
    console.log('RUNGAME WRODKS');
    var firsTime = false;
    var firstTag;
    var secondTag;

    var score = 0;
    reset();
    

    displayQuestion();


}

function reset()
{
    console.log("reset");
    document.getElementById("incorrectHigher").style.display = "none";
    document.getElementById("incorrectLower").style.display = "none";
    firstTime=true
    score=0
    document.getElementById("scoreSlot").innerHTML =score;

}


function displayQuestion()
{
    console.log("display q");
    console.log("new array at display q " );
    console.log(newArray);
    pickValues();
    displayValues();
}

function pickValues()
{
    console.log("pick vals");
    pickFirst();
    pickSecond();
}

function pickFirst()
{
    console.log("pick first");
    console.log("new array at picfirst");
    console.log(newArray);
    if (firstTime == true)
    {
        index1= Math.floor(Math.random() * newArray.length);
        var objA = newArray[index1];
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
    console.log("display values");
    document.getElementById("blank1").innerHTML =firstTag;
    document.getElementById("blank2").innerHTML =firstWorks.toLocaleString("en-US");
    document.getElementById("blank3").innerHTML =secondTag;
    console.log(firstTag + " has " + firstWorks + " works. ");
    console.log(secondTag + " has " + secondWorks);
}

function pickSecond()
{
    console.log("pick second");
    index2= Math.floor(Math.random() * newArray.length);
    var objB = newArray[index2];
    secondTag = objB.name;
    secondWorks = objB.number;
    compareValues();
    
}

function compareValues()
{
    console.log("compare values");
    if (firstWorks==secondWorks) 
    {
        pickSecond();
    }
}

function checkResponseHigher()
{
    console.log("higher clicked");
    console.log("check response higher");
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
    console.log("check response lower");
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
        console.log("incorrect function runs");
        document.getElementById("incorrectTagL").innerHTML =secondTag;
        document.getElementById("incorrectBlankL").innerHTML =secondWorks.toLocaleString("en-US");
        document.getElementById("finalScoreL").innerHTML =score;
        document.getElementById("otherTagL").innerHTML =firstTag;
        document.getElementById("otherWorksL").innerHTML =firstWorks.toLocaleString("en-US");
        var lowerDiff = secondWorks-firstWorks;
        document.getElementById("lowerDiff").innerHTML =lowerDiff.toLocaleString("en-US");
        document.getElementById("incorrectLower").style.display = "inline-block";
    }

    function incorrectHigher()
    {
        console.log("inc higher reached");
        document.getElementById("incorrectTag").innerHTML =secondTag;
        document.getElementById("incorrectBlank").innerHTML =secondWorks.toLocaleString("en-US");
        document.getElementById("finalScore").innerHTML =score;
        document.getElementById("otherTag").innerHTML =firstTag;
        document.getElementById("otherWorks").innerHTML =firstWorks.toLocaleString("en-US");
        var higherDiff = firstWorks-secondWorks;
        document.getElementById("higherDiff").innerHTML =higherDiff.toLocaleString("en-US");
        document.getElementById("incorrectHigher").style.display = "inline-block";
    }

function displayCorrectScreen()
    {
        console.log("Display correct screen runs");
        document.getElementById("correctTag").innerHTML =secondTag.toLocaleString("en-US");
        document.getElementById("correctBlank").innerHTML =secondWorks.toLocaleString("en-US");
        document.getElementById("correct").style.display = "inline-block";
        score++;
        document.getElementById("scoreSlot").innerHTML =score;
        setTimeout(function () { document.getElementById("correct").style.display = "none"; }, 1500);
        firstTime=false;
        displayQuestion();
    }

 
