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

                let play = prompt("Take another challenge and enter Seconds");
                count = play

                Start.game();

                // let foo = prompt('Type here');
                // let bar = confirm('Confirm or deny');

            }
        }
    }
}}


