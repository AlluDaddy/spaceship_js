/*
Timer: 
    Initially it requests an input from the Gamer. 
            1. i.e Enter the No.of seconds is needed to finish game for the Gamer.
                Based on the time challenge, the game will starts and the countdown also starts.
            2. i.e Click the cancel for Unlimited Game play.
                Then, the countdown start from 0 to n.   i.e n<0
            3. If the gamer lose in the game, it again request the gamer for to add additional time to complete the task.



*/



class Time{
    timer(){
        let count=prompt("Enter Seconds or enter cancel for unlimited gameplay");
        setInterval(myTimer, 1000);
        function myTimer() {
            count-=1;
            document.getElementById("time").innerHTML = count;
    setInterval(stopper,1000);
        function stopper(){
            if(count==-1){
                alert("You lose the match!");

                let play = prompt("Let's add some more time to finish the game");
                count = play

                Start.game;


            }
        }
    }
}}


