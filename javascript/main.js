/*
Total classes/js_files:
        Missile(missile.js)
        Enemy(enemy.js)
        Collision(shoot.js)
        Timer(timer.js)


*/



class Start{
    game(){
        var obj = new Missile();
        obj.movement();
        
        
        var enem = new Enemy();
        enem.spaceship();
        
        var time = new Time();
        time.timer();
        var col = new Collision();
        col.collide();

    }}


var object = new Start();
object.game();