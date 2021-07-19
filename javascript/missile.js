/*
Missile:
    Controls:
        Leftarrow - To move left
        Rightarrow - To move right
        spacebar - To Fire Bullet

    Set a fixed launch/fire position for the rocket/missile using left & right keys.
    Unable to change the position of the rocket after firing the bullet. Until the bullet gets perform its complete action.
    It tooks 6 seconds to habitat or to get stabilize for the rocket after changing the firing position.Till then bullets are unable to perform their action.
    After the completion of action of the pre-bullet, The next bullet gets loaded to the missile.



*/




class Missile{
    movement(){

var b = document.getElementById("missile").offsetTop - 310;
var mis_pos=700;
this.x_far =  document.getElementById("missile").offsetTop - 310;
var bullet_stop_case = true;
this.y_far = document.getElementById("missile").offsetLeft -680;





document.addEventListener('keydown', function(event) {
    if(bullet_stop_case==true){
        if(event.keyCode == 37) {
            if(mis_pos>0){
                mis_pos-=30;
                document.getElementById("missile").style.marginLeft=mis_pos+"px";
                if(bullet_stop_case==true){
                    document.getElementById('bullet').style.top= document.getElementById("missile").offsetTop - 310;
                    document.getElementById('bullet').style.left= document.getElementById("missile").offsetLeft -680;}
                }  }
        if(event.keyCode == 39) {
            if(mis_pos<1440){
                mis_pos+=30;
                document.getElementById("missile").style.marginLeft=mis_pos+"px";
                if(bullet_stop_case==true){
                    document.getElementById('bullet').style.top= document.getElementById("missile").offsetTop - 310;
                    document.getElementById('bullet').style.left= document.getElementById("missile").offsetLeft -680;    }    }} 
                }  });
                        
                        
                        

document.addEventListener('keydown', function(fire) {
    if(bullet_stop_case==true){
        if(fire.keyCode==32){
            bullet_stop_case=false;
            var stop = setInterval(fire_bullet,100);}
                setTimeout(stop_interval, 4100);
    function stop_interval(){
                clearInterval(stop);
                document.getElementById('bullet').style.top= document.getElementById("missile").offsetTop - 310;;
                document.getElementById('bullet').style.left= document.getElementById("missile").offsetLeft -680;
                b=document.getElementById("missile").offsetTop-310;
                bullet_stop_case=true;
    } }});



function fire_bullet(){
    b-=20;
    document.getElementById('bullet').style.top= b+"px";  
    bullet_stop_case=false;
    } 
}}