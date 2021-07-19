var mis_pos=700;
var ene_pos= 700;
var ene_pos1= 200;
var ene_pos2= 1200;
var dir=true;
var bullet_stop_case= true;
var ene_kill=true
var ene_kill1=true
var ene_kill2 =true;
var kills=0






x_far =  document.getElementById("missile").offsetTop - 310;
y_far = document.getElementById("missile").offsetLeft -680;
b= x_far;
document.getElementById('bullet').style.top= x_far;
document.getElementById('bullet').style.left= y_far;




function loop(){
    if(ene_pos>0 & ene_pos<=1420 &dir==true){
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


function fire_bullet(){
    bullet_stop_case=false;
    b-=20;
    // console.log(document.getElementById("bullet").offsetTop);
    document.getElementById('bullet').style.top= b+"px";   }



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
        
    
        
        
        

document.addEventListener('keydown', function(fire) {
    if(bullet_stop_case==true){
        if(fire.keyCode==32){
            bullet_stop_case = false;
            var stop = setInterval(fire_bullet,100);}
        setTimeout(stop_interval, 4100);
        function stop_interval(){
            if(bullet_stop_case==false){
                    bullet_stop_case = true;
                    clearInterval(stop);
                    document.getElementById('bullet').style.top= document.getElementById("missile").offsetTop - 310;;
                    document.getElementById('bullet').style.left= document.getElementById("missile").offsetLeft -680;
                    b=document.getElementById("missile").offsetTop-310;
                                        }   } }});

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
        else if(event.keyCode == 39) {
            if(mis_pos<1440){
            mis_pos+=30;
            document.getElementById("missile").style.marginLeft=mis_pos+"px";
            if(bullet_stop_case==true){
                document.getElementById('bullet').style.top= document.getElementById("missile").offsetTop - 310;
                document.getElementById('bullet').style.left= document.getElementById("missile").offsetLeft -680;    }    }} 
     }  });
                    
                    
                    
                    
                    

                    
                    
                    
                    
                    
                    
                    
                    // if((document.getElementById("ene"
            // console.log(document.getElementById("bullet").offsetTop);
            // console.log(document.getElementById("bullet").offsetLeft);
            // console.log(document.getElementById("ene").offsetLeft);
            // if(document.getElementById("ene1").offsetTop== document.getElementById("bullet").offsetTop & document.getElementById("ene1").offsetTop-5 < document.getElementById("bullet").offsetTop){
                

                // document.getElementById("ene").style.display="block";
                // document.getElementById("ene").style.marginLeft = "2000px";
                // alert("colide");
                
                // }    if(document.getElementById("ene2").offsetTop+5 > document.getElementById("bullet").offsetTop & document.getElementById("ene2").offsetTop-5 < document.getElementById("bullet").offsetTop){
                    //     alert("colide");
                    // }
                
























// setInterval(function(){collision(v)},1);
// setInterval(function(){collision(v1)},1);
// setInterval(function(){collision(v2)},1);

// function collision(obj){
//     if(document.getElementById("bullet").offsetTop==document.getElementsByClassName(obj).offsetTop){
//         console.log("Hit")
//         document.getElementById("bullet").style.backgroundImage = "";

// }
//     }





    

// document.addEventListener('keydown', function(fire){
//     if(fire.keyCode==32){
//         var stop = setInterval(fire_bullet,50);
//     }
//         setTimeout(stop_interval, 3100);
//         function stop_interval(){
//             clearInterval(stop);
//             document.getElementById('bullet').style.top= document.getElementById("missile").offsetTop;
//             b=document.getElementById("missile").offsetTop;
            // b = 650;
