let player;
let boss;
let speech;
let swordHitBox;
let fireballGroup, fireballData;
let ground;
let portal;
let lavaData, lavaGroup;
let healthUp;
let boxData, boxGroup;
let Ldoor, Ldoor2;
let lever, lever2;
let bossSword;
let bossSwordShadow;
let castleImage;
let laser;
let darkbox;
let tp;
var counter = 1;
var counterL = 1;
var counterJumpRight = 1;
var counterJumpLeft = 1;
var counterRA = 1; //Right Attack
var counterLA = 1; //Left Attack
var counterSR = 1; //Right slide
var counterSL = 1; //Left Slide
var counterBR = 0; //Right block
var counterBL = 3; //Left block
var counterBIR = 0; //Right idle block
var counterBIL = 2; //Left idle block
var counterCR = 0; //Right crit
var counterCL = 2; //Left crit
var counterChR = 0; //Right charge
var counterChL = 3; //Left charge
var counterChIR = 0; //Right idle charge
var counterChIL = 2; //Left idle charge
var counterH = 0; //Hurt
var counterBoom = 0;
var counterShadow = 0;
var counterDeath = 1;
var rCounterDeath = 10;
var counterBall = 1;
var counterShoot = 1;
var counterBallL = 1;
var counterShootL = 1;
var counterPortal = 1;
var counterTp = 1;
var bossMovement = 10;
var direction = true;
var jCoolDown = false;
let blocksGroup, blocksData;
let arrowListRight = [1,2,3,4,5];
let arrowListLeft = [1,2,3,4,5];
let arrowListDown = [1,2,3,4,5];
let slimesGroup, slimesData;
var swingR = false;
var swingL = false;
var swingCritR = false;
var swingCritL = false;
var blocking = false;
var charging = false;
var playerIsHurt = false;
var playerHurtDirection = "n";
var explosionSummoned = false;
var speedBuff = 0;
var damageBuff = 0;
var dead = false;
var respawned = false;
var shot = false;
var shotL = false;
var BallDirection = true;
var downPos = false;
var open = false;
var open2 = false;
var blocksPlaced = false;
var slimesSpawned = false;
var lavaPlaced = false;
var boxPlaced = false;
var turretPlaced = false;
var sliding = false;
var health = 120;  ////Testing Purpose
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
var stage = -1;//6 to test boss easier, 9 total
var bossStage = 10;
var dStage = 0;
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
let pResistance = 1;
let intelligence = 1;
let swordAttackType = 0; //0 - Nothing, 1 - light swing, 2 crit swing
var explodeX = -200; var explodeY = -200;
let strengthCounter = [];
let dashTrailGroup = []; let recallTrailGroup = [];
let ropeSprite;
let [prevXArr, prevYArr, prevDArr, savedprevXArr, savedprevYArr, savedprevDArr] = [[], [], [], [], [], []];;
let recallTimer = 0; let recallIndex = null;
let turretData, turretGroup, turretBulletData, turretBulletGroup;

let lastTapR = 0;     
let dashR = false;  
let dashL = false;    
let dashDuration = 8; 
let dashTimer = 0;
let dashCooldown = 0;
let dashCooldownTime = 60;

let standFrame, LstandFrame, crouchFrame, LcrouchFrame, slimeImageDefault, fireballImageDefaultR, fireballImageDefaultL, boom, dashTrailR, dashTrailL;
let [walkFrames, LwalkFrames, swingFrames, LswingFrames, dashFrames, LdashFrames, jumpFrames, LjumpFrames, deathFrames, fireFrames, LfireFrames, fireballFrames, LfireballFrames] = [[], [], [], [], [], [], [], [], [], [], [], [], []];
let portalSheet, tpSheet, fireBallExplosionSheet, blockSheet, blockSheetL, critSheet, critSheetL, chargeSheet, chargeSheetL;
let chargeIdleSheet, chargeIdleSheetL, hurtSheet, hurtSheetL, turretBulletSheet;
let [portalFrames, tpFrames, fireBallExplosionFrames, blockFrames, blockFramesL, critFrames, critFramesL, chargeFrames, chargeFramesL] = [[], [], [], [], [], [], [], [], []];
let [chargeIdleFrames, chargeIdleFramesL, blockIdleFrames, blockIdleFramesL, hurtFrames, hurtFramesL] = [[], [], [], [], [], []];
let label, label2, healthLabel, manaLabel, staminaLabel;
let backBoard, healthBar, manaBar, staminaBar;
let [RslimeFrames, LslimeFrames, DslimeFrames, turretBEFrames] = [[], [], [], []];
let castleGate, castleGateImage; 

let backgroundMusic;
let startingScreen1Sprite, startingScreen2Sprite, startingScreen2Sprite2, startingScreen31Sprite, startingScreen32Sprite, startingScreen1, startingScreen2, startingScreen31, startingScreen32;
var counterScreen3 = 0;

function gs(fileName){
    return "/GameSprites/" + fileName;  
}

function ga(fileName){
    return "/GameAudio/" + fileName;
}

function preload(){
    castleGateImage = loadImage(gs("Castle.png"));
    startingScreen1 = loadImage(gs("startingScreen1.png"));
    startingScreen2 = loadImage(gs("dynamicCloudBoss.png"));
    startingScreen31 = loadImage(gs("startingScreen31.png"));
    startingScreen32 = loadImage(gs("startingScreen32.png"));
    backgroundMusic = loadSound(ga("backgroundMusic.mp3"));
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

    slimeImageDefault = loadImage(gs("Ls1.png"))
    for(let i = 1; i <= 3; i++) RslimeFrames[i] = loadImage(gs("Ls" + i + ".png"));
    for(let i = 1; i <= 3; i++) LslimeFrames[i] = loadImage(gs("Rs" + i + ".png"));
    for(let i = 1; i <= 4; i++) DslimeFrames[i] = loadImage(gs("SD" + i + ".png"));;

    portalSheet = loadImage(gs("portalsheet.png"));
    tpSheet = loadImage(gs("starSheet.png"));
    fireBallExplosionSheet = loadImage(gs("fireballExplosionsheet.png"));
    blockSheet = loadImage(gs("blockSheet.png"));
    blockSheetL = loadImage(gs("blockSheetL.png"));
    critSheet = loadImage(gs("critSheet.png"));
    critSheetL = loadImage(gs("critSheetL.png"));
    chargeSheet = loadImage(gs("chargesheetR.png"));
    chargeSheetL = loadImage(gs("chargesheetL.png"));
    chargeIdleSheet = loadImage(gs("chargeIdlesheetR.png"));
    chargeIdleSheetL = loadImage(gs("chargeIdlesheetL.png"));
    hurtSheet = loadImage(gs("hurtSheet.png"));
    hurtSheetL = loadImage(gs("hurtSheetL.png"));
    fireballImageDefaultL = loadImage(gs("a1.png"));
    fireballImageDefaultR = loadImage(gs("b1.png"));

    staticCloud = loadImage(gs("staticCloud.png"));
    dynamicCloud = loadImage(gs("dynamicCloud.png"));

    skyBoss = loadImage(gs("skyBoss.png"));
    staticCloudBoss = loadImage(gs("staticCloudBoss.png"));
    dynamicCloudBoss = loadImage(gs("dynamicCloudBoss.png"));
    backgroundBoard = loadImage(gs("backgroundBoard.png"));
    dashTrailR = loadImage(gs("dashTrailR.png"));
    dashTrailL = loadImage(gs("dashTrailL.png"));
    
    dirt = loadImage(gs("ground.png"));
    idle = loadImage(gs("walk1.png"));
    stone = loadImage(gs("stone.jpeg"));
    arrow = loadImage(gs("arrow.png"));

    arrowR = loadImage(gs("arrowR.png"));
    arrowL = loadImage(gs("arrowL.png"));
    arrowD = loadImage(gs("arrowD.png"));

    laserImage = loadImage(gs("laser.png"));
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
    turretImage = loadImage(gs("turret.png"));
    turretBulletSheet = loadImage(gs("turretBulletSheet.png"));
}

function setup(){
    createCanvas(1200, 1000);
    textStyle(BOLD);

    blocksGroup = new Group();
    blocksData = [];
    stone.resize(stone.width / 10, stone.height / 10);

    slimesGroup = new Group();
    slimesData = [];
    fireballGroup = new Group();
    fireballData = [];
    lavaGroup = new Group();
    lavaData = [];
    boxGroup = new Group();
    boxData = [];
    turretGroup = new Group();
    turretData = [];
    turretBulletGroup = new Group();
    turretBulletData = [];

    cloudSetUp();
    speech = new p5.Speech();
    speech.setPitch(1);
    speech.setVoice("Aaron");

    position = createVector(width * 0.75, 20);
    velocity = createVector();
    spriteStuff();

    textSetup();
    spriteSheetSetup();
}


function draw() {
    if(kb.presses("w")) {player.x = portal.x; player.y = portal.y;};
    clear();
    background(138, 176, 226);
    fill("green");
    
    moveClouds();
    portalAnimation();
    tpAnimation();
    if(slimesGroup.length != 0 && dead == false) slimeMove2();
    if(dashTrailGroup.length != 0) dashTrailGroup.forEach(spriteT => spriteT.update());
    if(recallTrailGroup.length != 0) recallTrailGroup.forEach(spriteT => spriteT.update());
    lavaGroup.forEach(spriteL => { if(spriteL.collides(player)) health = 0; });
    turretBulletData.forEach(spriteTB => {spriteTB.update()});
    turretData.forEach(spriteT => {spriteT.update()});

    //Testing
    textSize(18);
    text(Math.round((mouseX - canvas.offsetLeft) / 0.7) + "," + Math.round((mouseY - canvas.offsetTop) / 0.7 - 40), 400, 100);
    text("X-velocity: " + player.vel.x, 400, 150);
    text("Y-velocity: " + player.vel.y, 400, 200);

    if(stage == -1){
        startingScreenAnimation();
    }
    //This is for resetting the stage
    if(kb.presses("r") && stage != 10 && stage != -1 && stage != 11) resetStage();
    
    if(respawned == true){
        player.rotation = 0;
        reverseDeathAnimation();
        if(rCounterDeath < 0.9) {
            player.image = standFrame;
            respawned = false;
            direction = true;
        }
    }
    if(stage >= 0 && stage <= 8 && dead == true) deathAnimation();
    
    if(stage == 0){
        portal.x = 1150;
        portal.y = 675;
        if(dead == false){
            normalStuff();
            level1();
        }
        if(player.overlaps(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();
            clearEverything();
        }
    }
    else if(stage == 1){
        portal.x = 1100;
        portal.y = 175;
        if(dead == false){
            normalStuff();
            level2();
        }
        if(player.overlaps(portal)){
            player.x = 100;
            player.y = 100;
            normalStageStuff();
            healthUp.x = 60;
            healthUp.y = 675;
            clearEverything();
        }
    }
    else if(stage == 2){
        portal.x = 1100;
        portal.y = 175;
        if(dead == false){
            normalStuff();
            level3();
        }
        if(player.overlaps(portal)){
            player.x = 50;
            player.y = 600;
            normalStageStuff();
            downPos = true;
            clearEverything();
        }
    }
    else if(stage == 3){
        portal.x = 1100;
        portal.y = 675; 
        if(dead == false){
            normalStuff();
            level4();
        }
        if(player.overlaps(portal)){
            player.x = 100;
            player.y = 300;
            label2.y = -100;
            normalStageStuff();
            clearEverything();
        }

    }
    else if(stage == 4){
        portal.x = 1100;
        portal.y = 675;
        if(dead == false){
            level5();
            normalStuff();
        }

        if(player.overlaps(portal)){
            player.x = 100;
            player.y = 300;
            normalStageStuff();

            Ldoor.x = 100
            Ldoor.y = 150

            player.x = 50;
            player.y = 600;
            lever.x = 1100;

            healthUp.x = 1150;
            healthUp.y = 50;
            clearEverything();
        }
    }
    else if(stage == 5){
        hideStartingScreen();
        downPos = true;
        portal.x = 25;
        portal.y = 150;
        if(dead == false){
            level6();
            normalStuff();
        }
        if(player.overlaps(portal)){
            player.x = 100;
            player.y = 0;
            normalStageStuff();
            gearSprite.x = -1000;
            healthUp.x = -1000;

            lever.x = -1000;
            Ldoor.x = 1000
            Ldoor.y = 675
            Ldoor.height = 300;
            Ldoor.width = 60;
            Ldoor.scale.y = 0.7;

            Ldoor2.height = 300;
            Ldoor2.width = 60;
            Ldoor2.scale.y = 0.7;
            clearEverything();
        }
    }
    else if(stage == 6){
        hideStartingScreen();
        downPos = false;
        portal.x = 1150;
        portal.y = 670;
        if(dead == false){
            level7();
            normalStuff();
            lever.x = 100;
            lever.y = 420;
        }
        if(player.overlaps(portal)){
            player.x = 100;
            player.y = 600;
            healthUp.x = 450;
            healthUp.y = 550;
            normalStageStuff();
            clearEverything();
        }
    }
    else if(stage == 7){
        downPos = true;
        if(dead == false){
            lever.x = 40; lever.y = 50;
            lever2.x = 430; lever2.y = 370; 
            level8();
            normalStuff();
        }
        if(player.overlaps(portal)){
            healthUp.x = -200;
            lever.x = -100;
            lever2.x = -200;
            gearSprite.x = -200;
            player.x = 100;
            player.y = 670;
            Ldoor.x = -200;
            Ldoor2.x = -300;
            normalStageStuff();
            clearEverything();
        }
    }
    else if(stage == 8){
        portal.x = 1150;
        portal.y = 90;
        if(dead == false){
            lever.x = 550; lever.y = 350;
            level9();
            normalStuff();
        }
        if(player.overlaps(portal)){
            lever.x = -100;
            gearSprite.x = -200;
            player.x = 100;
            player.y = 600;
            normalStageStuff();
            clearEverything();
        }
    }
    else if(stage == bossStage-1){
        backgroundMusic.stop();
        castleImage.visible = true;
        resizeCanvas(1100,800);
        downPos = true;
        if(dead == false){
            Ldoor.x = -100;
            Ldoor2.x = -100;
            portal.visible = false;
            ground.visible = false;
            castle();
            normalStuff();
            blocksPlaced = false;
        }
        else{
            deathAnimation();
        }
        textSprite("Press x to continue with the dialogue.", 575, 200, label2);
        textSprite("Press j to skip dialogue.", 570, 175, label);
    }
    else if(stage == bossStage){
        label.y = -100;
        label2.y = -100;
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
    else if(stage == 11){
        background("Yellow");
        text("Congratulations! You win!.", 500,500);
        hideEverything();
    }

    text("Stage: " + stage, 100, 50);
    text("Blocks: " + blocksGroup.length, 100, 80);
    text("Slimes: " + slimesGroup.length, 100, 110);
    text("Bullets: " + turretBulletGroup.length, 100, 130);
}

function clearEverything(){
    clearTurret();
    clearTurretBullet();
    clearBlocks();
    clearSlimes();
    clearLava();
    clearBox();
    clearDashTrails();
}

function mousePressed() {
    if(stage == -1){
        userStartAudio(); 
        backgroundMusic.loop();
        backgroundMusic.setVolume(0);
        stage = 0;
        hideStartingScreen();
    }
}


function spriteStuff(){   
    castleImage = new Sprite(throneroom, 600,520,10,10);
    castleImage.collider = "none";
    castleImage.visible = false;

    bgBoard = new Sprite(backgroundBoard, 600, 945, 200, 800);
    bgBoard.scale.x = 2;
    bgBoard.scale.y = 0.95;
    bgBoard.collider = "none";

    healthBar = new Sprite(150, 945, 50, 25);
    healthBar.colour = "red";
    healthBar.collider = "none";
    manaBar = new Sprite(530, 945, 50, 25);
    manaBar.colour = "blue";
    manaBar.collider = "none";
    staminaBar = new Sprite(930, 945, 50, 25);
    staminaBar.colour = "yellow";
    staminaBar.collider = "none";

    castleGate = new Sprite(castleGateImage, 1100, 550, 0, 0);
    castleGate.collider = "none";
    castleGate.visible = false;

    gearSprite = new Sprite(gear,-550,300,50,50); 
    gearSprite.debug = false;
    gearSprite.scale.x = 0.3;
    gearSprite.scale.y = 0.3;
    gearSprite.collider = "static";

    swordHitBox = new Sprite(300,300, 40,60);
    swordHitBox.debug = true;
    swordHitBox.collider = "none";
    
    tp = new Sprite(100,200,50,50);
    tp.scale.x = 0.15;
    tp.scale.y = 0.15;
    tp.collider = "none";

    boom = new Sprite(-200, -200, 80, 80);
    boom.collider = "none";

    player = new Sprite(idle, 100,200,50,50);
    player.debug = true; 
    player.collider = "dynamic";

    boss = new Sprite(bossImage, -100,-100,20,20);
    boss.scale.x = 0.2;
    boss.scale.y = 0.2;
    boss.visible = false;
    boss.collider = "static";

    ground = new Sprite(dirt, 600,800,1200,100);
    ground.collider = "static";
    ground.debug = false;

    resizeThings();
    portal = new Sprite(portal2, 200,200,120,120);
    portal.debug = true;
    portal.scale = 0.35;
    portal.collider = "none";

    healthUp = new Sprite(hpUp, -200,200,750,750);
    healthUp.scale.x = 0.03;
    healthUp.scale.y = 0.03;
    healthUp.debug = false;
    healthUp.collider = "static";
    healthUp.x = -100;

    Ldoor = new Sprite(door, -200,600,200,200);
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

    Ldoor2 = new Sprite(door, -200,600,200,200);
    Ldoor2.scale.x = 0.5;
    Ldoor2.scale.y = 0.5;
    Ldoor2.debug = false;
    Ldoor2.collider = "static";
    Ldoor2.x = -400;

    lever2 = new Sprite(leverImage, -1100,700,400,400);
    lever2.scale.x = 0.1;
    lever2.scale.y = 0.1;
    lever2.debug = false;
    lever2.collider = "static";
    
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

    for(let i = 0; i < 6; i++){
        arrowListDown[i] = new Sprite(arrowD, -1000,100,20,275);
        arrowListDown[i].debug = false;
        arrowListDown[i].collider = "static";
        arrowListDown[i].visible = false;

        arrowListRight[i] = new Sprite(arrowR, 1400,100,275,20);
        arrowListRight[i].debug = false;
        arrowListRight[i].collider = "dynamic";
        arrowListRight[i].visible = false;

        arrowListLeft[i] = new Sprite(arrowL, 1400,100,275,20);
        arrowListLeft[i].debug = false;
        arrowListLeft[i].collider = "dynamic";
        arrowListLeft[i].visible = false;
    }

    startingScreen1Sprite = new Sprite(startingScreen1, 600, 500, 50, 50);
    startingScreen1Sprite.visible = true;
    startingScreen1Sprite.collider = "none";
    startingScreen1Sprite.image.scale.x = 1200 / startingScreen1Sprite.image.width;
    startingScreen1Sprite.image.scale.y = 1000 / startingScreen1Sprite.image.height;

    startingScreen2Sprite = new Sprite(dynamicCloudBoss, 600, 500, 50, 50);
    startingScreen2Sprite.visible = true;
    startingScreen2Sprite.collider = "none";
    startingScreen2Sprite.width = 400;
    startingScreen2Sprite.scale.x = 2.7;
    startingScreen2Sprite.scale.y = 2.2;
    startingScreen2Sprite2 = new Sprite(dynamicCloudBoss, -900, 500, 50, 50);
    startingScreen2Sprite2.visible = true;
    startingScreen2Sprite2.collider = "none";
    startingScreen2Sprite2.width = 400;
    startingScreen2Sprite2.scale.x = 2.7;
    startingScreen2Sprite2.scale.y = 2.2;

    startingScreen31Sprite = new Sprite(startingScreen31, 600, 510, 50, 50);
    startingScreen31Sprite.image.scale.x = 900 / startingScreen31Sprite.image.width;
    startingScreen31Sprite.image.scale.y = 750 / startingScreen31Sprite.image.height;
    startingScreen31Sprite.collider = "none";
    startingScreen31Sprite.visible = false;
    startingScreen32Sprite = new Sprite(startingScreen32, 601, 509, 50 ,50);
    startingScreen32Sprite.image.scale.x = 900 / startingScreen32Sprite.image.width;
    startingScreen32Sprite.image.scale.y = 750 / startingScreen32Sprite.image.height;
    startingScreen32Sprite.collider = "none";
    startingScreen32Sprite.visible = false;
}


function basicMovement(){
    if(player.collides(laser)) health-=15;
    
    if(health <= 0){
        dead = true;
        gotten = false;
    }
    player.scale.x = 0.2;
    player.scale.y = 0.2;
    
    handleDash();
    
    if(kb.pressing("ArrowRight") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false){
        player.x = player.x + 10 + speedBuff;
        counter+=0.1;
        player.image = walkFrames[Math.round(counter)];
        direction = true;

        if(counter > 6) counter = 1;
    }
    else if(direction == true && player.vel.y == 0 && respawned == false) player.image = standFrame;
    
    if(kb.pressing("ArrowLeft") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false){
        player.x = player.x - 10 - speedBuff;
        counterL+=0.1;
        player.image = LwalkFrames[Math.round(counterL)];
        direction = false;

        if(counterL > 6) counterL = 1;
    }
    else if(direction == false && player.vel.y == 0 && respawned == false) player.image = LstandFrame;
        
    if(kb.pressing("ArrowDown") && direction == true && kb.pressing("f") == false && kb.pressing("s") == false){
        player.image = crouchFrame;
        player.height = 240;
        
        if(kb.pressing("ArrowRight") && stamina >= 4 && kb.pressing("f") == false && kb.pressing("s") == false){
            player.image = dashFrames[1];
            player.x = player.x + 15 + speedBuff;
            player.height = 200;
            counterSR+=0.1;
            player.image = dashFrames[Math.round(counterSR)];
            stamina -= 1;
            sliding = true;
            if(counterSR > 2) counterSR = 1;
        }
    }
    else if(direction == true && kb.pressing("ArrowDown") == false){
        player.height = 310;
        sliding = false;
    } 

    if(kb.pressing("ArrowDown") && direction == false && kb.pressing("f") == false && kb.pressing("s") == false){
        player.image = LcrouchFrame;
        player.height = 240;
        
        if(kb.pressing("ArrowLeft") && stamina >= 4 && kb.pressing("f") == false && kb.pressing("s") == false){
            player.image = LdashFrames[1];
            player.x = player.x - 15 - speedBuff;
            player.height = 200;
            counterSL+=0.1;
            player.image = LdashFrames[Math.round(counterSL)];
            stamina -= 1;
            sliding = true;
            if(counterSL > 2) counterSL = 1;
        }
    }
    else if(direction == false && kb.pressing("ArrowDown") == false){
        player.height = 310;
        sliding = false;
    }
    
    //player.vel.x = 0;
    barMovement();
    
    let d = Math.sqrt(Math.pow(player.x - lever.x, 2) + Math.pow(player.y - lever.y, 2));

    if(kb.presses("e") && d < 50) open = !open;
    
    if(open == true) lever.image = gs("lever2.png");
    
    if(open == false) lever.image = gs("lever.png");

    d2 = Math.sqrt(Math.pow(player.x - lever2.x, 2) + Math.pow(player.y - lever2.y, 2));

    if(kb.presses("e") && d2 < 50) open2 = !open2;
    
    if(open2 == true) lever2.image = gs("lever2.png");
    
    if(open2 == false) lever2.image = gs("lever.png");

}

function resistance(){
    if(stage != 9){
        if(player.x > 1175 && sliding == false){
            player.x -= (10 + speedBuff);
        }
        if(player.x < 25 && sliding == false){
            player.x += (10 + speedBuff);
        }
        if(player.x > 1175 && sliding == true){
            player.x -= (15 + speedBuff);
        }
        if(player.x < 25 && sliding == true){
            player.x += (15 + speedBuff);
        }
   }
   else{
        if(player.x > 1000 && sliding == false){
            player.x -= (10 + speedBuff);
        }
        if(player.x < 100 && sliding == false){
            player.x += (10 + speedBuff);
        }
        if(player.x > 1175 && sliding == true){
            player.x -= (15 + speedBuff);
        }
        if(player.x < 25 && sliding == true){
            player.x += (15 + speedBuff);
        }
    }
}

function pjump(){
    player.rotation = 0;

    if(player.collides(ground)) player.vel.y = 0;
    else if(isHooked == false) player.vel.y = player.vel.y+2;
    
    if((kb.pressing("s") == false && kb.pressing("f") == false && kb.pressing("ArrowUp") && (player.collides(ground) || player.collides(gearSprite))) && stamina >= 20){
        player.vel.y = -20;
        stamina -= 20;
        jumpAni();
    }

    blocksGroup.forEach(spriteB => {
        //Gotta fix this part
        if(player.collides(spriteB) && spriteB.vel.y != 0){
            let playerBottom = player.y + player.height / 2;
            let blockTop = spriteB.y - spriteB.height / 2;
            if (abs(playerBottom - blockTop) < 5 && player.vel.y >= 0) {
                player.y += spriteB.vel.y;  

                if (kb.pressing("ArrowUp") && stamina >= 20) {
                    player.vel.y = -20;
                    jumpAni();
                    stamina -= 20;
                } else player.vel.y = 0;
    
            }
        }
        else if(player.collides(spriteB)){
            if(kb.pressing("ArrowUp") && stamina >= 20 && blocking == false && charging == false){ 
                player.vel.y = -20; 
                jumpAni(); 
                stamina -= 20; 
            } else player.vel.y = 0;
        }
    });
}

function resizeThings(){
    castleGate.scale = 3;
    ground.scale.x = 2.5;
    ground.scale.y = 2.5;
    ground.height = 60;

    player.height = 310;
    player.width = 180;
    gearSprite.x = -100;
}

function moveShadow(){
    counterShadow++;
    
    if(counterShadow > 200){
        prevX = player.x;
        prevY = player.y;
        counterShadow = 0;
        prevXArr = []; prevYArr = []; prevDArr = []; savedprevXArr = []; savedprevYArr = []; savedprevDArr = [];
    }
    if(counterShadow % 15 == 0){
        prevXArr.push(player.x);
        prevYArr.push(player.y);
        prevDArr.push(direction);
    }
    fill("blue");
    tp.x = prevX;
    tp.y = prevY;

    if(kb.presses("d") && mana > 50 && prevXArr.length > 0){
        savedprevXArr = []; savedprevYArr = []; savedprevDArr = [];
        player.x = prevX;
        player.y = prevY;
        if(health <= maxHealth - 10) health+=10;
        else health = maxHealth;
        mana-=50;
        recallIndex = prevXArr.length - 1;
        recallTimer = 0;

        for(let i = 0; i < prevXArr.length; i++){
            savedprevXArr.push(prevXArr[i]);
            savedprevYArr.push(prevYArr[i]);
            savedprevDArr.push(prevDArr[i]);
        }
    }
    if(recallIndex !== null){
        recallTimer++;
        if(recallTimer % 5 == 0){
            if(recallIndex >= 0 && recallIndex < savedprevYArr.length){
                if(savedprevDArr[recallIndex] == true) recallTrailGroup.push(new dashTrail("r", savedprevXArr[recallIndex], savedprevYArr[recallIndex]));
                else recallTrailGroup.push(new dashTrail("l", savedprevXArr[recallIndex], savedprevYArr[recallIndex]));
                recallIndex--;
            }
            else recallIndex = null;
        }
    }
}


function swordThingR(){
    if(kb.pressing("s") && kb.presses("a") && direction == true && stamina >= 80 && mana >= 90 && swingR == false && kb.pressing("f") == false){
        swingCritR = true;
        stamina -= 80;
        mana -= 90;
        swordHitBox.width = 60;
    }
    if(swingCritR == true){
        swordAttackType = 2;
        counterCR += 0.1;
        player.image = critFrames[Math.round(counterCR)];
        player.image.scale = 1.7;

        if(counterCR > 2){
            swordAttackType = 0;
            counterCR = 0;
            swingCritR = false;
            player.image = standFrame;
            swordHitBox.width = 40;
        }
    }

    if(kb.pressing("s") && kb.presses("a") && direction == false && stamina >= 80 && mana >= 90 && swingL == false && kb.pressing("f") == false){
        swingCritL = true;
        stamina -= 80;
        mana -= 90;
        swordHitBox.width = 60;
    }
    if(swingCritL == true){
        swordAttackType = 2;
        counterCL -= 0.1;
        player.image = critFramesL[Math.round(counterCL)];
        player.image.scale = 1.7;

        if(counterCL < 0){
            swordAttackType = 0;
            counterCL = 2;
            swingCritL = false;
            player.image = LstandFrame;
            swordHitBox.width = 40;
        }
    }

    if(kb.presses("a") && direction == true && stamina >= 20 && kb.pressing("f") == false && swingCritR == false && swingR == false){
        swingR = true;
        stamina -= 20;
    }
    if(swingR == true){
        swordHitBox.collider = "static";
        swordAttackType = 1;
        counterRA += 0.1;
        player.image = swingFrames[Math.round(counterRA)];

        if(counterRA > 4){
            swordHitBox.collider = "none";
            swordAttackType = 0;
            counterRA = 1;
            swingR = false;
            player.image = standFrame;
        }
    }

    if(kb.presses("a") && direction == false && stamina >= 20 && kb.pressing("f") == false && swingCritL == false && swingL == false){
        swingL = true;
        stamina -= 20;
    }
    if(swingL == true){
        swordHitBox.collider = "static";
        swordAttackType = 1;
        counterLA += 0.1;
        player.image = LswingFrames[Math.round(counterLA)];

        if(counterLA > 4){
            swordHitBox.collider = "none";
            swordAttackType = 0;
            counterLA = 1;
            swingL = false;
            player.image = LstandFrame;
        }
    }
    
    if(direction == true){
        swordHitBox.x = player.x+40;
    }
    else if(direction == false){
        swordHitBox.x = player.x-40;
    }
    swordHitBox.y = player.y;
    
    if(kb.pressing("f") && direction == true && stamina >= 20 && charging == false){
        stamina -= 1;
        if(counterBR < 3){
            counterBR += 0.1;
            player.image = blockFrames[Math.round(counterBR)];
            player.image.scale = 2.9;
        }
        else{
            counterBIR += 0.1
            player.image = blockIdleFrames[Math.round(counterBIR)];
            if(counterBIR > 2) counterBIR = 0;
            player.image.scale = 2.9;
        }
        blocking = true;
        pResistance = 0.5;
    }
    else if(blocking == true && direction == true){
        counterBR = 0;
        player.image = standFrame;
        pResistance = 1;
        blocking = false;
    }

    if(kb.pressing("f") && direction == false && stamina >= 20 && charging == false){
        stamina -= 1;
        if(counterBL > 0){
            counterBL -= 0.1;
            player.image = blockFramesL[Math.round(counterBL)];
            player.image.scale = 1.85;
        }
        else{
            counterBIL -= 0.1;
            player.image = blockIdleFramesL[Math.round(counterBIL)];
            if(counterBIL < 0) counterBIL = 2;
            player.image.scale = 1.85;
        }
        blocking = true;
        pResistance = 0.5;
    }
    else if (blocking == true && direction == false){
        counterBL = 3;
        player.image = LstandFrame;
        pResistance = 1;
        blocking = false;
    }

    if(kb.pressing("s") && direction == true && swingCritR == false && swingR == false && blocking == false){
        if(stamina < 100) stamina++;
        if(mana < 100) mana++;
        if(counterChR < 3) {
            counterChR += 0.1;
            player.image = chargeFrames[Math.round(counterChR)];
            player.image.scale = 2;
            player.image.offset.y = -40;
        }
        else{
            counterChIR += 0.2;
            player.image = chargeIdleFrames[Math.round(counterChIR)];
            if(counterChIR > 2) counterChIR = 0;
            player.image.scale = 1.7;
            player.image.offset.y = -50;
        }
        charging = true;
    }
    else if(charging == true && direction == true){
        counterChR = 0;
        player.image = standFrame;
        charging = false;
    }

    if(kb.pressing("s") && direction == false && swingCritL == false && swingL == false && blocking == false){
        if(stamina < 100) stamina++;
        if(mana < 100) mana++;
        if(counterChL > 0){
            counterChL -= 0.1;
            player.image = chargeFramesL[Math.round(counterChL)];
            player.image.scale = 2;
            player.image.offset.y = -40;
        }
        else{
            counterChIL -= 0.2;
            player.image = chargeIdleFramesL[Math.round(counterChIL)];
            if(counterChIL < 0) counterChIL = 2;
            player.image.scale = 1.7;
            player.image.offset.y = -50;
        }
        charging = true;
    }
    else if (charging == true && direction == false){
        counterChL = 3;
        player.image = LstandFrame;
        charging = false;
    }
    
}


function normalStageStuff(){
    speedBuff = 0;
    damageBuff = 0;
    strengthCounter.splice(0);
    prevXArr = []; prevYArr = []; prevDArr = []; savedprevXArr = []; savedprevYArr = []; savedprevDArr = [];
    if(gotten == true){
        gotten = false;
        maxHealth = normalHealth + 10;
    }
    prevX = player.x;
    prevY = player.y;
    stage++;
    player.image = standFrame;
    normalHealth = maxHealth;
    health = maxHealth;
    open = false;
    open2 = false;
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
    player.vel.x = 0;
    strengthCounter.length = 0;
    backgroundMusic.pause();
}

function reverseDeathAnimation(){
    if(rCounterDeath > 0.9){
        rCounterDeath-=0.25;
        player.image = deathFrames[Math.round(rCounterDeath)]; 
    }
}

function fireBallAttack(){
    if(kb.presses("q") && direction == true && mana >= 50 && !kb.pressing("f") && !kb.pressing("s") && !kb.pressing("ArrowDown") && !kb.pressing("ArrowUp")){
        spawnFireball(player.x + 10, player.y, "r", 15);
        mana -= 50;
        shot = true;
        counterShoot = 1;
    }
    
    if(shot){
        counterShoot += 0.2;
        player.image = fireFrames[Math.round(counterShoot)];
        if(counterShoot > 5.4){
            shot = false;
            player.image = standFrame;
        }
    }

    if(kb.presses("q") && direction == false && mana >= 50 && !kb.pressing("f") && !kb.pressing("s") && !kb.pressing("ArrowDown") && !kb.pressing("ArrowUp")){
        spawnFireball(player.x - 10, player.y, "l", 15);
        mana -= 50;
        shotL = true;
        counterShootL = 1;
    }
    
    if(shotL){
        counterShootL += 0.2;
        player.image = LfireFrames[Math.round(counterShootL)]; 
        if(counterShootL > 5.4){
            shotL = false;
            player.image = LstandFrame;
        }
    }
    fireballGroup.forEach(spriteFB => {
        let index = fireballGroup.indexOf(spriteFB); 
        fireballData[index].updateAnimation();
        fireballData[index].checkIfExist();
    });

    if(kb.presses("q") && mana >= 90 && !kb.pressing("f") && !kb.pressing("s") && !kb.pressing("ArrowDown") && kb.pressing("ArrowUp")){
        mana -= 90;
        health -= 20;
        player.vel.y = -25;
        playerIsHurt = true;
        counterH = 0;
        playerHurtDirection = "n";
        counterBoom = 0;
        explodeX = player.x;
        explodeY = player.y;
        explosionSummoned = true;
    }

    if(kb.presses("q") && mana >= 100 && !kb.pressing("f") && !kb.pressing("s") && kb.pressing("ArrowDown") && !kb.pressing("ArrowUp")){
        mana -= 50;
        health -= 30;
        playerIsHurt = true;
        counterH = 0;
        playerHurtDirection = "n";
        counterBoom = 0;
        explodeX = player.x;
        explodeY = player.y;
        explosionSummoned = true;
        buffStrength();
    }
}


function normalStuff(){
    
    if(respawned == false) {
        pjump();
        basicMovement();
        swordThingR();
        fireBallAttack();
        playerHurtAnimation(playerHurtDirection);
        explosionAnimation(explodeX, explodeY);
        updateStrengthBuffs();
    }
    resistance();
    moveShadow();
}

function level1(){
    if(blocksPlaced == false){
        spawnBlock(600, 680, 180, 120, "None", 0);
        blocksPlaced = true;
    }
    textSprite("Welcome. Arrows keys to move. D to teleport to your previous location. Previous location is shown by the red star.", 600, 500, label);
}

function level2(){
    if(blocksPlaced == false){
        spawnBlock(400, 570, 150, 250, "None", 0);
        spawnBlock(900, 480, 70, 60, "None", 0);
        spawnBlock(1050, 350, 70, 60, "None", 0);
        spawnBlock(1050, 630, 70, 60, "None", 0);
        blocksPlaced = true;
    }
    textSprite("Hold down arrow and/or right or left to slide. A to swing your sword.", 600, 400, label);
}


function level3(){
    if(lavaPlaced == false){
        spawnLava(600, 780, 600, 150);
        lavaPlaced = true;
    }
    
    gearSprite.x = 500;
    gearSprite.y = 50;
    hookThing();
    
    if(player.collides(healthUp)){
        healthUp.x = -100;
        health += 10;
        gotten = true;
    }
    if(blocksPlaced == false){
        spawnBlock(120, 350, 300, 230, "None", 0);
        spawnBlock(900, 350, 300, 230, "None", 0);
        blocksPlaced = true;
    }
    textSprite("Press space when near a gear to hook onto it. R to respawn if you die. You may appear invisible once you respawn.", 600, 600, label);
}


function level4(){
    if(boxPlaced == false){
        spawnBox(950, 700, 125, 95);
        boxPlaced = true;
    }
    gearSprite.x = -500;
    healthUp.x = -500;

    textSprite("Press q to shoot a fireball. Fireballs can burn blocks of wood.", 930, 300, label);
    textSprite("Bullets hurt. You can destroy them with your sword or fireballs.", 930, 330, label2);

    if(blocksPlaced == false){
        spawnBlock(160, 750, 70, 70, "n", 5); //Moving one
        spawnBlock(400, 400, 300, 650, "None", 0);
        spawnBlock(1050, 530, 300, 240, "None", 0); 
        blocksPlaced = true;
    }

    if(turretPlaced == false){
        spawnTurret(550, 670, 80, "e");
        turretPlaced = true;
    }

    if(blocksGroup[0].y < 0) blocksGroup[0].y = 750;
}

function slimeMove2(){
    slimesGroup.forEach(spriteS => {
        let index = slimesGroup.indexOf(spriteS); 
        slimesData[index].update();
        if(slimesData[index].SlimeDead == false){
            
            text("Y-vel: " + spriteS.vel.y, 150, 100);
            let d = Math.sqrt(Math.pow(spriteS.x - player.x, 2) + Math.pow(spriteS.y - player.y, 2));

            if(spriteS.x < player.x && d < 200 && spriteS.visible == true){
                spriteS.x += slimesData[index].ESpeed;
                slimesData[index].updateAnimation("right");
            }
            
            if(spriteS.x > player.x && d < 200 && spriteS.visible == true){
                spriteS.x -= slimesData[index].ESpeed;
                slimesData[index].updateAnimation("left");  
            }
             
            spriteS.rotation = 0;
            if(swordHitBox.overlapping(spriteS) && swordAttackType == 1 && slimesData[index].canBeHit == true) {
                slimesData[index].EHealth -= (100 + damageBuff);
                slimesData[index].hit = true;
                if(direction == true) slimesData[index].knockback("r");
                if(direction == false) slimesData[index].knockback("l")
            }

            if(swordHitBox.overlapping(spriteS) && swordAttackType == 2 && slimesData[index].canBeHit == true) {
                slimesData[index].EHealth -= (200 + damageBuff);
                slimesData[index].hit = true;
                if(direction == true) slimesData[index].knockback("r");
                if(direction == false) slimesData[index].knockback("l")
            }
            lavaGroup.forEach(spriteL => { if(spriteL.collides(spriteS)) slimesData[index].EHealth = 0; });

            if(slimesData[index].EHealth <= 0) slimesData[index].SlimeDead = true;
 
            if(spriteS.overlapping(player) && spriteS.visible == true){
                if (!playerIsHurt) {
                    health -= 4 * pResistance;
                    playerIsHurt = true;
                    counterH = 0;
            
                    if(player.x < spriteS.x){
                        playerHurtDirection = "r";
                    }
                    else{
                        playerHurtDirection = "l";
                    }
                }
            }
            
            if(slimesData[index].upKnockback == false){
                /*
                blocksGroup.forEach(spriteB => {
                    if(spriteS.collides(spriteB)) spriteS.vel.y = 0;
                    else if(spriteS.y < 1150) spriteS.vel.y += 2;
                });

                if(spriteS.collides(ground)) spriteS.vel.y = 0;
                else if(spriteS.y < 1150) spriteS.vel.y += 2;
                */
                spriteS.vel.y += 2;
                spriteS.collides(blocksGroup);
                spriteS.collides(ground);
            }
        }
        else{
            spriteS.vel.y *= 0.8;
            spriteS.collider = "none;"
            slimesData[index].DeathCounter += 0.1;
            spriteS.image = DslimeFrames[Math.round(slimesData[index].DeathCounter)];
            spriteS.image.scale.x = 80 / slimeImageDefault.width;
            spriteS.image.scale.y = 80 / slimeImageDefault.height;

            if(slimesData[index].DeathCounter > 4){
                spriteS.visible = false;
                slimesGroup.remove(spriteS);
                slimesData.splice(index, 1);
            }
        }
    });
   
}

function level5(){
    textSprite("Try hitting the slimes with your fireballs or sword.", 650, 500, label);
    if(slimesSpawned == false){
        spawnSlime(300, 650, 2.5);
        spawnSlime(500, 570, 2.5);
        spawnSlime(820, 650, 2.5);
        slimesSpawned = true;
    }
   
    if(blocksPlaced == false){
        spawnBlock(500, 700, 150, 110, "None", 0);
        blocksPlaced = true;
    }
}


function level6(){
    textSprite("Press e to interact with levers.", 1000, 100, label);
    if(open == true) Ldoor.x = -100;
    else Ldoor.x = 100;
    
    gearSprite.x = 250;
    gearSprite.y = 500;
    hookThing();

    if(boxPlaced == false){
        spawnBox(200, 150, 125, 95);
        boxPlaced = true;
    }

    if(lavaPlaced == false){
        spawnLava(450, 780, 600, 150);
        lavaPlaced = true;
    }
    
    if(slimesSpawned == false){
        spawnSlime(500, 120, 2.5);
        slimesSpawned = true;
    }

    if(player.collides(healthUp)){
        healthUp.x = -100;
        health += 10;
        gotten = true;
    }

    if(blocksPlaced == false){
        spawnBlock(500, 700, 150, 110, "None", 0);
        spawnBlock(1000, 750, 70, 40, "n", 5); //Moving one
        spawnBlock(450, 300, 900, 225, "None", 0);
        spawnBlock(100, 15, 300, 200, "None", 0);
        spawnBlock(1190, 150, 40, 300, "None");
        blocksPlaced = true;
    }

    if(turretPlaced == false){
        spawnTurret(1190, 150, 80, "w");
        turretPlaced = true;
    }

    if(blocksGroup[1].y < 0) blocksGroup[1].y = 750;
}


function level7(){
    if(open == true) Ldoor.x = -100;
    else Ldoor.x = 1000;
    
    if(lavaPlaced == false){
        spawnLava(100, 780, 300, 150);
        lavaPlaced = true;
    }

    if(slimesSpawned == false){
        spawnSlime(800, 50, 2.5);
        spawnSlime(1000, 330, 2.5);
        spawnSlime(1100, 330, 2.5);
        spawnSlime(800, 600, 2.5);
        spawnSlime(500, 600, 2.5);
        spawnSlime(500, 600, 2.5);
        slimesSpawned = true;
    }

    if(blocksPlaced == false){
        spawnBlock(150, 210, 300, 220, "None", 0);
        spawnBlock(450, 240, 300, 220, "None", 0); 
        spawnBlock(750, 250, 300, 220, "None", 0);
        spawnBlock(20, 560, 300, 220, "None", 0);
        spawnBlock(450, 500, 300, 220, "None", 0);
        spawnBlock(900, 510, 600, 220, "None", 0);//510
        blocksPlaced = true;
    }
  
    if(turretPlaced == false){
        spawnTurret(15, 700, 80, "e");
        turretPlaced = true;
    }  
}

function level8(){
    if(boxPlaced == false){
        spawnBox(700, 370, 125, 95);
        spawnBox(680, 590, 125, 95);
        boxPlaced = true;
    }
    if(player.collides(healthUp)){
        healthUp.x = -100;
        health += 10;
        gotten = true;
    }
    gearSprite.x = 600; 
    gearSprite.y = 0;
    hookThing();
    if(open == true) Ldoor.x = -100;
    else {Ldoor.x = 1015; Ldoor.y = 205;}
    if(open2 == true) Ldoor2.x = -100;
    else {Ldoor2.x = 1015; Ldoor2.y = 375;}
    if(lavaPlaced == false){
        spawnLava(700, 780, 1100, 150);
        spawnLava(600, 260, 400, 150);
        lavaPlaced = true;
    }
       
    if(slimesSpawned == false){
        spawnSlime(240, 350, 2.5);
        spawnSlime(250, 70, 2.5);
        spawnSlime(370, 20, 2.5);
        spawnSlime(550, 370, 2.5);
        slimesSpawned = true;
    }
    
    if(blocksPlaced == false){
        spawnBlock(850, 715, 120, 30, "w", 2); //Moving one

        spawnBlock(370, 400, 70, 700, "None", 0);
        spawnBlock(230, 650, 70, 50, "None", 0);
        spawnBlock(60, 500, 70, 50, "None", 0); 
        spawnBlock(250, 420, 100, 50, "None", 0);
        spawnBlock(50, 300, 70, 50, "None", 0);
        spawnBlock(230, 180, 100, 50, "None", 0);
        spawnBlock(60, 100, 90, 50, "None", 0);

        spawnBlock(600, 300, 420, 50, "None", 0);//
        spawnBlock(660, 420, 520, 50, "None", 0);//
        spawnBlock(820, 215, 70, 220, "None", 0);
        spawnBlock(950, 370, 70, 550, "None", 0);
        spawnBlock(1080, 170, 70, 1000, "None", 0);
        spawnBlock(1080, 715, 180, 30, "None", 0);

        spawnBlock(680, 650, 100, 30, "None", 0);
        blocksPlaced = true;
    }
    
    if(blocksGroup[0].x < 680 || blocksGroup[0].x > 920) blocksGroup[0].vel.x *= -1;

    if(turretPlaced == false){
        spawnTurret(1065, 70, 80, "w");
        turretPlaced = true;
    }
}

function level9(){
    if(boxPlaced == false){
        spawnBox(900, 685, 125, 95);
        spawnBox(500, 100, 125, 95);
        boxPlaced = true;
    }
    gearSprite.x = 180; 
    gearSprite.y = 0;
    hookThing();
    if(open == true) Ldoor.x = -100;
    else {Ldoor.x = 1060; Ldoor.y = 100;}
    if(lavaPlaced == false){
        spawnLava(390, 570, 1100, 130);
        spawnLava(680, 240, 1100, 130);
        lavaPlaced = true;
    }
    if(slimesSpawned == false){
        spawnSlime(500, 670, 2.5);
        spawnSlime(600, 670, 2.5);
        spawnSlime(520, 470, 2.5);
        spawnSlime(600, 340, 2.5);
        slimesSpawned = true;
    }
    
    if(blocksPlaced == false){
        spawnBlock(260, 480, 120, 30, "w", 2); //Moving one
        spawnBlock(300, 160, 120, 30, "e", 2); //Moving one
        spawnBlock(630, 160, 120, 30, "w", 2); //Moving one

        spawnBlock(390, 590, 1120, 90, "None", 0);
        spawnBlock(1165, 500, 90, 500, "None", 0);
        spawnBlock(680, 260, 1120, 100, "None", 0); 

        spawnBlock(1120, 650, 70, 30, "None", 0); 
        spawnBlock(980, 600, 60, 30, "None", 0); 
        spawnBlock(1100, 500, 70, 30, "None", 0); 
        spawnBlock(800, 480, 70, 30, "None", 0); 
        spawnBlock(700, 480, 70, 30, "None", 0); 
        spawnBlock(920, 450, 70, 30, "None", 0); 
        spawnBlock(520, 490, 140, 30, "None", 0); 
        spawnBlock(600, 380, 140, 10, "None", 0); 

        spawnBlock(1130, 160, 200, 30, "None", 0); 
        spawnBlock(1130, 40, 200, 30, "None", 0); 

        spawnBlock(120, 430, 100, 30, "None", 0); 
        spawnBlock(15, 350, 100, 30, "None", 0); 
        spawnBlock(120, 250, 100, 30, "None", 0); 
        spawnBlock(0, 150, 70, 30, "None", 0); 

        blocksPlaced = true;
    }
    
    if(blocksGroup[0].x < 190 || blocksGroup[0].x > 450) blocksGroup[0].vel.x *= -1;
    if(blocksGroup[1].x < 200 || blocksGroup[1].x > 440) blocksGroup[1].vel.x *= -1;
    if(blocksGroup[2].x < 480 || blocksGroup[2].x > 970) blocksGroup[2].vel.x *= -1;

    if(turretPlaced == false){
        spawnTurret(1135, 680, 80, "w");
        spawnTurret(10, 400, 80, "e");
        turretPlaced = true;
    }
}

function level10(){
    portal.x = 1100;
    castleGate.visible = true;
    lever.x = -300;
}


function castle(){
    castleGate.visible = false;
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
    else if(dStage == 3 && kb.presses("x")) message("My story? You want to know how I ended up like this? Well, it all started on that one fateful day. He, told all us angels not to interfere with the humans. At first, we listened to him because the humans weren’t struggling. However, everything changed when He had a bad day. Out of fury, he summoned storms and tornados to destroy the humans even if they didn’t do anything. As we watched, hundreds perished while his anger only grew. I won’t ever understand his reasoning. However, I couldn’t stand by and watch the humans suffer. Against his orders, I flew down to Earth and used my powers to protect the withering humans. With my help, they survived his wrath. When the storms ended, I returned to heaven, and He confronted me personally, piercing me with his harsh light. After an eternity, he banished me from heaven and now I reside here. Never to return to my home, rotting away on this planet. Was this what I deserved for my kindness?");
    else if(dStage == 4 && kb.presses("x")) {speech.setPitch(0.6);
    message("He sent you to punish me, correct?")}
    else if(dStage == 5 && kb.presses("x")) message("After everything that's happened, apparently, I'm still in the wrong.");
    else if(dStage == 6 && kb.presses("x")) message("Well, I don't plan on losing easily. Let's take this outside");
    else if(dStage == 7){
        stage = bossStage;
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
    if(bossTimer < 10000) bossTimer += 1;
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
            health -= 5 * pResistance;
        }
    }
    else if(bossTimer > 1000 && bossTimer < 2500){
        bossSword.visible = false;
        bossSword.x = -200;
        gearTimer ++;
        
        if(gearTimer == 50){
            spawnBlock(Math.round(Math.random() * 10 * 100), 750, 200, 150, "None", 0);
        }
        if(gearTimer == 130) spawnLava(600, 780, 1500, 150);
        
        if(gearTimer > 200){
            blocksGroup.removeAll();
            lavaGroup.removeAll();
            gearTimer = 0;
        }
    }
    else if(bossTimer > 2500 && bossTimer < 3500){
        lavaGroup.removeAll();
        blocksGroup.removeAll();
        
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
            health -= 10 * pResistance;
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
            health -= 5 * pResistance;
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
            health -= 30 * pResistance;
        }
        if(gearTimer > 140){
            gearTimer = 0;
            darkbox.image = gs("BBox.png");
        }

        //Want to add some slimes here i guess
    }
    if(bossTimer > 8000 && bossTimer < 10000){
        darkbox.x = -1500;

        laser.visible = true;
        laser.x = boss.x;
        laser.y = boss.y + 400;

        if(blocksPlaced == false){
            spawnBlock(600, 700, 450, 150, "None", 0);
            blocksPlaced = true;
        }
        finalAttackSprite.y = 100;
    }


    if(bossTimer > 10000 && bossTimer < 12000){
        if(bossTimer > 10000 && bossTimer < 10050) speech.speak("This can't be.");
        boss.x = 600;
        if(boss.y < 650) boss.y += 10;
        laser.x = -1000;
        blocksGroup.removeAll();
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


        if(player.overlaps(portal) && portal.visible == true) stage++;
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
    if(stage < bossStage - 1){
        dynamicCloudSprite.x+=1;
        dynamicCloudSprite2.x+=1;
        if(dynamicCloudSprite.x > 2100) dynamicCloudSprite.x = -900;
        if(dynamicCloudSprite2.x > 2100) dynamicCloudSprite2.x = -900;
        staticCloudBossSprite.visible = false;
        dynamicCloudBossSprite.visible = false;
        dynamicCloudBossSprite2.visible = false;
        skyBossSprite.visible = false;
    }
    else if(stage == bossStage - 1){
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
    blocksGroup.removeAll();
}

function resetStage(){
    strengthCounter.splice(0);
    backgroundMusic.pause();
    rCounterDeath = 10;
    respawned = true;
    player.image = gs("d10.png");
    clearTurretBullet();
    clearTurret();
    clearSlimes();
    clearBlocks();
    clearBox();
    clearDashTrails();
    fireballGroup.removeAll();
    fireballData.length = 0;
    player.vel.x = 0;
    player.vel.y = 0;
    backgroundMusic.play();
    prevXArr = []; prevYArr = []; prevDArr = []; savedprevXArr = []; savedprevYArr = []; savedprevDArr = [];
    damageBuff = 0;
    speedBuff = 0;
    dead = false;
    health = normalHealth;
    mana = 100;
    stamina = 100;
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
    
    stage--;
    stage++;
    if(stage == 2){
        healthUp.x = 60;
        healthUp.y = 675;
    }
    if(stage == 3){
    
    }
    if(stage == 4){

    }
    else if(stage == 5){
        open = false;
        lever.image = gs("lever.png");
    }
    else if(stage == 6){
        open = false;
        lever.image = gs("lever.png");
    }
    else if(stage == 7){
        open = false;
        open2 = false;
        lever.image = gs("lever.png");
        healthUp.x = 450;
        healthUp.y = 550;
    }
    else if(stage == 8){
        player.x = 100;
        player.y = 670;
        lever.image = gs("lever.png");
        open = false;
    }
    else if(stage == bossStage - 1) dStage = 0;
}

function textSprite(message, x2, y2, labelName){
    labelName.text = message;
    labelName.x = x2;
    labelName.y = y2;
}

function portalAnimation(){
    portal.image = portalFrames[Math.round(counterPortal)];
    counterPortal += 0.2;
    if(counterPortal > 35) counterPortal = 0;
}

function tpAnimation(){
    tp.image = tpFrames[Math.round(counterTp)];
    counterTp += 0.1;
    if(counterTp > 15) counterTp = 0;
}

function spriteSheetSetup(){
    let cols = 6;
    let rows = 6;
    let w = portalSheet.width / cols;
    let h = portalSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) portalFrames.push(portalSheet.get(c * w, r * h, w, h));

    cols = 4; rows = 4; w = tpSheet.width / cols; h = tpSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) tpFrames.push(tpSheet.get(c * w, r * h, w, h));
        
    cols = 7; rows = 1; w = fireBallExplosionSheet.width / cols; h = fireBallExplosionSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) fireBallExplosionFrames.push(fireBallExplosionSheet.get(c * w, r * h, w, h));
    
    cols = 4; rows = 1; w = blockSheet.width / cols; h = blockSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) blockFrames.push(blockSheet.get(c * w, r * h, w, h));

    cols = 4; rows = 1; w = blockSheetL.width / cols; h = blockSheetL.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) blockFramesL.push(blockSheetL.get(c * w, r * h, w, h));

    blockIdleFrames[0] = blockFrames[1]; blockIdleFrames[1] = blockFrames[2]; blockIdleFrames[2] = blockFrames[3];
    blockIdleFramesL[0] = blockFramesL[1]; blockIdleFramesL[1] = blockFramesL[2]; blockIdleFramesL[2] = blockFramesL[3];

    cols = 3; rows = 1; w = critSheet.width / cols; h = critSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) critFrames.push(critSheet.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = critSheetL.width / cols; h = critSheetL.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) critFramesL.push(critSheetL.get(c * w, r * h, w, h));

    cols = 4; rows = 1; w = chargeSheet.width / cols; h = chargeSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) chargeFrames.push(chargeSheet.get(c * w, r * h, w, h));

    cols = 4; rows = 1; w = chargeSheetL.width / cols; h = chargeSheetL.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) chargeFramesL.push(chargeSheetL.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = chargeIdleSheet.width / cols; h = chargeIdleSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) chargeIdleFrames.push(chargeIdleSheet.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = chargeIdleSheetL.width / cols; h = chargeIdleSheetL.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) chargeIdleFramesL.push(chargeIdleSheetL.get(c * w, r * h, w, h));

    cols = 2; rows = 1; w = hurtSheet.width / cols; h = hurtSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) hurtFrames.push(hurtSheet.get(c * w, r * h, w, h));

    cols = 2; rows = 1; w = hurtSheetL.width / cols; h = hurtSheetL.height / rows;

    for (let r = 0; r < rows; r++) for (let c = cols-1; c >= 0; c--) hurtFramesL.push(hurtSheetL.get(c * w, r * h, w, h));

    cols = 4; rows = 1; w = turretBulletSheet.width / cols; h = turretBulletSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) turretBEFrames.push(turretBulletSheet.get(c * w, r * h, w, h));
}

function barMovement(){
    let maxWidth = 250;
    let healthRatio = health / maxHealth;
    healthBar.width = maxWidth * healthRatio;
    healthBar.x = 120 + healthBar.width / 2;

    let manaRatio = mana / 100;
    manaBar.width = maxWidth * manaRatio;
    manaBar.x = 500 + manaBar.width / 2;
    if(mana < 100) mana += 1;

    let staminaRatio = stamina / 100;
    staminaBar.width = maxWidth * staminaRatio;
    staminaBar.x = 900 + staminaBar.width / 2;
    if(stamina < 100) stamina += 1;

    textSprite("Hp: " + health, 70, 945, healthLabel);
    textSprite("Mana: " + mana, 445, 945, manaLabel);
    textSprite("Stamina: " + stamina, 840, 945, staminaLabel);

}

function textSetup(){
    label = new Sprite(400, 300, 0, 0); label.collider = "none"; label.textSize = 16; label.textColor = "Purple";
    label2 = new Sprite(400, 300, 0, 0); label2.collider = "none"; label2.textSize = 16; label2.textColor = "Purple";
    healthLabel = new Sprite(400, 300, 0, 0); healthLabel.collider = "none"; healthLabel.textSize = 16; healthLabel.textColor = "Red";
    manaLabel = new Sprite(400, 300, 0, 0); manaLabel.collider = "none"; manaLabel.textSize = 16; manaLabel.textColor = "Blue";
    staminaLabel = new Sprite(400, 300, 0, 0); staminaLabel.collider = "none"; staminaLabel.textSize = 16; staminaLabel.textColor = "Yellow";

}

class BlockSprite{
    //Width and height only change hitbox size, not actual image size
    //x and y are the center of the object
    constructor(x, y, w, h, d, s){
        //This builds each block using smaller blocks so it doesn't look stretched, will look slightly different each time due to random
        let gfx = createGraphics(w, h);
 
        for(let i = 0; i < w; i += stone.width-2){
            for(let j = 0; j < h; j += stone.height-2){
                gfx.push();
                gfx.translate(i + stone.width / 2, j + stone.height / 2);
                gfx.rotate(random(-0.11, 0.11));
                gfx.image(stone, -stone.width / 2, -stone.height / 2, stone.width*1.05, stone.height*1.05);
                gfx.pop();
            }
        }
 
        let blockObj = new blocksGroup.Sprite();
        blockObj.x = x;
        blockObj.y = y;
        blockObj.image = gfx;
        blockObj.image.scale.x = w / blockObj.image.width;
        blockObj.image.scale.y = h / blockObj.image.height;
        blockObj.width = w;
        blockObj.height = h;
        blockObj.collider = "kinematic";
        blockObj.debug = true;
        this.BSpeed = s;
        this.BDirection = d;
        this.sprite = blockObj;
        this.gone = false;

        if(d == "n") blockObj.vel.y = -s;
        if(d == "s") blockObj.vel.y = s;
        if(d == "e") blockObj.vel.x = s;
        if(d == "w") blockObj.vel.x = -s;
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
}
 
function spawnBlock(x, y, w, h, d, s){
    let newBlock = new BlockSprite(x, y, w, h, d, s);
    blocksData.push(newBlock);
}

class EnemySlimeSprite{
    //x, y, speed
    constructor(x, y, s){
        let slimeObj = new slimesGroup.Sprite();
        this.sprite = slimeObj;
        slimeObj.x = x;
        slimeObj.y = y;
        slimeObj.image = slimeImageDefault;
        slimeObj.image.scale.x = 80 / slimeObj.image.width;
        slimeObj.image.scale.y = 80 / slimeObj.image.height;
        slimeObj.width = 40;
        slimeObj.height = 60;
        slimeObj.collider = "dynamic"; 
        slimeObj.debug = true;
        slimeObj.offset.y = 10;
    
        this.EHealth = 150;
        this.ESpeed = s;
        this.SlimeDead = false;
        this.DeathCounter = 1;
        this.hit = false;
        this.canBeHit = true;
        this.hitCooldown = 0;
        this.counterRight = 1;
        this.counterLeft = 1;
        this.upKnockback = false;
        this.knockbackTimer = 0;
        this.gone = false;
    }

    knockback(direction){
        if(direction == "l"){
            this.sprite.vel.x = -20;
            this.sprite.vel.y = -3;
        }
        if(direction == "r"){
            this.sprite.vel.x = 20;
            this.sprite.vel.y = -3;
        }
        this.hit = true;
        this.canBeHit = false;
        this.hitCooldown = 30;
        this.upKnockback = true;
        this.knockbackTimer = 10;
    }

    update(){
        this.knockbackTimer--;
        if(this.knockbackTimer <= 0) this.upKnockback = false;
        
        //All this basically controls the knockback and prevents the slime from being multihit by the same attack
        if(this.hit == true){
            this.sprite.vel.x *= 0.9;
        }
        if(Math.abs(this.sprite.vel.x) < 0.05) {
            this.sprite.vel.x = 0;
            this.hit = false;
        }
        this.sprite.text = "Hp: " + this.EHealth;

        if(this.canBeHit == false){
            this.hitCooldown--;
            if(this.hitCooldown <= 0) this.canBeHit = true;
        }

    }

    updateAnimation(direction) {
        if (direction === "right") {
          this.counterRight += 0.1;
          this.sprite.image = RslimeFrames[Math.round(this.counterRight)];
          this.sprite.image.scale.x = 80 / slimeImageDefault.width;
          this.sprite.image.scale.y = 80 / slimeImageDefault.height;
          if (this.counterRight > 3) this.counterRight = 1;
        } else if (direction === "left") {
          this.counterLeft += 0.1;
          this.sprite.image = LslimeFrames[Math.round(this.counterLeft)];
          this.sprite.image.scale.x = 80 / slimeImageDefault.width;
          this.sprite.image.scale.y = 80 / slimeImageDefault.height;
          if (this.counterLeft > 3) this.counterLeft = 1;
        }
      }
      disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
 }
 
function spawnSlime(x, y, s){
    let newSlime = new EnemySlimeSprite(x, y, s);
    slimesData.push(newSlime);
}
 
function clearBlocks(){
    blocksData.forEach(spriteB => {spriteB.disappear()});
    blocksPlaced = false;
    blocksData.length = 0;
}

function clearSlimes(){
    slimesData.forEach(spriteS => spriteS.disappear());
    //slimesGroup.removeAll();
    slimesSpawned = false;
    slimesData.length = 0;
}

class fireballSprite{
    //x, y, width, height
 
 
    //Width and height only change hitbox size, not actual image size
    //x and y are the center of the object
    constructor(x, y, d, s){
         let fireballObj = new fireballGroup.Sprite();
         this.sprite = fireballObj;
         fireballObj.x = x;
         fireballObj.y = y;
         if(d == "r"){ 
             fireballObj.image = fireballImageDefaultR;
             fireballObj.vel.x = s;
         }
         if(d == "l"){
             fireballObj.image = fireballImageDefaultL;
             fireballObj.vel.x = -s;
         }
         fireballObj.image.scale.x = 50 / fireballObj.image.width;
         fireballObj.image.scale.y = 40 / fireballObj.image.height;
         fireballObj.width = 50;
         fireballObj.height = 40;
         fireballObj.collider = "dynamic"; 
         fireballObj.debug = true;
         this.direction = d;
         this.ESpeed = s;
         this.counterRight = 1;
         this.counterLeft = 1;
         this.DeathCounter = 1;
    }
 
    updateAnimation(){
        this.sprite.rotation = 0;
        this.sprite.vel.y = 0;
        if (this.direction === "r") {
            this.counterRight += 0.1;
            this.sprite.image = fireballFrames[Math.round(this.counterRight)];
            this.sprite.image.scale.x = 50 / fireballImageDefaultR.width;
            this.sprite.image.scale.y = 40 / fireballImageDefaultR.height;
            if (this.counterRight > 3) this.counterRight = 1;
        } else if (this.direction === "l") {
            this.counterLeft += 0.1;
            this.sprite.image = LfireballFrames[Math.round(this.counterLeft)];
            this.sprite.image.scale.x = 50 / fireballImageDefaultL.width;
            this.sprite.image.scale.y = 40 / fireballImageDefaultL.height;
            if (this.counterLeft > 3) this.counterLeft = 1;
        }
    }

    checkIfExist(){
        if(!fireballGroup.includes(this.sprite)) return;
        this.sprite.vel.x *= 0.95;
        let index = fireballGroup.indexOf(this.sprite);
        if(Math.abs(this.sprite.vel.x) < 0.1 * this.ESpeed){ 
            this.disappear();
            return;
        }
        boxGroup.forEach(spriteBox => {
            if(this.sprite.overlapping(spriteBox)){
                this.disappear();
                let index = boxGroup.indexOf(spriteBox);
                boxData.splice(index, 1);
                boxGroup.remove(spriteBox);
                spriteBox.x = -400;
                return;
            }
        });
    
        slimesGroup.forEach(spriteS => {
            if (this.sprite.overlapping(spriteS) && this.sprite.collider == "dynamic") {
                let index2 = slimesGroup.indexOf(spriteS);
                slimesData[index2].EHealth -= 50;
                this.disappear();
                return;
            }
        });

        blocksGroup.forEach(spriteB => {
            if (this.sprite.overlapping(spriteB) && this.sprite.collider == "dynamic") {
                this.disappear();
                return;
            }
        });

        fireballGroup.forEach(spriteFB => {
            if (this.sprite.overlapping(spriteFB)) {}
        });

        if(this.sprite.overlapping(portal)) this.disappear();
        if(this.sprite.overlapping(swordHitBox)){}
        if(this.sprite.overlapping(player)){}
    }
 
    disappear(){
        this.sprite.vel.y = 0;
        this.sprite.vel.x = 0;
        this.sprite.collider = "none;"
        
        this.DeathCounter += 0.2;
        this.sprite.image = fireBallExplosionFrames[Math.round(this.DeathCounter)];
        this.sprite.image.scale.x = 100 / fireballImageDefaultR.width;
        this.sprite.image.scale.y = 80 / fireballImageDefaultR.height;
        
        if(this.DeathCounter > 6){
            //Prevent any indexing issues
            this.sprite.visible = false;
            if(fireballGroup.includes(this.sprite)){
                fireballGroup.remove(this.sprite);
            }
            const index = fireballData.indexOf(this);
            if(index !== -1){
                fireballData.splice(index, 1);
            }
        }
    }
}

function spawnFireball(x, y, d, s){
    let newFireball = new fireballSprite(x, y, d, s);
    fireballData.push(newFireball);
}

function playerHurtAnimation(d){
    if(!playerIsHurt) return;
    counterH += 0.1;
    if(d == "n"){
        if(counterH < 1){
            player.image = hurtFrames[Math.round(counterH)];
        }
        else{
            player.image = standFrame;
            counterH = 0;
            playerIsHurt = false;
            player.vel.x = 0;
        } 
    }
    if(d == "r"){
        player.vel.x = -4;
        if(counterH < 1){
            player.image = hurtFrames[Math.round(counterH)];
        }
        else{
            player.image = standFrame;
            counterH = 0;
            playerIsHurt = false;
            player.vel.x = 0;
        } 
    }
    if(d == "l"){
        player.vel.x = 4;
        if(counterH < 1){
            player.image = hurtFramesL[Math.round(counterH)];
        }
        else{
            player.image = LstandFrame;
            counterH = 0;
            playerIsHurt = false;
            player.vel.x = 0;
        } 
    }
}

function explosionAnimation(x, y){
    if(!explosionSummoned){ 
        boom.x = -200;
        return;
    }
    boom.x = x; 
    boom.y = y;
    if(counterBoom < 6){
        counterBoom += 0.2;
        boom.image = fireBallExplosionFrames[Math.round(counterBoom)];
        slimesGroup.forEach(spriteS => {
            if(boom.overlapping(spriteS)){
                let index = slimesGroup.indexOf(spriteS); 
                slimesData[index].EHealth -= 2;
            }
        });
    }
    else{
        counterBoom = 0;
        explosionSummoned = false;
    }
}

class strengthBuffs{
    constructor(){
        this.counter = 0; 
        damageBuff += 10;
        speedBuff += 5;
    }
    update(index){
        this.counter++;

        if(this.counter > 360){
            damageBuff -= 10;
            speedBuff -= 5;
            health += 5;
            strengthCounter.splice(index, 1);
        }
    }
}

function buffStrength(){
    let newStrength = new strengthBuffs();
    strengthCounter.push(newStrength);
}

function updateStrengthBuffs(){
    for(let i = strengthCounter.length - 1; i >= 0; i--) strengthCounter[i].update(i);
}

function startingScreenAnimation(){
    counterScreen3 += 0.01;
    if(Math.round(counterScreen3) == 0){
        startingScreen31Sprite.visible = true;
        startingScreen32Sprite.visible = false;
    }
    else{
        startingScreen31Sprite.visible = false;
        startingScreen32Sprite.visible = true;
    }
    if(counterScreen3 > 0.9) counterScreen3 = 0;

    startingScreen2Sprite.visible = true;
    startingScreen2Sprite2.visible = true;

    startingScreen2Sprite.x+=1;
    startingScreen2Sprite2.x+=1;
    if(startingScreen2Sprite.x > 2100) startingScreen2Sprite.x = -900;
    if(startingScreen2Sprite2.x > 2100) startingScreen2Sprite2.x = -900;
}

function hideStartingScreen(){
    if(startingScreen1Sprite) startingScreen1Sprite.visible = false;
    if(startingScreen2Sprite) startingScreen2Sprite.visible = false;
    if(startingScreen2Sprite2) startingScreen2Sprite2.visible = false;
    if(startingScreen31Sprite) startingScreen31Sprite.visible = false;
    if(startingScreen32Sprite) startingScreen32Sprite.visible = false;
}

function handleDash() {
    if(dashCooldown > 0) dashCooldown--;

    if(kb.presses("ArrowRight") && dashL == false){
        let now = frameCount; 
        if (now - lastTapR < 10 && stamina >= 30 && mana >= 10 && dashCooldown <= 0) { 
            dashR = true;
            dashTimer = dashDuration;
            stamina -= 30;
            mana -= 10;
            dashCooldown = dashCooldownTime;
        }
        lastTapR = now;
    }

    if(dashR){
        if(dashTimer % 2 == 0) dashTrailGroup.push(new dashTrail("r", player.x, player.y));
        if (dashTimer <= 0) dashR = false; 
        else if(dashTimer > 7) player.vel.x = 15;     
        dashTimer--;
    }

    if(kb.presses("ArrowLeft") && dashR == false){
        let now = frameCount; 
        if (now - lastTapR < 20 && stamina >= 30 && mana >= 10 && dashCooldown <= 0) { 
            dashL = true;
            dashTimer = dashDuration;
            stamina -= 30;
            mana -= 10;
            dashCooldown = dashCooldownTime;
        }
        lastTapR = now;
    }

    if(dashL){
        if(dashTimer % 2 == 0) dashTrailGroup.push(new dashTrail("l", player.x, player.y));
        if (dashTimer <= 0) dashL = false; 
        else if(dashTimer > 7) player.vel.x = -15;     
        dashTimer--;
    }
}

class dashTrail{
    constructor(d, x, y){
        this.sprite = new Sprite(-100, -100, 0, 0);
        this.sprite.collider = "none";
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.scale = 0.13;
        if(d == "r") this.sprite.image = dashTrailR;
        if(d == "l") this.sprite.image = dashTrailL;
        this.counter = 0; 
        this.gone = false;
    }
    update(){
        if(this.gone) return;
        this.counter++;
        this.sprite.opacity = max(0, 1 - this.counter / 30);
        if(this.counter > 30){ 
            this.disappear();
            /*
            let index = dashTrailGroup.indexOf(this.sprite);
            this.sprite.remove();
            if(index !== -1) dashTrailGroup.splice(index, 1);

            index = recallTrailGroup.indexOf(this.sprite);
            this.sprite.remove();
            if(index !== -1) recallTrailGroup.splice(index, 1);
            */
        }
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
}

function clearDashTrails(){
    dashTrailGroup.forEach(spriteDT => spriteDT.disappear());
    dashTrailGroup.length = 0;

    recallTrailGroup.forEach(spriteRT => spriteRT.disappear());
    recallTrailGroup.length = 0;
}

function hookThing(){
    if(kb.pressing("space") && dist(player.x, player.y, gearSprite.x, gearSprite.y) < 300) {
        origin = createVector(gearSprite.x, gearSprite.y);
        ropeLength = dist(position.x, position.y, gearSprite.x, gearSprite.y);
        rope();
    }
    else{
        position.x = player.x;
        position.y = player.y;
        isHooked = false;
        origin = null;

        if(ropeSprite){
            ropeSprite.remove();
            ropeSprite = null;
        }
    }
}

function keyReleased(){
    if(keyCode == 32 && isHooked == true){ 
        player.vel.y = -20;
        if(direction == true) player.vel.x = 5;
        if(direction == false) player.vel.x = -5;
    }
}

function rope(){
    velocity.y += g;
    position.add(velocity);
    velocity.mult(0.995);

    if(position.y > height - ballRadius) {
        position.y = height - ballRadius;
        velocity.y *= - friction;
    }
    if(position.x < ballRadius){
        position.x = ballRadius;
        velocity.x *= - friction;
    }
    else if( position.x > width - ballRadius) { 
        position.x = width - ballRadius;
        velocity.x *= - friction;
    }
    if(origin) {
        //This entire section is to draw a rope since sprites always overlap lines and shapes
        if (!ropeSprite) {
            ropeSprite = new Sprite();
            ropeSprite.height = 4; 
            ropeSprite.color = "white";
            ropeSprite.collider = "none";
        }
        let dx = position.x - origin.x;
        let dy = position.y - origin.y;
        let length = dist(position.x, position.y, origin.x, origin.y);
        let angle = atan2(dy, dx);
            
        ropeSprite.width = length;
        ropeSprite.x = (position.x + origin.x) / 2;
        ropeSprite.y = (position.y + origin.y) / 2;
        ropeSprite.rotationLock = true;
        ropeSprite.rotation = angle;
        
        //Slowly fall off rope
        let toOrigin = p5.Vector.sub(position, origin);
        let distance = toOrigin.mag();
        let excess = distance - ropeLength;
        
        if(excess > 0){
            let correction = toOrigin.copy().normalize().mult(excess * 0.5);
            position.sub(correction);
            velocity.sub(correction);
        }
    }
    isHooked = true;
    player.x = position.x;
    player.y = position.y;
    if(isHooked == true){
        player.vel.x = 0; player.vel.y = 0;
    }

    circle(position.x, position.y, ballRadius * 2);    
}

function makeLineSprite(x1, y1, x2, y2) {
    let length = dist(x1, y1, x2, y2);
    let angle = atan2(y2 - y1, x2 - x1);
  
    let lineSprite = new Sprite();
    lineSprite.width = length;
    lineSprite.height = 4; // thickness of the line
    lineSprite.color = 'white';
    lineSprite.collider = 'none';
  
    // position in middle of the two points
    lineSprite.x = (x1 + x2) / 2;
    lineSprite.y = (y1 + y2) / 2;
    lineSprite.rotation = degrees(angle);
  
    return lineSprite;
}

class LavaSprite{
//Width and height only change hitbox size, not actual image size
//x and y are the center of the object
    constructor(x, y, w, h){
        let lavaObj = new lavaGroup.Sprite();
        lavaObj.x = x;
        lavaObj.y = y;
        lavaObj.image = lavaImage.get();
        lavaObj.image.scale.x = w / lavaObj.image.width;
        lavaObj.image.scale.y = h / lavaObj.image.height;
        lavaObj.width = w;
        lavaObj.height = h - 40;
        lavaObj.collider = "static";
        lavaObj.debug = true;
        this.sprite = lavaObj;
        this.gone = false;
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
}

function spawnLava(x, y, w, h){
    let newLava = new LavaSprite(x, y, w, h);
    lavaData.push(newLava);
}

function clearLava(){
    lavaData.forEach(spriteL => {spriteL.disappear()});
    lavaPlaced = false;
    lavaData.length = 0;
}

class BoxSprite{
    //Width and height only change hitbox size, not actual image size
    //x and y are the center of the object
    constructor(x, y, w, h){
        let boxObj = new boxGroup.Sprite();
        this.sprite = boxObj;
        boxObj.x = x;
        boxObj.y = y;
        boxObj.image = boxImage.get();
        boxObj.image.scale.x = w / boxObj.image.width;
        boxObj.image.scale.y = h / boxObj.image.height;
        boxObj.width = w;
        boxObj.height = h;
        boxObj.collider = "static";
        boxObj.debug = true;
        this.gone = false;
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
}
    
function spawnBox(x, y, w, h){
    let newBox = new BoxSprite(x, y, w, h);
    boxData.push(newBox);
}

function clearBox(){
    boxData.forEach(spriteB => {spriteB.disappear()});
    boxPlaced = false;
    boxData.length = 0;
}

class TurretSprite{
    constructor(x, y, s, d){
        let turretObj = new turretGroup.Sprite();
        turretObj.x = x;
        turretObj.y = y;
        turretObj.image = turretImage.get();
        turretObj.image.scale.x = s / turretObj.image.width;
        turretObj.image.scale.y = s / turretObj.image.height;
        turretObj.width = s;
        turretObj.height = s;
        turretObj.collider = "static";
        turretObj.debug = true;
        this.sprite = turretObj;
        this.TDirection = d;
        this.shootCounter = 0;
        if(d == "n") turretObj.rotation = 90;
        if(d == "s") turretObj.rotation = 270;
        if(d == "e") turretObj.rotation = 180;
        if(d == "w") turretObj.rotation = 0;
        this.gone = false;
    }
    update(){
        this.shootCounter++;
        if(this.shootCounter > 75){
            this.shootCounter = 0;
            if(this.TDirection == "w") spawnTurretBullet(this.sprite.x-40, this.sprite.y, 5, this.TDirection);
            if(this.TDirection == "e") spawnTurretBullet(this.sprite.x+40, this.sprite.y, 5, this.TDirection);
            if(this.TDirection == "n") spawnTurretBullet(this.sprite.x, this.sprite.y-40, 5, this.TDirection);
            if(this.TDirection == "s") spawnTurretBullet(this.sprite.x, this.sprite.y+40, 5, this.TDirection);
        }
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
}

function spawnTurret(x, y, s, d){
    let newTurret = new TurretSprite(x, y, s, d);
    turretData.push(newTurret);
}

function clearTurret(){
    turretData.forEach(spriteT => {spriteT.disappear()});
    turretPlaced = false;
    turretData.length = 0;
}

class TurretBulletSprite{
    //x, y, speed, direction
    constructor(x, y, s, d){
        let turretBullObj = new turretBulletGroup.Sprite();
        turretBullObj.x = x;
        turretBullObj.y = y;
        turretBullObj.collider = "dynamic";
        turretBullObj.debug = true;
        turretBullObj.image = turretBEFrames[0].get();
        this.TBDirection = d;
        this.sprite = turretBullObj;
        this.counter = 0;
        this.gone = false;
        
        if(d == "n") {
            turretBullObj.rotation = 90;
            turretBullObj.width = 40;
            turretBullObj.height = 20;
            turretBullObj.image.scale.x = 20 / turretBullObj.image.height;
            turretBullObj.image.scale.y = 40 / turretBullObj.image.width;
            turretBullObj.vel.y = -s;
        }
        if(d == "s") {
            turretBullObj.rotation = 270;
            turretBullObj.width = 40;
            turretBullObj.height = 20;
            turretBullObj.image.scale.x = 20 / turretBullObj.image.height;
            turretBullObj.image.scale.y = 40 / turretBullObj.image.width;
            turretBullObj.vel.y = s;
        }
        if(d == "e") {
            turretBullObj.rotation = 180;
            turretBullObj.width = 40;
            turretBullObj.height = 20;
            turretBullObj.image.scale.x = 50 / turretBullObj.image.width;
            turretBullObj.image.scale.y = 20 / turretBullObj.image.height;
            turretBullObj.vel.x = s;
        }
        if(d == "w"){
            turretBullObj.rotation = 0;
            turretBullObj.width = 40;
            turretBullObj.height = 20;
            turretBullObj.image.scale.x = 50 / turretBullObj.image.width;
            turretBullObj.image.scale.y = 20 / turretBullObj.image.height;
            turretBullObj.vel.x = -s;
        }
    }
    update(){
        if(this.gone) return;

        this.counter+=0.1;
        if(this.counter > 3) this.counter = 0;
        this.sprite.image = turretBEFrames[Math.round(this.counter)].get();
        if(this.TBDirection == "w" || this.TBDirection == "e"){this.sprite.image.scale.x = 2; this.sprite.image.scale.y = 1.7;}
        if(this.TBDirection == "n" || this.TBDirection == "s"){this.sprite.image.scale.x = 2; this.sprite.image.scale.y = 1.7;}
        if(this.TBDirection == "n") this.sprite.rotation = 90;
        if(this.TBDirection == "s") this.sprite.rotation = 270;
        if(this.TBDirection == "e") this.sprite.rotation = 180;
        if(this.TBDirection == "w") this.sprite.rotation = 0;
        if(this.TBDirection == "n" || this.TBDirection == "s") if(this.sprite.y < 0 || this.sprite.y > 1000) this.disappear();
        if(this.TBDirection == "e" || this.TBDirection == "w") if(this.sprite.x < 0 || this.sprite.x > 1200) this.disappear();
        if(this.sprite.overlaps(player)){
            this.disappear();
            if (!playerIsHurt) {
                health -= 30 * pResistance;
                playerIsHurt = true;
                counterH = 0;
                if(player.x < this.sprite.x) playerHurtDirection = "r";
                else if(player.x >= this.sprite.x) playerHurtDirection = "l";
            }
        }
        turretGroup.forEach(spriteT => {if(this.sprite.overlaps(spriteT));});
        if(this.sprite.overlaps(ground)) this.disappear();
        turretBulletGroup.forEach(spriteTB => {if(this.sprite.overlaps(spriteTB));});
        if(this.sprite.overlaps(swordHitBox) && swordHitBox.collider == "static") this.disappear();
        fireballData.forEach(spriteFB => {if(this.sprite.overlaps(spriteFB.sprite)) {this.disappear(); spriteFB.disappear();}});

        this.sprite.overlaps(lavaGroup, () => this.disappear());
        this.sprite.overlaps(boxGroup, () => this.disappear());
        this.sprite.overlaps(blocksGroup, () => this.disappear());

        slimesGroup.forEach(spriteS => {if(this.sprite.overlaps(spriteS));});
        if(this.sprite.collides(portal) || this.sprite.collides(gearSprite) || this.sprite.collides(Ldoor) || this.sprite.collides(Ldoor2) || this.sprite.collides(lever) || this.sprite.collides(lever2)) this.disappear();
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
}

function spawnTurretBullet(x, y, s, d){
    let newTurretBullet = new TurretBulletSprite(x, y, s, d);
    turretBulletData.push(newTurretBullet);
}

function clearTurretBullet(){
    turretBulletData.forEach(spriteTB => {spriteTB.disappear()});
    turretBulletData.length = 0;
}