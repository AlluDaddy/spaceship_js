
/*
SpaceShip:
        Total number of spaceships =3
        Moving from Left to Right with a constant speed.
        When the Bullet from Missile reaches the surface, it disappears.

*/ 


var dir=true;
var ene_pos= 700;
var ene_pos1= 200;
var ene_pos2= 1200;
class Enemy{
        spaceship(){
            function loop(){
                if(ene_pos>0 & ene_pos<=1420 & dir==true){
                    if(ene_pos==1420){
                        dir=false;
                    ene_pos-=20;}
                    
                ene_pos+=20
                document.getElementsByClassName("enemy")[0].style.marginLeft=ene_pos+"px";  
                }
                else if(ene_pos<1440 & dir==false){
                    if(ene_pos==20){
                        dir=true;
                        ene_pos+=20;}
                    ene_pos-=20;
                    document.getElementsByClassName("enemy")[0].style.marginLeft=ene_pos+"px";
                }}
            
            var dire=true;
            function loop1(){
                if(ene_pos1>0 & ene_pos1<=1420 &dire==true){
                    if(ene_pos1==1420){
                        dire=false;
                        ene_pos1-=20;}
                    ene_pos1+=20
                    document.getElementsByClassName("enemy1")[0].style.marginLeft=ene_pos1+"px";  }
            
                else if(ene_pos1<1440 & dire==false){
                    if(ene_pos1==20){
                        dire=true;
                        ene_pos1+=20;}
                    ene_pos1-=20;
                    document.getElementsByClassName("enemy1")[0].style.marginLeft=ene_pos1+"px";
                }}
            
            var direc=true;
            function loop2(){
                if(ene_pos2>0 & ene_pos2<=1440 &direc==true){
                    if(ene_pos2==1420){
                        direc=false;
                        ene_pos2-=20;}
                        ene_pos2+=20
                        document.getElementsByClassName("enemy2")[0].style.marginLeft=ene_pos2+"px";  }
            
                else if(ene_pos2<=1440 & direc==false){
                    if(ene_pos2==20){
                        direc=true;
                        ene_pos2+=20;}
                        ene_pos2-=20;
                        document.getElementsByClassName("enemy2")[0].style.marginLeft=ene_pos2+"px";
                    }}
setInterval(loop, 100);
setInterval(loop1,100);
setInterval(loop2,100);

            
        }
}
