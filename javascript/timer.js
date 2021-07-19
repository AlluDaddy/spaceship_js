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


