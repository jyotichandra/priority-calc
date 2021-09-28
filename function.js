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
    var Scores={};
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
        Scores[priority] = currentPriorityScore;
        var total = "score" + priority;
        document.getElementById(total).innerHTML=currentPriorityScore;
        console.log(Scores);
    }

    var sortable = [];
    for (var priority in Scores) {
        sortable.push([priority, Scores[priority]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    // lowest key
    var key = "rankscore" + sortable[0][0];
    document.getElementById(key).innerHTML = 3;

    // middle key
    var key = "rankscore" + sortable[1][0];
    document.getElementById(key).innerHTML = 2;

    // top key
    var key = "rankscore" + sortable[2][0];
    document.getElementById(key).innerHTML = 1;


}