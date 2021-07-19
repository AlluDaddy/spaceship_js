
var ene_kill=true
var ene_kill1=true
var ene_kill2 =true;
var kills=0

class Collision{
    collide(){
        setInterval(function(){

            if(kills==3){
                    console.log("Total kills are three.")
                    console.log(kills);
                    alert("Game is over!");
                }
                
                if(document.getElementById("bullet").offsetTop==230 & ene_kill2==true){
                    if(Math.abs((document.getElementById("bullet").offsetLeft-document.getElementById("ene2").offsetLeft))<=40){  
                        console.log("Killed the offsett with 230");

                        document.getElementById("ene2").style.visibility="hidden";
                    kills=kills+1;
                    ene_kill2=false;
                    }}
            
                if(document.getElementById("bullet").offsetTop==150 & ene_kill1==true){
                    if(Math.abs((document.getElementById("bullet").offsetLeft-document.getElementById("ene1").offsetLeft))<=40){  
                        console.log("Killed the offsett with 150");

                        document.getElementById("ene1").style.visibility="hidden";
                        bullet_stop_case=true;
                        b=document.getElementById("missile").offsetTop-310;

                        kills=kills+1;
                        ene_kill1=false;
                    }}

                if(document.getElementById("bullet").offsetTop==10 & ene_kill==true){
                    if(Math.abs((document.getElementById("bullet").offsetLeft-document.getElementById("ene").offsetLeft))<=40){  
                        console.log("Killed the offsett with 10");

                        document.getElementById("ene").style.visibility="hidden";
                    kills=kills+1;
                    ene_kill=false;

                            }}})
                        
                        }}
                
                