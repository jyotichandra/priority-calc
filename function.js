function Next() {
    var x = document.getElementById("value1").value;
    var y = document.getElementById("value2").value;
    var z = document.getElementById("value3").value;
    if (x == "" || x == null||y== "" || y== null||z == "" || z == null) {
      alert("Please fill the empty priority");
     return false;
    }
    document.getElementById("priority1").value= document.getElementById("value1").value;
    document.getElementById("priority2").value= document.getElementById("value2").value;
    document.getElementById("priority3").value= document.getElementById("value3").value;
   
    document.getElementById("rankcalculator").style.display ="block";
    document.getElementById("priorities").style.display ="none";

}
function teststage1(){
    document.getElementById("value1").value="priority1";
    document.getElementById("value2").value="priority2";
    document.getElementById("value3").value="priority3";
}

// Submit

function teststage2(){
     document.getElementById("priority1factor1").value =1;
     document.getElementById("priority1factor2").value=2;
     document.getElementById("priority1factor3").value=3;
     document.getElementById("priority1factor4").value=4;
     document.getElementById("priority1factor5").value=5;
     document.getElementById("priority1factor6").value=2;
     document.getElementById("priority2factor1").value=3;
     document.getElementById("priority2factor2").value=4;
     document.getElementById("priority2factor3").value=1;
     document.getElementById("priority2factor4").value=2;
     document.getElementById("priority2factor5").value=3;
     document.getElementById("priority2factor6").value=4;
     document.getElementById("priority3factor1").value=1;
     document.getElementById("priority3factor2").value=2;
     document.getElementById("priority3factor3").value=3;
     document.getElementById("priority3factor4").value=2;
     document.getElementById("priority3factor5").value=1;
     document.getElementById("priority3factor6").value=1;
}


function Submit() {
   
    
    //  if (priority1factor1 == "" || priority1factor2 == "" || priority1factor3== "" || priority1factor4== "" || priority1factor5 == "" || priority1factor6 == "" || priority2factor1== "" || priority2factor2 == "" ||
    //  priority2factor3 == "" || priority2factor4 == "" || priority2factor5== "" || priority2factor6 == "" || priority3factor1== "" || priority3factor2 == "" || priority3factor3== "" || priority3factor4== "" || priority3factor5 == "" || priority3factor6== "")
    //   alert("Some field is left empty");
    var Scores=[];
    let PriorityCount = 3;
    let FactorCount = 6;
    for( var priority = 1; priority <= PriorityCount ; priority++)
    {
        var currentPriorityScore = 0;
        for( var factor = 1; factor <= FactorCount; factor++ )
        {
            var optionId = "priority" + priority + "factor"  + factor;
            
            var factorValue = document.getElementById(optionId).value;
            currentPriorityScore =  currentPriorityScore + factorValue * factorValue;
           
            
        }
        Scores.push(currentPriorityScore);
        var total = "score" + priority;
        document.getElementById(total).innerHTML=Scores[priority-1];
        console.log(Scores);
    }

         document.getElementById("score1").innerHTML = priority1score1;
         document.getElementById("score2").innerHTML = priority2score2;
         document.getElementById("score3").innerHTML = priority3score3;
   

     if ((priority1score1 >= priority2score2) && (priority1score1 >= priority3score3)) {
        if (priority2score2 >= priority3score3) {
        document.getElementById("rankscore3").innerHTML = 3;
         document.getElementById("rankscore2").innerHTML = 2;
         document.getElementById("rankscore1").innerHTML = 1;

    }
   else {
         document.getElementById("rankscore2").innerHTML = 3;
         document.getElementById("rankscore3").innerHTML = 2;
         document.getElementById("rankscore1").innerHTML = 1;

      }
  }
     else if ((priority2score2 >= priority1score1) && (priority2score2 >= priority3score3)) {
     if (priority1score1 >= priority3score3) {
          document.getElementById("rankscore3").innerHTML = 3;
          document.getElementById("rankscore1").innerHTML = 2;
          document.getElementById("rankscore2").innerHTML = 1;

      }
     else {
          document.getElementById("rankscore1").innerHTML = 3;
          document.getElementById("rankscore3").innerHTML = 2;
          document.getElementById("rankscore2").innerHTML = 1;

     }
   }
   else if ((priority3score3 >= priority1score1) && (priority3score3 >= priority2score2)) {
    if (priority1score1 >= priority2score2) {
          document.getElementById("rankscore2").innerHTML = 3;
          document.getElementById("rankscore1").innerHTML = 2;
          document.getElementById("rankscore3").innerHTML = 1;

     }
    else {
         document.getElementById("rankscore1").innerHTML = 3;
         document.getElementById("rankscore2").innerHTML = 2;
         document.getElementById("rankscore3").innerHTML = 1;
      }
 }
}