function Submit() 
{
    var  task_Score = 0;
    task_Score =task_Score +document.getElementById("a").value * document.getElementById("a").value
    task_Score = task_Score +document.getElementById("b").value * document.getElementById("b").value
    task_Score = task_Score +document.getElementById("c").value * document.getElementById("c").value
    task_Score = task_Score +document.getElementById("d").value * document.getElementById("d").value
    task_Score = task_Score +document.getElementById("e").value * document.getElementById("e").value
    task_Score = task_Score +document.getElementById("f").value * document.getElementById("f").value
    
    document.getElementById("data").innerHTML=task_Score;
    
    var  task1Score  = 0;
    task1Score =  task1Score  +document.getElementById("g").value * document.getElementById("g").value
    task1Score  = task1Score  +document.getElementById("h").value * document.getElementById("h").value
    task1Score  = task1Score +document.getElementById("i").value * document.getElementById("i").value
    task1Score  = task1Score  +document.getElementById("j").value * document.getElementById("j").value
    task1Score  = task1Score  +document.getElementById("k").value * document.getElementById("k").value
    task1Score  = task1Score  +document.getElementById("l").value * document.getElementById("l").value
    
    document.getElementById("data2").innerHTML=task1Score ;

    var  task2Score  = 0;
    task2Score =  task2Score   +document.getElementById("m").value * document.getElementById("m").value
    task2Score   = task2Score   +document.getElementById("n").value * document.getElementById("n").value
    task2Score   = task2Score  +document.getElementById("o").value * document.getElementById("o").value
    task2Score   = task2Score   +document.getElementById("p").value * document.getElementById("p").value
    task2Score   = task2Score  +document.getElementById("q").value * document.getElementById("q").value
    task2Score   = task2Score   +document.getElementById("r").value * document.getElementById("r").value
    
    document.getElementById("data3").innerHTML=task2Score;
 
    if((task_Score>=task1Score)&&(task_Score>=task2Score))
    {
        if(task1Score>=task2Score)
        {
            document.getElementById("main3").innerHTML = 3;
            document.getElementById("main2").innerHTML =2;
            document.getElementById("main").innerHTML =1;
            
        }
        else
        {
            document.getElementById("main2").innerHTML = 3;
            document.getElementById("main3").innerHTML =2;
            document.getElementById("main").innerHTML =1;
            
        }
    }
    else if((task1Score>=task_Score)&&(task1Score>=task2Score))
    {
        if(task_Score>=task2Score)
        {
            document.getElementById("main3").innerHTML = 3;
            document.getElementById("main").innerHTML =2;
            document.getElementById("main2").innerHTML =1;
            
        }
        else
        {
            document.getElementById("main").innerHTML = 3;
            document.getElementById("main3").innerHTML =2;
            document.getElementById("main2").innerHTML =1;
            
        }
    }
    else if((task2Score>=task_Score)&&(task2Score>=task1Score))
    {
        if(task_Score>=task1Score)
        {
            document.getElementById("main2").innerHTML = 3;
            document.getElementById("main").innerHTML =2;
            document.getElementById("main3").innerHTML =1;
           
        }
        else
        {
            document.getElementById("main").innerHTML = 3;
            document.getElementById("main2").innerHTML =2;
            document.getElementById("main3").innerHTML =1;
        }         
    }
}