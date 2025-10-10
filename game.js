let var1 = 50;
let player;
let boss;
let speech;
let swordHitBox;
let fireball;
let fireballL;
let dummy;
let ground;
let portal;
let lava;
let healthUp;
let box;
let Ldoor;
let lever;
let bossSword;
let bossSwordShadow;
let castleImage;
let laser;
let darkbox;
var counter = 1;
var counterL = 1;
var counterJumpRight = 1;
var counterJumpLeft = 1;
var counterRA = 1;
var counterLA = 1;
var counterSR = 1;
var counterSL = 1;
var counterShadow = 0;
var counterDeath = 1;
var counterBall = 1;
var counterShoot = 1;
var counterBallL = 1;
var counterShootL = 1;
var counterSlimeRight = 1;
var counterSlimeLeft = 1;
var counterSlimeDeath = 1;
var bossMovement = 10;
var direction = true;
var jCoolDown = false;
let blocks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arrowListRight = [1,2,3,4,5];
let arrowListLeft = [1,2,3,4,5];
let arrowListDown = [1,2,3,4,5];
let enemiesS = [1,2,3,4,5,6];
let enemyState = [false,false,false,false,false,false,false, false, false, false];
var swingR = false;
var swingL = false;
var arrowRS = false;
var dead = false;
var shot = false;
var shotL = false;
var BallDirection = true;
var downPos = false;
var open = false;
var health = 12000;  ////Testing Purpose
var stamina = 100;
var mana = 100;
var bossTimer = 0;
var lavaTimer = 0;
var gearTimer = 0;
let arrowDisplacement = Math.random() * 100;
var normalHealth = health;
var maxHealth = health;
var gotten = false;
var sPosx = 100;
var sPosy = 300;
var prevX = 0;
var prevY = 0;
var isHooked = false;
var stage = 6;//6 to test boss easier, 9 total
var dStage = 0;
var FcoolDown = false;
var FcoolDown2 = false;
var deathMessage = true;
const g = 0.1;
const ropeClimbSpeed = 2;
const friction = 0.75;
const ballRadius = 10;
let position, velocity, origin, ropeLength;
let finalAttackSprite;
var finalAttack = 0;
let sneakAttackActivate = false;
let sneakAttackTimer = 0;

let standFrame, LstandFrame, crouchFrame, LcrouchFrame;
let [walkFrames, LwalkFrames, swingFrames, LswingFrames, dashFrames, LdashFrames, jumpFrames, LjumpFrames, deathFrames, fireFrames, LfireFrames, fireballFrames, LfireballFrames] = [[], [], [], [], [], [], [], [], [], [], [], [], []];

let mainCanvas, uiCanvas, uiCtx;

function gs(fileName){
    return "/GameSprites/" + fileName;  
}

function resizeUICanvas() {
    const rect = mainCanvas.elt.getBoundingClientRect();
    uiCanvas.width = rect.width;
    uiCanvas.height = rect.height;
}

function preload(){
    for(let i = 1; i <= 6; i++) walkFrames[i] = loadImage(gs("walk" + i + ".png"));
    for(let i = 1; i <= 6; i++) LwalkFrames[i] = loadImage(gs("Lwalk" + i + ".png"));
    standFrame = loadImage(gs("stand1.png"));
    LstandFrame = loadImage(gs("stand2.png"));
    crouchFrame = loadImage(gs("crouch1.png"));
    LcrouchFrame = loadImage(gs("crouch2.png"));
    for(let i = 1; i <= 4; i++) swingFrames[i] = loadImage(gs(i + "f.png"));
    for(let i = 1; i <= 4; i++) LswingFrames[i] = loadImage(gs("l" + i + ".png"));
    for(let i = 1; i <= 2; i++) {
        dashFrames[i] = loadImage(gs("dash" + (i) + ".png"));
        LdashFrames[i] = loadImage(gs("dash" + (i+2) + ".png"));
        jumpFrames[i] = loadImage(gs("JumpR" + i + ".png"));
        LjumpFrames[i] = loadImage(gs("JumpL" + i + ".png"));
    }
    for(let i = 1; i <= 5; i++) fireFrames[i] = loadImage(gs("c" + i + ".png"));
    for(let i = 1; i <= 5; i++) LfireFrames[i] = loadImage(gs("z" + i + ".png"));
    for(let i = 1; i <= 10; i++) deathFrames[i] = loadImage(gs("d" + i + ".png"));
    for(let i = 1; i <= 3; i++) fireballFrames[i] = loadImage(gs("b" + i + ".png"));
    for(let i = 1; i <= 3; i++) LfireballFrames[i] = loadImage(gs("a" + i + ".png"));

    staticCloud = loadImage(gs("staticCloud.png"));
    dynamicCloud = loadImage(gs("dynamicCloud.png"));

    skyBoss = loadImage(gs("skyBoss.png"));
    staticCloudBoss = loadImage(gs("staticCloudBoss.png"));
    dynamicCloudBoss = loadImage(gs("dynamicCloudBoss.png"));
    
    dirt = loadImage(gs("ground.png"));
    idle = loadImage(gs("walk1.png"));
    dirt2 = loadImage(gs("dirt2.jpeg"));
    arrow = loadImage(gs("arrow.png"));

    arrowR = loadImage(gs("arrowR.png"));
    arrowL = loadImage(gs("arrowL.png"));
    arrowD = loadImage(gs("arrowD.png"));

    laserImage = loadImage(gs("laser.png"));
    Fireball = loadImage(gs("b1.png"));
    Fireball2 = loadImage(gs("a1.png"));
    portal2 = loadImage(gs("portal.png"));
    lavaImage = loadImage(gs("lava.png"));
    gear = loadImage(gs("gear.png"));
    hpUp = loadImage(gs("healthUp.png"));
    boxImage = loadImage(gs("box.png"));
    slime = loadImage(gs("Ls1.png"));
    leverImage = loadImage(gs("lever.png"));
    door = loadImage(gs("door.png"));

    throneroom = loadImage(gs("throneroom.png"));

    bossImage = loadImage(gs("boss1L.png"));
    swordImage = loadImage(gs("sword.png"));
    swordImageShadow = loadImage(gs("dsword.png"));
    shadowBox = loadImage(gs("BBox.png"));
}

function setup(){
    mainCanvas = createCanvas(1200, 1000);
    mainCanvas.style('position', 'absolute');
    mainCanvas.style('left', '0px');
    mainCanvas.style('top', '0px');
    mainCanvas.style('z-index', '1');

    // --- UI CANVAS ---
    uiCanvas = document.createElement("canvas");
    uiCanvas.style.position = "absolute";
    uiCanvas.style.left = "0px";
    uiCanvas.style.top = "0px";
    uiCanvas.style.zIndex = "10";
    uiCanvas.style.pointerEvents = "none"; // don't block mouse
    document.body.appendChild(uiCanvas);

    uiCtx = uiCanvas.getContext("2d");
    uiCtx.imageSmoothingEnabled = false;

    // Call helper to match CSS-stretched size
    resizeUICanvas();

    
    cloudSetUp();
    speech = new p5.Speech();
    speech.setPitch(1);
    speech.setVoice("Aaron");

    position = createVector( width * 0.75, 20 );
    velocity = createVector();
    spriteStuff();
    
    for(let i = 0; i < blocks.length; i++){
        blocks[i] = new Sprite(dirt2, -100, 600, 50,50);
        blocks[i].debug = false;
        blocks[i].scale.x = 0.1;
        blocks[i].scale.y = 0.1;
        blocks[i].width = 50;
        blocks[i].height = 50;
        blocks[i].collider = "static";

        enemiesS[i] = new Sprite(slime,-1000,600,50,50);
        enemiesS[i].debug = false;
        enemiesS[i].scale.x = 0.2;
        enemiesS[i].scale.y = 0.2;
        enemiesS[i].width = 50;
        enemiesS[i].height = 250;
        enemiesS[i].collider = "dynamic";
    }

    for(let i = 0; i < 6; i++){
        arrowListDown[i] = new Sprite(arrowD, -100,100,20,275);
        arrowListDown[i].debug = false;
        arrowListDown[i].collider = "static";
        arrowListDown[i].visible = false;

        arrowListRight[i] = new Sprite(arrowR, 1200,100,275,20);
        arrowListRight[i].debug = false;
        arrowListRight[i].collider = "dynamic";
        arrowListRight[i].visible = false;

        arrowListLeft[i] = new Sprite(arrowL, 1200,100,275,20);
        arrowListLeft[i].debug = false;
        arrowListLeft[i].collider = "dynamic";
        arrowListLeft[i].visible = false;
    }
    
    ground.collider = "static";
    sprite.collider = "static";
    player.collider = "dynamic";
    swordHitBox.collider = "none";
}


function draw() {
    clear();
    background(138, 176, 226);
    fill("green");

    moveClouds();

    text(Math.round(mouseX) + "," + Math.round(mouseY), 400, 100);
    //This is for resetting the stage
    if(kb.presses("r") && stage != 9){
        resetStage();
    }
    if(stage == 0){
        portal.x = 1150;
        portal.y = 675;
        if(dead == false){
            normalStuff();
            level1();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();
            
        }
    }
    else if(stage == 1){
        
        portal.x = 1100;
        portal.y = 175;
        if(dead == false){
            normalStuff();
            level2();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 100;
            normalStageStuff();
            healthUp.x = 60;
            healthUp.y = 675;


        }
    }
    else if(stage == 2){
        portal.x = 1100;
        portal.y = 175;
        if(dead == false){
            level3();
            normalStuff();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 600;
            normalStageStuff();
            box.x = 950;
            box.y = 675;
            downPos = true;
            blocks[4].x = 100;
            blocks[4].y = 600;
        }
    }
    else if(stage == 3){
        portal.x = 1100;
        portal.y = 675;
        if(dead == false){
            level4();
            normalStuff();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();
            enemiesS[0].x = 600;
            enemiesS[1].x = 825;
            enemiesS[2].x = 300;
        }


    }
    else if(stage == 4){
        portal.x = 1100;
        portal.y = 675;
        if(dead == false){
            level5();
            normalStuff();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();
            enemiesS[0].x = -600;
            enemiesS[1].x = -825;
            enemiesS[2].x = 500;
            enemiesS[2].y = 100;
            respawnSlime(2);


            blocks[4].x = 1000;
            blocks[4].y = 700;
            Ldoor.x = 100
            Ldoor.y = 150


            player.x = 50;
            player.y = 600;


            box.x = 200;
            box.y = 150;


            box.visible = true;
            lever.x = 1100;


            healthUp.x = 1150;
            healthUp.y = 50;
        }
    }
    else if(stage == 5){
        
        downPos = true;
        portal.x = 25;
        portal.y = 150;
        if(dead == false){
            level6();
            normalStuff();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 0;
            normalStageStuff();
            sprite.x = -1000;
            lava.x = -1000;
            healthUp.x = -1000;
            blocks[0].x = -1000;
            blocks[4].x = -1000;
            blocks[5].x = -1000;
            lever.x = -1000;
            open = false;
            Ldoor.x = 1000
            Ldoor.y = 675
            Ldoor.height = 300;
            Ldoor.width = 60;
            Ldoor.scale.y = 0.7;


            enemiesS[0].x = 600;
            enemiesS[1].x = 200;
            enemiesS[2].x = 300;


            enemiesS[3].x = 800;
            enemiesS[4].x = 1000;
            enemiesS[5].x = 1100;


            respawnSlime(0);
            respawnSlime(1);
            respawnSlime(2);
            respawnSlime(3);
            respawnSlime(4);
            respawnSlime(5);
            for(let i = 0; i < 3; i++){
                enemyState[i] = false;
                enemiesS[i].visible = true;
                enemiesS[i].image = gs("Ls1.png");
                enemiesS[i].y = 600;
            }
            for(let j = 3; j < 6; j++){
                enemyState[j] = false;
                enemiesS[j].visible = true;
                enemiesS[j].image = gs("Ls1.png");
                enemiesS[j].y = 100;
            }
        }
    }
    else if(stage == 6){
        downPos = false;
        portal.x = 1100;
        portal.y = 650;
        if(dead == false){
            level7();
            normalStuff();
            lever.x = 100;
            lever.y = 420;
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();
            open = false;
        }
    }
    else if(stage == 7){
        downPos = true;
        if(dead == false){
            Ldoor.x = -100;
            portal.x = -1900;
            
            level8();
            normalStuff();
        }
        else{
            deathAnimation();
        }
        if(player.collides(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();
            
        }
    }
    else if(stage == 8){
        castleImage.visible = true;
        resizeCanvas(1100,800);
        downPos = true;
        if(dead == false){
            Ldoor.x = -100;
            portal.visible = false;
            ground.visible = false;
            castle();
            normalStuff();
            
        }
        else{
            deathAnimation();
        }
        text("Press x to continue with the dialogue.", 475,200 );
        text("Press j to skip dialogue.", 500, 175);
    }
    else if(stage == 9){
        resizeCanvas(1200,1000);
        castleImage.visible = false;
        background("lightblue");
        downPos = true;
        if(dead == false){
            Ldoor.x = -100;
            
            ground.visible = true;
            bossFight();
            normalStuff();
            
        }
        else{
            deathAnimation();
        }
        if(health <= 0){
            background("black");
            if(deathMessage == true){  
                speech.speak("You died. This is the end of your journey.");
                deathMessage = false;
                speech.stop();
            }
            text("You died. This is the end of your journey.", 500,500);
            hideEverything();
        }
    }
    else if(stage == 10){
        background("Yellow");
        text("Congratulations! You win!.", 500,500);
        hideEverything();
    }


    uiCtx.clearRect(0, 0, uiCanvas.width, uiCanvas.height);

    // Calculate scale factors
    const rect = mainCanvas.elt.getBoundingClientRect();
    const scaleX = rect.width / width;
    const scaleY = rect.height / height;

    uiCtx.fillStyle = "red";
    uiCtx.font = `${49 * scaleY}px Arial`; // scale font for vertical size
    uiCtx.textAlign = "left";

    // Draw text at scaled coordinates
    uiCtx.fillText("Score: 100", 600 * scaleX, 500 * scaleY);
    
}


function spriteStuff(){
    castleImage = new Sprite(throneroom, 600,520,10,10);
    castleImage.collider = "none";
    castleImage.visible = false;

    sprite = new Sprite(gear,550,300,50,50); 
    sprite.debug = false;
    sprite.scale.x = 0.3;
    sprite.scale.y = 0.3;

    swordHitBox = new Sprite(300,300, 30,50);
    swordHitBox.debug = true;

    dummy = new Sprite(750,700, 30,50);
    dummy.debug = false;
    
    fireball = new Sprite(Fireball,-150,-150,70,50);
    fireball.debug = false;
    fireball2 = new Sprite(Fireball2,-150,-150,70,50);
    fireball2.debug = false;

    player = new Sprite(idle, 100,200,50,50);

    boss = new Sprite(bossImage, 100,100,20,20);
    boss.scale.x = 0.2;
    boss.scale.y = 0.2;
    boss.visible = false;
    boss.collider = "static";

    ground = new Sprite(dirt, 600,800,1200,100);

    arrow1 = new Sprite(arrow, 200,200,50,50);
    arrow1.debug = false;
    ground.debug = false;
    player.debug = false;
    resizeThings();
    portal = new Sprite(portal2, 200,200,120,120);
    portal.debug = false;
    portal.scale.x = 0.3;
    portal.scale.y = 0.3;
    portal.collider = "static";

    lava = new Sprite(lavaImage, 200,-200,120,120);
    lava.debug = false;
    lava.collider = "static";

    healthUp = new Sprite(hpUp, 200,200,750,750);
    healthUp.scale.x = 0.03;
    healthUp.scale.y = 0.03;
    healthUp.debug = false;
    healthUp.collider = "static";
    healthUp.x = -100;

    box = new Sprite(boxImage, 200,200,250,150);
    box.scale.x = 0.5;
    box.scale.y = 0.5;
    box.debug = false;
    box.collider = "static";
    box.x = -100;

    Ldoor = new Sprite(door, 200,600,200,200);
    Ldoor.scale.x = 0.5;
    Ldoor.scale.y = 0.5;
    Ldoor.debug = false;
    Ldoor.collider = "static";
    Ldoor.x = -300;

    lever = new Sprite(leverImage, -1100,700,400,400);
    lever.scale.x = 0.1;
    lever.scale.y = 0.1;
    lever.debug = false;
    lever.collider = "static";
    
    bossSword = new Sprite(swordImage, -200,200,50,400);
    bossSword.debug = false;
    bossSword.collider = "static";
    bossSword.visible = false;

    bossSwordShadow = new Sprite(swordImageShadow, -1200,200,300,50);
    bossSwordShadow.debug = false;
    bossSwordShadow.collider = "dynamic";
    bossSwordShadow.visible = false;

    laser = new Sprite(laserImage, -200,200,140,475);
    laser.scale.y = 1.3;
    laser.collider = "static";
    laser.debug = false;
    laser.visible = false;

    darkbox = new Sprite(shadowBox,-200,200,250,250);
    darkbox.scale.x = 0.2;
    darkbox.scale.y = 0.2;
    darkbox.visible = false;
    darkbox.debug = false;
    darkbox.collider = "dynamic";

    finalAttackSprite = new Sprite(shadowBox,200,200,2500,750);
    finalAttackSprite.scale.x = 8;
    finalAttackSprite.scale.y = 2;
    finalAttackSprite.collider = "none";
    finalAttackSprite.visible = false;
}


function basicMovement(){
    if(player.collides(laser)) health-=15;
    
    if(health <= 0){
        dead = true;
        gotten = false;
    }
    player.scale.x = 0.2;
    player.scale.y = 0.2;
    
    if(kb.pressing("ArrowRight") && kb.pressing("ArrowDown") == false){
        player.x = player.x + 10;
        counter+=0.1;
        player.image = walkFrames[Math.round(counter)];
        direction = true;

        if(counter > 6) counter = 1;
    }
    else if(direction == true && player.vel.y == 0) player.image = standFrame;
    
    if(kb.pressing("ArrowLeft") && kb.pressing("ArrowDown") == false){
        player.x = player.x - 10;
        counterL+=0.1;
        player.image = LwalkFrames[Math.round(counterL)];
        direction = false;

        if(counterL > 6) counterL = 1;
    }
    else if(direction == false && player.vel.y == 0) player.image = LstandFrame;
        
    if(kb.pressing("ArrowDown") && direction == true){
        player.image = crouchFrame;
        player.height = 240;
        
        if(kb.pressing("ArrowRight")){
            player.image = dashFrames[1];
            player.x = player.x + 10;
            player.height = 200;
            counterSR+=0.1;
            player.image = dashFrames[Math.round(counterSR)];

            if(counterSR > 2) counterSR = 1;
        }
    }
    else if(direction == true && kb.pressing("ArrowDown") == false) player.height = 310;

    if(kb.pressing("ArrowDown") && direction == false){
        player.image = LcrouchFrame;
        player.height = 240;
        
        if(kb.pressing("ArrowLeft")){
            player.image = LdashFrames[1];
            player.x = player.x - 10;
            player.height = 200;
            counterSL+=0.1;
            player.image = LdashFrames[Math.round(counterSL)];

            if(counterSL > 2) counterSL = 1;
        }
    }
    else if(direction == false && kb.pressing("ArrowDown") == false) player.height = 310;
    
    player.vel.x = 0;
    fill("black");
    text("Hp: " + health, 50,930);
    fill("red");
    rect(150, 915, health * 2, 25);

    fill("black");
    text("Mana: " + mana, 430,930);
    fill("Blue");
    rect(530, 915, mana * 2, 25);

    if(mana < 100) mana += 1;
    
    fill("black");
    text("Stamina: " + stamina, 830,930);
    fill("Yellow");
    rect(930, 915, stamina * 2, 25);

    text("Level: " + stage, 830,980);

    if(stamina < 100) stamina += 1;
    
    let d = Math.sqrt(Math.pow(player.x - lever.x, 2) + Math.pow(player.y - lever.y, 2));

    if(kb.presses("e") && d < 50) open = !open;
    
    if(open == true) lever.image = gs("lever2.png");
    
    if(open == false) lever.image = gs("lever.png");
}

function resistance(){
    if(stage != 8){
       if(player.x > 1175){
           player.x -= 10;
       }
       if(player.x < 25){
           player.x += 10;
       }
   }
   else{
       if(player.x > 1000){
           player.x -= 10;
       }
       if(player.x < 100){
           player.x += 10;
       }
   }
}

function pjump(){
    player.rotation = 0;

    if(player.collides(ground)){
        player.vel.y = 0;
        
    }
    else if(isHooked == false){
        player.vel.y = player.vel.y+2;
    }
    
    if((kb.pressing("ArrowUp") && (player.collides(ground) || player.collides(sprite)) || player.collides(lava)) && stamina >= 20){
        player.vel.y = -20;
        stamina -= 20;
        jumpAni();
    }
    for(let i = 0; i < blocks.length; i++){
        if(player.collides(blocks[i])){
            if(kb.pressing("ArrowUp") && stamina >= 20){
                player.vel.y = -20;
                jumpAni();
                stamina -= 20;
            }
            
        }
        
    }
}




function resizeThings(){
    ground.scale.x = 2.5;
    ground.scale.y = 2.5;
    ground.height = 60;

    player.height = 310;
    player.width = 180;

    arrow1.width = 200;
    arrow1.height = 5;
    arrow1.scale.x = 0.2;
    arrow1.scale.y = 0.1;
    
    fireball.scale.x = 0.3;
    fireball.scale.y = 0.3;

    fireball2.scale.x = 0.3;
    fireball2.scale.y = 0.3;

    arrow1.x = -100;
    dummy.x = -100;
    sprite.x = -100;
}


function summonArrow(){
   if(kb.presses("s")){
       arrowRS = true;
   }
   if(arrowRS == true){
       arrow1.rotation = 0;
       arrow1.rotationSpeed = 0;
       arrow1.x = 0;
       arrow1.y = 690;
       arrow1.vel.x = 25;
       arrow1.vel.y = 0;
       arrowRS = false;
   }
   if(player.collides(arrow1)){
       health -= 50;
   }
}


function moveShadow(){
    counterShadow++;


    if(counterShadow > 200){
        prevX = player.x;
        prevY = player.y;
        counterShadow = 0;
    }
    fill("blue");
    circle(prevX, prevY, 30);

    if(kb.presses("d") && mana > 50){
        player.x = prevX;
        player.y = prevY;
        if(health <= maxHealth - 10) health+=10;
        mana-=50;
    }

}


function swordThingR(){
    if(kb.presses("a") && direction == true && stamina >= 20){
        swingR = true;
        stamina -= 20;
    }
    if(swingR == true){
        swordHitBox.collider = "static";
        counterRA += 0.1;
        player.image = swingFrames[Math.round(counterRA)];

        if(counterRA > 4){
            swordHitBox.collider = "none";
            counterRA = 1;
            swingR = false;
            player.image = standFrame;
        }
    }

    if(kb.presses("a") && direction == false && stamina >= 20){
        swingL = true;
        stamina -= 20;
    }
    if(swingL == true){
        swordHitBox.collider = "static";
        counterLA += 0.1;
        player.image = LswingFrames[Math.round(counterLA)];

        if(counterLA > 4){
            swordHitBox.collider = "none";
            counterLA = 1;
            swingL = false;
            player.image = LstandFrame;
        }
    }
    
    if(direction == true){
        swordHitBox.x = player.x+50;
    }
    else if(direction == false){
        swordHitBox.x = player.x-50;
    }
    swordHitBox.y = player.y;
    
}


function normalStageStuff(){
    if(gotten == true){
        gotten = false;
        maxHealth = normalHealth + 10;
    }
    prevX = player.x;
    prevY = player.y;
    stage++;
    player.image = gs("stand1.png");
    normalHealth = maxHealth;
    health = maxHealth;
    open = false;
}


function dummyAct(){
    dummy.collider = "dynamic";
    dummy.x = 750;
        dummy.y = 700;
    
    if(swordHitBox.collides(dummy)){
        health-=10;
        text("Ouch", dummy.x, dummy.y - 20);
        text(health, dummy.x, dummy.y - 50);
    }
}


function jumpAni(){
    if(direction == true){
        counterJumpRight+=0.1;
        player.image = jumpFrames[Math.round(counterJumpRight)]; 
        
        if(counterJumpRight > 2) counterJumpRight = 1;
    }
    if(direction == false){
        counterJumpLeft+=0.1;
        player.image = LjumpFrames[Math.round(counterJumpLeft)];

        if(counterJumpLeft > 2) counterJumpLeft = 1;
    }
}


function deathAnimation(){
    if(counterDeath < 10.1){
        counterDeath+=0.25;
        player.image = deathFrames[Math.round(counterDeath)]; 
    }   
    player.vel.y = 0;
}

function fireBallAttack(){
    fireball.rotation = 0;
    fireball2.rotation = 0;
    if(fireball.collides(dummy)){
        health-=5;
    }

    if(kb.presses("q") && direction == true && FcoolDown == false && mana >= 50){
        mana -= 50;
        fireball.visible = true;
        shot = true;
        counterShoot = 1;
        BallDirection = true;
        fireball.x = player.x + 10;
        fireball.y = player.y;
        FcoolDown = true;
        fireball.vel.y = 0;
    }
    
    if(fireball.x < 1250){
        fireball.x = fireball.x + 10;
    }
    counterBall+=0.1;
    if(counterBall > 3){
        counterBall = 0.9;
    }
    fireball.image = fireballFrames[Math.round(counterBall)];
    if(shot){
        counterShoot += 0.2;
        player.image = fireFrames[Math.round(counterShoot)];
        if(counterShoot > 5.4){
            shot = false;
            player.image = standFrame;
        }
    }
      
    if(fireball2.collides(dummy)){
        health-=5;
    }

    if(kb.presses("q") && direction == false && FcoolDown2 == false && mana >= 50){
        mana -= 50;
        fireball2.visible = true;
        shotL = true;
        counterShootL = 1;
        BallDirection = false;
        fireball2.x = player.x - 10;
        fireball2.y = player.y;
        FcoolDown2 = true;
        fireball2.vel.y = 0;
    }
    if(fireball2.x > -50){
        fireball2.x = fireball2.x - 10;
        
    }
    counterBallL+=0.1;
    if(counterBallL > 3){
        counterBallL = 0.9;
    }
    fireball2.image = LfireballFrames[Math.round(counterBallL)];
    if(shotL){
        counterShootL += 0.2;
        player.image = LfireFrames[Math.round(counterShootL)]; 
        if(counterShootL > 5.4){
            shotL = false;
            player.image = LstandFrame;
        }
    }
    if(fireball.x > 1200){
        FcoolDown = false;
    }
    
    if(fireball2.x < 0){
        FcoolDown2 = false;
    }


    if(fireball.visible == true && fireball.collides(box) || fireball2.visible == true && fireball2.collides(box)){
        box.x = -200;
    }
    
    for(let i = 0; i < blocks.length; i++){
        if(fireball.collides(blocks[i]) || fireball.collides(portal) || fireball.collides(lever) || fireball.collides(Ldoor)){
            fireball.visible = false;
            FcoolDown = false;
            
            
        }
        if(fireball2.collides(blocks[i]) || fireball2.collides(portal) || fireball2.collides(lever) || fireball2.collides(Ldoor)){
            fireball2.visible = false;
            FcoolDown2 = false;
        }
    }
}


function normalStuff(){
    pjump();
    basicMovement();
    resistance();
            
    summonArrow();
    moveShadow();

    swordThingR();
    //dummyAct();
    fireBallAttack();
}


function keyPressed() {
    if(keyCode == 32){
        origin = createVector( sprite.x, sprite.y );
        ropeLength = dist( position.x, position.y, sprite.x, sprite.y );
    }
}


function keyReleased() {
    if(keyCode == 32){
        origin = null;
    }
}


function rope(){
  
    if(true){
        velocity.y += g;
        position.add( velocity );
        velocity.mult( 0.999 );

        if ( position.y > height - ballRadius ) {
            position.y = height - ballRadius;
            velocity.y *= - friction;
        }
        if ( position.x < ballRadius ){
            position.x = ballRadius;
            velocity.x *= - friction;
        
        } else if ( position.x > width - ballRadius ) { 
        position.x = width - ballRadius;
        velocity.x *= - friction;
        }
        if ( origin ) {
            line( origin.x, origin.y, position.x, position.y );

            if ( origin.dist( position ) > ropeLength ) {
                let positionOnEndOfRope = p5.Vector.sub( position, origin );
                positionOnEndOfRope.setMag( ropeLength );
                positionOnEndOfRope.add( origin );

                velocity.sub(p5.Vector.sub( position, positionOnEndOfRope));
                position = positionOnEndOfRope;
            }
        }
        isHooked = true;
        player.x = position.x;
        player.y = position.y;
    
        circle( position.x, position.y, ballRadius * 2 );
    }
}


function resize(i){
    blocks[i].scale.y = 0.375;
    blocks[i].scale.x = 0.5;
    blocks[i].height = 600;
    blocks[i].width = 300;
}


function level1(){
    blocks[0].x = 600;
    blocks[0].y = 675;
    blocks[0].scale.x = 0.25;
    blocks[0].scale.y = 0.20;
    blocks[0].width = 150;
    blocks[0].height = 550;

    text("Welcome. Arrows keys to move. D to teleport to your previous location. Previous location is shown by the blue dot.", 300,500);
}


function level2(){
    blocks[0].x = 400;
    blocks[0].y = 575;
    blocks[0].scale.y = 0.375;
    blocks[0].height = 600;

    blocks[1].x = 1050;
    blocks[1].y = 625;
    blocks[1].scale.y = 0.1;
    blocks[1].height = 550;
    blocks[1].width = 70;

    blocks[2].x = 900;
    blocks[2].y = 475;
    blocks[2].scale.y = 0.1;
    blocks[2].height = 550;
    blocks[2].width = 70;

    blocks[3].x = 1050;
    blocks[3].y = 350;
    blocks[3].scale.y = 0.1;
    blocks[3].height = 550;
    blocks[3].width = 70;

    text("Hold down arrow and/or right or left to slide. A to swing your sword.", 450,400);

}


function level3(){
    blocks[0].x = 100;
    blocks[0].y = 350;
    blocks[0].scale.y = 0.375;
    blocks[0].scale.x = 0.5;
    blocks[0].height = 600;
    blocks[0].width = 300;

    blocks[1].x = 900;
    blocks[1].y = 350;
    blocks[1].scale.y = 0.375;
    blocks[1].scale.x = 0.5;
    blocks[1].height = 600;
    blocks[1].width = 300;

    blocks[2].x = -200;
    blocks[3].x = -200;

    lava.x = 600;
    lava.y = 800;
    lava.scale.x = 0.5;
    lava.width = 600;
    lava.height = 150;
    if(player.collides(lava)){
        dead = true;
    }
    sprite.x = 500;
    sprite.y = 50;
    if(kb.pressing("space") && dist(player.x, player.y, sprite.x, sprite.y) < 300) {rope();}
    else {
        position.x = player.x;
        position.y = player.y;
        isHooked = false;
    }
    
    if(player.collides(healthUp)){
        healthUp.x = -100;
        health += 10;
        gotten = true;
    }

    text("Press space when near a gear to hook onto it. R to respawn if you die. You may appear invisibile once you respawn.", 300,600);
}


function level4(){
    lava.x = -500;
    blocks[0].x = 1050;
    blocks[0].y = 525;
    
    sprite.x = -500;
    healthUp.x = -500;

    text("Press q to shoot a fireball. Fireballs can burn blocks of wood.", 800, 300);

    blocks[1].x = 400;
    blocks[1].y = 600;
    
    resize(2);
    resize(3);
    blocks[2].x = 400;
    blocks[2].y = 400;

    blocks[3].x = 400;
    blocks[3].y = 200;
    
    blocks[4].height = 500;
    blocks[4].y -= 5;
    if(blocks[4].y < 0){
        blocks[4].y = 700;
    }
}


function away(){
    blocks[0].x = -500;
    blocks[1].x = -500;
    blocks[2].x = -500;
    blocks[3].x = -500;
}


function slimeMove(i){
  
    let d = Math.sqrt(Math.pow(enemiesS[i].x - player.x,2) + Math.pow(enemiesS[i].y - player.y,2));

    if(enemiesS[i].x < player.x && d < 200 && enemiesS[i].visible == true){
        enemiesS[i].x += 2.5;
        counterSlimeRight+=0.1;
        enemiesS[i].image = gs("Ls" + Math.round(counterSlimeRight) + ".png");

        if(counterSlimeRight > 3){
            counterSlimeRight = 1;
        }
    }

    if(enemiesS[i].x > player.x && d < 200 && enemiesS[i].visible == true){
        enemiesS[i].x -= 2.5;
        counterSlimeLeft+=0.1;
        enemiesS[i].image = gs("Rs" + Math.round(counterSlimeLeft) + ".png");

        if(counterSlimeLeft > 3){
            counterSlimeLeft = 1;
        }
    }

    enemiesS[i].rotation = 0;
    for(let i = 0; i < blocks.length; i++){
        if(enemiesS[i].collides(ground) || enemiesS[i].collides(blocks[i])){
            enemiesS[i].vel.y = 0;
        }
        else if(enemiesS[i].y < 1150){
            enemiesS[i].vel.y += 2;
        }
        else enemiesS[i].vel.y = 0;
    }

    if(enemiesS[i].collides(player) && player.x < enemiesS[i].x && enemiesS[i].visible == true){
        health -= 2;
        player.x -=10;
    }

    if(enemiesS[i].collides(player) && player.x > enemiesS[i].x && enemiesS[i].visible == true){
        health -= 2;
        player.x +=10;
    }
    
    if(enemiesS[i].collides(player) && player.x < enemiesS[i].x && enemiesS[i].visible == true && bossTimer > 8000 && bossTimer < 10000){
        health -= 5;
        player.x -=10;
    }

    if(enemiesS[i].collides(player) && player.x > enemiesS[i].x && enemiesS[i].visible == true && bossTimer > 8000 && bossTimer < 10000){
        health -= 5;
        player.x +=10;
    }

    if(swordHitBox.collides(enemiesS[i]) || fireball.collides(enemiesS[i]) && fireball.visible == true ||  fireball2.collides(enemiesS[i]) && fireball2.visible == true){
        counterSlimeDeath = 1;
        
        enemyState[i] = true;
    }
    if(enemyState[i] == true){
        counterSlimeDeath+=0.1;
        enemiesS[i].image = gs("SD" + Math.round(counterSlimeDeath) + ".png");

        if(counterSlimeDeath > 4){
            enemiesS[i].visible = false;
            enemiesS[i].y = 1000;
        }
        if(enemyState[i] == false){
            enemiesS[i].visible = true;
            counterSlimeDeath = 1;
        }
    }
  
}

function respawnSlime(i){
    enemyState[i] = false;
    enemiesS[i].visible = true;
    enemiesS[i].image = gs("Ls1.png");
    enemiesS[i].vel.x = 0;
    enemiesS[i].vel.y = 0;
}


function level5(){
    text("Try hitting the slimes with your fireball or sword.", 500, 500);

    away();
    blocks[4].x = -300;
    slimeMove(0);
    slimeMove(1);
    slimeMove(2);
    
    blocks[0].x = 500;
    blocks[0].y = 700;

    blocks[0].scale.x = 0.25;
    blocks[0].scale.y = 0.20;
    blocks[0].height = 525;
    blocks[0].width = 150;
    
}


function level6(){
    if(open == true){
        Ldoor.x = -100;
    }
    else{
        Ldoor.x = 100;
    }

    blocks[0].x = 500;
    blocks[0].y = 700;

    sprite.x = 250;
    sprite.y = 500;
    if(kb.pressing("space") && dist(player.x, player.y, sprite.x, sprite.y) < 300) {rope();}
    else {
        position.x = player.x;
        position.y = player.y;
        isHooked = false;
    }

    lava.x = 450;
    lava.y = 800;
    lava.scale.x = 0.5;
    lava.width = 600;
    lava.height = 150;


    if(player.collides(lava)){
        dead = true;
    }
    resize(1);
    resize(2);
    resize(3);
    resize(5);

    blocks[1].x = 150;
    blocks[1].y = 300;
    blocks[2].x = 450;
    blocks[2].y = 300;
    blocks[3].x = 750;
    blocks[3].y = 300;
    blocks[5].x = 100;
    blocks[5].y = 0;

    blocks[4].height = 500;
    blocks[4].y -= 5;
    if(blocks[4].y < 0){
        blocks[4].y = 700;
    }
    slimeMove(2);

    if(player.collides(healthUp)){
        healthUp.x = -100;
        health += 10;
        gotten = true;
    }
}


function level7(){
    lava.scale.x = 1;
    lava.scale.y = 1;
    if(open == true){
        Ldoor.x = -100;
    }
    else{
        Ldoor.x = 1000;
    }

    resize(7);
    resize(8);
    resize(9);
    resize(10);

    blocks[1].y = 200;
    blocks[2].y = 230;
    blocks[3].y = 240;

    blocks[7].x = 20;
    blocks[7].y = 550;

    blocks[8].x = 450;
    blocks[8].y = 495;

    blocks[9].x = 750;
    blocks[9].y = 500;

    blocks[10].x = 1050;
    blocks[10].y = 500;
    
    slimeMove(0);
    slimeMove(1);
    slimeMove(2);
    slimeMove(3);
    slimeMove(4);
    slimeMove(5);
  
}


function level8(){
    portal.x = 1100;
    for(let i = 0; i < blocks.length; i++){
        blocks[i].x = -300;
    }
    for(let i = 0; i < enemiesS.length; i++){
        enemiesS[i].x = -300;
    }
    
    lever.x = -300;
}


function castle(){
  
    portal.x = -1100;
    boss.x = 950;
    boss.y = 640;
    boss.visible = true;
    speech.setVoice("Arthur");
    speech.setPitch(0.8);
    speech.setRate(1.1);
    if(kb.presses("j")) {
        dStage = 6;
        speech.stop();
    }
    
    if(dStage == 0) message("Who are you? Why have you entered my castle?");
    else if(dStage == 1 && kb.presses("x")) message("A knight? How interesting. You guys always seem to appear.");
    else if(dStage == 2 && kb.presses("x")) message("So, what do you want?.");
    else if(dStage == 3 && kb.presses("x")) message("My story? You want to know how I ended up like this? Well, it all started on that one fateful day. He, told all us angels not to interfere with the humans. He said that we shouldn’t care about humans and what is happening on earth. At first, all of us listened to him because the humans weren’t struggling. However, everything changed when He had a bad day. Out of fury, he summoned storms and tornados to destroy the humans even if they didn’t do anything. As we watched, hundreds of them perished while his anger only seemed to grow. I won’t ever understand why he did this. However, I couldn’t stand by and watch the humans suffer. Against his orders, I flew down to Earth and used my powers to protect the withering humans. With my assistance, they were able to survive his wrath. When the storms ended, I returned to heaven. When I got back, he confronted me personally and pierced me with his light. After burning in his harsh power, he banished me from heaven and now I reside here. Never to return to my true home, rotting away on this planet. Was this what I deserved for my kindness? ");
    else if(dStage == 4 && kb.presses("x")) {speech.setPitch(0.6);
    message("He sent you to punish me, correct?")}
    else if(dStage == 5 && kb.presses("x")) message("After everything that's happened, I apparently am still in the wrong.");
    else if(dStage == 6 && kb.presses("x")) message("Well, I don't plan on losing easily. Let's take this outside");
    else if(dStage == 7){
        stage = 9;
        boss.x = 600;
        boss.y = 100;
    }
    if(player.x > 600){
        dead = true;
        let temp = Math.round(Math.random() * 2);
        speech.stop();
        if(temp == 0) speech.speak("Step no further, mortal.");
        if(temp == 1) speech.speak("Do not approach me, mortal.");
        if(temp == 2) speech.speak("Stand back, you don't know what you're dealing with.");
        
        player.x = 200
        
    }


}
//Need to have a better system for dialogue, can't skip very well.
function message(m){
    speech.speak(m);
    dStage++;


}

function bossFight(){
    //1000 2500
    if(bossTimer < 1000){
        boss.image = gs("boss2C.png");
        boss.x = bossMovement + boss.x;
        if(boss.x > 800) bossMovement *= -1;

        if(boss.x < 400) bossMovement *= -1;
    }
    if(bossTimer > 1000 && bossTimer < 2500){
        boss.x = 600;
    }
    if(bossTimer > 2500 && bossTimer < 4500){
        boss.x = bossMovement + boss.x;
        if(boss.x > 800) bossMovement *= -1;
        if(boss.x < 400) bossMovement *= -1;
    }
    if(bossTimer > 4500 && bossTimer < 5500 ){        
        boss.x = bossMovement + boss.x;
        if(boss.x > 1100) bossMovement *= -1;

        if(boss.x < 100) bossMovement *= -1;
    }
    
    if(bossTimer > 8000 && bossTimer < 10000){
        
        boss.image = gs("boss1.1C.png");
        boss.x = bossMovement + boss.x;
        if(boss.x > 1100) bossMovement *= -1;


        if(boss.x < 100) bossMovement *= -1;


    }
    //Testing Purpose
    if(bossTimer < 10000) bossTimer += 10;
    else bossTimer ++;
    text(bossTimer, 300,300);  //Testing Purpose

    if(bossTimer < 1000){
        let pos = Math.random() * 2;
        bossSword.visible = true;
        bossSword.y += 20;
        if(bossSword.y > 600){
            let pos = Math.round(Math.random() * 2);
            bossSword.y = 100;
            if(pos == 1){
                bossSword.x = player.x-20;
            }
            else{
                bossSword.x = player.x+20;
            }
            
        }
        if(bossSword.collides(player)){
            health -= 5;
        }
    }
    else if(bossTimer > 1000 && bossTimer < 2500){
        bossSword.visible = false;
        bossSword.x = -200;
        gearTimer ++;
        
        if(gearTimer == 50){
            blocks[0].x = Math.round(Math.random() * 10 * 100);
            blocks[0].y = 720;
            resize(0);
        }
        if(gearTimer > 130){
            lava.x = 600;
            lava.y = 785;
            lava.width = 1500;
            lava.visible = true;
            if(player.collides(lava)){
                health = 0;
            }
        }
        if(gearTimer > 200){
            gearTimer = 0;
            
            lava.visible = false;
        }
    }
    else if(bossTimer > 2500 && bossTimer < 3500){
        lava.x = -1500;
        blocks[0].x = -1500;
        
        for(let i = 0; i < 6; i++){
            
            arrowListDown[i].visible = true;
            arrowListDown[i].y += 20;
            arrowListDown[i].x = i * 200 + arrowDisplacement;
            if(arrowListDown[i].y > 700){
                arrowListDown[i].y = 0;
                arrowDisplacement = Math.random() * 300;
            }
            if(arrowListDown[i].collides(player)){
                health-=5;
            }
        }
    }
    else if(bossTimer > 3500 && bossTimer < 4500){
        for(let i = 1; i < 6; i++){
            arrowListDown[i].visible = false;
            arrowListDown[i].y = 0;
        }
        arrowListDown[0].visible = true;
        arrowListDown[0].y += 10;
        if(arrowListDown[0].collides(player)){
            health-=5;
        }
        if(arrowListDown[0].y > 700){
            arrowListDown[0].y = 0;
            arrowListDown[0].x = player.x;
        }


        for(let i = 0; i < 6; i++){
            arrowListRight[i].collider = "dynamic";
            arrowListRight[i].visible = true;
            arrowListRight[i].x += 10;
            arrowListRight[i].rotation = 0;
            
            if(arrowListRight[i].x > 1200 || swordHitBox.collides(arrowListRight[i])){
                arrowListRight[i].y = 500 + i * 50;
                arrowListRight[i].x = Math.random() * 200 - 300;
                
            }
            if(arrowListRight[i].collides(player)){
                health-=5;
            }
        }
    }
    else if(bossTimer > 4500 && bossTimer < 5500){
        arrowListDown[0].x = -100;
        for(let i = 1; i < 6; i++){
            arrowListDown[i].visible = false;
            arrowListDown[i].x = -100;
            arrowListRight[i].visible = false;
            arrowListRight[i].x = -100;
        }
        laser.visible = true;
        laser.x = boss.x;
        laser.y = boss.y + 400;
    }


    if(bossTimer > 5500 && bossTimer < 5550){
        boss.x = 600;
        boss.image = gs("boss1.1C.png");
        speech.speak("I'm just getting started.");
        laser.visible = false;
        laser.x = -200;
        bossSwordShadow.x = 1200;
        bossSwordShadow.y = 600;
    }   
    if(bossTimer > 5550){
        speech.speak("");
    }
    if(bossTimer > 5550 && bossTimer < 6500){
        let pos = Math.random() * 2;
        bossSword.visible = true;
        bossSword.image = gs("sword2.png");
        bossSword.y += 20;
        if(bossSword.y > 600){
            let pos = Math.round(Math.random() * 2);
            bossSword.y = 100;
            if(pos == 1){
                bossSword.x = player.x-20;
            }
            else{
                bossSword.x = player.x+20;
            }
            
        }
        if(bossSword.collides(player)){
            health -= 10;
        }
        
        bossSwordShadow.visible = true;
        bossSwordShadow.x -= 5;
        bossSwordShadow.rotation = 0;
        if(bossSwordShadow.x < 100 || swordHitBox.collides(bossSwordShadow)){
            
            let pos = Math.round(Math.random() * 2);
            bossSwordShadow.x = 1100;
            if(pos == 1){
                bossSwordShadow.y = player.y-20;
            }
            else{
                bossSwordShadow.y = player.y+20;
            }
        }

        gearTimer = 0;
        if(bossSwordShadow.collides(player)){
            health -= 5;
        }
    }


    if(bossTimer > 6500 && bossTimer < 8000){
        bossSword.x = -1000;
        bossSwordShadow.x = -1000;
        gearTimer ++;
        darkbox.visible = true;
        darkbox.vel.x = 0;
        darkbox.vel.y = 0;


        if(swordHitBox.collides(darkbox)){
            gearTimer = 0;
            darkbox.image = gs("BBox.png");
        }


        if(gearTimer == 20){
            darkbox.x = Math.round(Math.random() * 10 * 100);
            darkbox.y = 720;
            
        }
        if(gearTimer == 120){
            darkbox.image = gs("BCircle.png");
            health -= 30;
        }
        if(gearTimer > 140){
            gearTimer = 0;
            darkbox.image = gs("BBox.png");
        }
        enemiesS[0].x = 100;
        enemiesS[1].x = 1100;
        enemiesS[0].y = 500;
        enemiesS[1].y = 500;
        respawnSlime(0);
        respawnSlime(1);
    }
    if(bossTimer > 8000 && bossTimer < 10000){
        darkbox.x = -1500;
        slimeMove(0);
        slimeMove(1);

        laser.visible = true;
        laser.x = boss.x;
        laser.y = boss.y + 400;

        resize(0);
        blocks[0].x = 600;
        blocks[0].y = 750;
        finalAttackSprite.y = 100;
    }


    if(bossTimer > 10000 && bossTimer < 12000){
        enemiesS[0].visible = false;
        enemiesS[1].visible = false;
        if(bossTimer > 10000 && bossTimer < 10050) speech.speak("This can't be.");
        boss.x = 600;
        if(boss.y < 650) boss.y += 10;
        laser.x = -1000;
        blocks[0].x = -1000;
    }

    if(player.collides(boss) && bossTimer > 10000){
        sneakAttackActivate = true;
    }
    if(sneakAttackActivate == true){
        text(sneakAttackTimer, 100, 100);
        sneakAttackTimer++;
        speech.speak("Got ya.")
        if(sneakAttackTimer > 100) health = 0;
    } 
    
    if(bossTimer > 10100 && bossTimer < 10150) speech.speak("You're going down with me.");
    if(bossTimer > 10100){
        finalAttackSprite.visible = true;
        
        finalAttackSprite.y += 1;
        
        if(health > 1 && finalAttackSprite.y > 400){
            health-=0.5;
            boss.x = -200;
            portal.x = 600;
            portal.y = 650;
        }
        text(finalAttackSprite.y, 400, 400);   //Testing Purposes
        if(finalAttackSprite.y > 800) health = 1;
        if(health == 1){
            boss.x = -200;
            portal.x = 600;
            portal.y = 650;
            portal.visible = true;
        }


        if(player.collides(portal) && portal.visible == true) stage++;
    }
}

function cloudSetUp(){
    staticCloudSprite = new Sprite(staticCloud, 0, 300, 50, 50);
    staticCloudSprite.collider = "none";
    staticCloudSprite.scale.x = 5;
    staticCloudSprite.scale.y = 3;

    dynamicCloudSprite = new Sprite(dynamicCloud, 600, 485, 50, 50); //485
    dynamicCloudSprite.collider = "none";
    dynamicCloudSprite.width = 400;
    dynamicCloudSprite.scale.x = 2.7;
    dynamicCloudSprite.scale.y = 1.5;

    dynamicCloudSprite2 = new Sprite(dynamicCloud, -900, 485, 50, 50); //485
    dynamicCloudSprite2.collider = "none";
    dynamicCloudSprite2.width = 400;
    dynamicCloudSprite2.scale.x = 2.7;
    dynamicCloudSprite2.scale.y = 1.5;

    skyBossSprite = new Sprite(skyBoss, 200, 250, 50, 50);
    skyBossSprite.collider = "none";
    skyBossSprite.scale.x = 4;
    skyBossSprite.scale.y = 3.5;

    staticCloudBossSprite = new Sprite(staticCloudBoss, 0, 300, 50, 50);
    staticCloudBossSprite.collider = "none";
    staticCloudBossSprite.scale.x = 5;
    staticCloudBossSprite.scale.y = 3;

    dynamicCloudBossSprite = new Sprite(dynamicCloudBoss, 600, 485, 50, 50); //485
    dynamicCloudBossSprite.collider = "none";
    dynamicCloudBossSprite.width = 400;
    dynamicCloudBossSprite.scale.x = 2.7;
    dynamicCloudBossSprite.scale.y = 1.5;

    dynamicCloudBossSprite2 = new Sprite(dynamicCloudBoss, -900, 485, 50, 50); //485
    dynamicCloudBossSprite2.collider = "none";
    dynamicCloudBossSprite2.width = 400;
    dynamicCloudBossSprite2.scale.x = 2.7;
    dynamicCloudBossSprite2.scale.y = 1.5;


}

function moveClouds(){
    if(stage < 8){
        dynamicCloudSprite.x+=1;
        dynamicCloudSprite2.x+=1;
        if(dynamicCloudSprite.x > 2100) dynamicCloudSprite.x = -900;
        if(dynamicCloudSprite2.x > 2100) dynamicCloudSprite2.x = -900;
        staticCloudBossSprite.visible = false;
        dynamicCloudBossSprite.visible = false;
        dynamicCloudBossSprite2.visible = false;
        skyBossSprite.visible = false;
    }
    else if(stage == 8){
        staticCloudSprite.visible = false;
        dynamicCloudSprite.visible = false;
        dynamicCloudSprite2.visible = false;
    }
    else{
        staticCloudBossSprite.visible = true;
        dynamicCloudBossSprite.visible = true;
        dynamicCloudBossSprite2.visible = true;
        skyBossSprite.visible = true;

        dynamicCloudBossSprite.x+=2;
        dynamicCloudBossSprite2.x+=2;
        if(dynamicCloudBossSprite.x > 2100) dynamicCloudBossSprite.x = -900;
        if(dynamicCloudBossSprite2.x > 2100) dynamicCloudBossSprite2.x = -900;
    }
}

function hideEverything(){
    finalAttackSprite.visible = false;
    boss.visible = false;
    ground.visible = false;
    bossSword.visible = false;
    lava.visible = false;
    blocks[0].visible = false;
    staticCloudSprite.visible = false;
    dynamicCloudSprite.visible = false;
    dynamicCloudSprite2.visible = false;
    staticCloudBossSprite.visible = false;
    dynamicCloudBossSprite.visible = false;
    dynamicCloudBossSprite2.visible = false;
    skyBossSprite.visible = false;
    player.visible = false;
    portal.visible = false;
    speech.stop();
}

function resetStage(){
    dead = false;
    health = normalHealth;
    counterDeath = 1;
    if(downPos == false && stage != 6){
        player.x = 100;
        player.y = 300;
    }
    else if(stage == 6){
        player.x = 100;
        player.y = 100;
    }
    else if(downPos == true){
        player.x = 100;
        player.y = 600;
    }
    prevX = player.x;
    prevY = player.y;
    player.image = gs("stand1.png");
    stage--;
    stage++;
    if(stage == 2){
        healthUp.x = 60;
        healthUp.y = 675;
    }
    if(stage == 3){
        box.x = 950;
        box.y = 675;
    }
    if(stage == 4){
        enemiesS[0].x = 600;
        enemiesS[1].x = 825;
        enemiesS[2].x = 300;


        enemiesS[3].x = -600;
        enemiesS[4].x = -825;
        enemiesS[5].x = -300;


        for(let i = 0; i < enemyState.length; i++){
            enemyState[i] = false;
            enemiesS[i].visible = true;
            enemiesS[i].image = gs("Ls1.png");
            enemiesS[i].y = 600;
        }
    }
    else if(stage == 5){
        open = false;
        lever.image = gs("lever.png");
        box.x = 200;
        box.y = 150;
        
        for(let i = 0; i < enemyState.length; i++){
            enemyState[i] = false;
            enemiesS[i].visible = true;
            enemiesS[i].image = gs("Ls1.png");
            enemiesS[i].y = 100;
        }
        
    }
    else if(stage == 6){
        open = false;
        lever.image = gs("lever.png");
        enemiesS[0].x = 600;
        enemiesS[1].x = 200;
        enemiesS[2].x = 300;
        for(let i = 0; i < 3; i++){
            enemiesS[i].vel.y = 0;
            enemyState[i] = false;
            enemiesS[i].visible = true;
            enemiesS[i].image = gs("Ls1.png");
            enemiesS[i].y = 600;
        }

        enemiesS[3].x = 800;
        enemiesS[4].x = 1000;
        enemiesS[5].x = 1100;
        for(let i = 3; i < 6; i++){
            enemiesS[i].vel.y = 0;
            enemyState[i] = false;
            enemiesS[i].visible = true;
            enemiesS[i].image = gs("Ls1.png");
            enemiesS[i].y = 100;
            
        }
        
    }
    
    else if(stage == 8) dStage = 0;
}

