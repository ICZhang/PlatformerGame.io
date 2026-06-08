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

var miniboss;
var counterMBIdle = 0;
var counterMBHurt = 10;
var counterMBRun = 0;
var counterMBAttack = 10;
var counterMBAirAttack = 0;
var counterMBDeath = 0;
var counterMBJump = 4;
var counterMBCrouch = 10;
var MBDirection = true;
var MBAttack = false;
var MBRun = false;
var MBAirAttack = false;
var MBJump = false;
var MBHurt = false;
var MBDeath = false;
var MBCrouch = false;
var MBHealth = 2500;
var MBHealthbar;
var visualMBHealth = 2500;
var shakeAmount = 0;
var MBInAir = false;
var MBSwordHitbox;
var HitByMB = false;
var HitByMBAA = false;
var MBjumpAttackCooldown = 30;
var MBIntroTimer = 0;
var topBar;
var botBar;
var MBNameFlicker = 0;
var MBNameShake = 0;
var cutScene = false;
let MBGroundSlashImage, MBStabImage, MBSSlashImage, MBDSlashImage;
let [MBGroundSlashFrames, MBStabFrames, MBSSlashFrames, MBDSlashFrames] = [[], [], [], []];
let MBexplosionSummoned = false;
let MBboom;
var counterMBBoom = 0;
var MBexplodeX = -500, MBexplodeY = -500;
let MBSlashData;
var counterMBDS = 40;
let MBArenaImage;
let MBArena;
let pillar1, pillar2, pillar3, pillar4;
let pillar1Image, pillar2Image, pillar3Image;
let MBBuff, MBBuffImage; 
let MBFightBuff;
let MBBuffFrames = [];
let counterMBBuff = 0; let counterMBFightBuff = 0;
let MBBuffGotten = false;
let parryEffect, parryEffectImage; let parryCounter = 10; let parryEffectFrames = [];
let MBEyeEffect, MBEyeEffectImage_S, MBEyeEffectImageS, MBEyeEffectImageDS;
let counterEyeEffect = 50;
let counterEyeEffect2 = 60;
let MBAttackNum = 0;
let MBAttackNum2 = [0, 0, 0];
var MBAttack2 = false;
var counterMBAttack2 = 0; 
var counterMBDS2 = 40;
let MBRunning = false;
let buffIncrease = 0.15;
let counterMBFlashAttack = 0;
let MBFlashAttack, MBFinalAttackImage; let MBFinalAttackFrames = []; 
let counterMBFA = 0;
let counterMBFinalAttack = 0;
let MBFinalAttack; 
let counterMBFinA = 0;
let StartMBFinalAttack = false;
let MBFinalDecision = false;
let MBFinalDecision2 = false;
let MBFinalDecision3 = false;
let MBLower = 0.8, MBUpper = 1;
let MBdecision = 0;
let MBdecisionCooldown = 0;
let MBdecisionWait = 200;
let MBMoveDist = 400;
let MBcomboIndex = 4;
let counterMBSlide = 0;
let MBSliding = false;
let MBSlideDirection = true; //True right, false left
let MBSlideImage;
let MBSlideFrames = [];

var bossMovement = 10;
var direction = true;
let blocksGroup, blocksData;
let poisonGasData;
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
var open = false;
var open2 = false;
var blocksPlaced = false;
var slimesSpawned = false;
var lavaPlaced = false;
var boxPlaced = false;
var turretPlaced = false;
var gasPlaced = false;
var sliding = false;
var health = 120;  ////Testing Purpose
var stamina = 100;
var mana = 100;
var bossTimer = 0;
var lavaTimer = 0;
var gearTimer = 0;
var hookCooldownTimer = 0;
let arrowDisplacement = Math.random() * 100;
var normalHealth = health;
var maxHealth = health;
var visualHealth = maxHealth;
var tempMaxHealth = health;
var gotten = false;
var sPosx = 100;
var sPosy = 300;
var prevX = 0;
var prevY = 0;
var isHooked = false; var isHooked2 = false
var stage = -1;
var bossStage = 16;
var dStage = 0;
var deathMessage = true;
const g = 0.3;
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
let lastTapL = 0;     
let dashR = false;  
let dashL = false;    
let dashDuration = 8; 
let dashTimer = 0;
let dashCooldown = 0;
let dashCooldownTime = 60;
let paused = false;
let mouseRepresenter;
let controlScreenActive = false; let volumeScreenActive = false;
let dataLoaded = false;
let messageCooldown = 51, loadingCooldown = 0;
let backgroundMusicVar = 1, soundEffectVar = 1, speechSoundVar = 1; 
let backgroundMusicBar, soundEffectBar, speechSoundBar;
let interactIndicator, interactIndicatorGear; 

let standFrame, LstandFrame, crouchFrame, LcrouchFrame, slimeImageDefault, fireballImageDefaultR, fireballImageDefaultL, boom, dashTrailR, dashTrailL;
let [walkFrames, LwalkFrames, swingFrames, LswingFrames, dashFrames, LdashFrames, jumpFrames, LjumpFrames, deathFrames, fireFrames, LfireFrames, fireballFrames, LfireballFrames] = [[], [], [], [], [], [], [], [], [], [], [], [], []];
let portalSheet, tpSheet, fireBallExplosionSheet, blockSheet, blockSheetL, critSheet, critSheetL, chargeSheet, chargeSheetL;
let chargeIdleSheet, chargeIdleSheetL, hurtSheet, hurtSheetL, turretBulletSheet, poisonGasSheet;
let [portalFrames, tpFrames, fireBallExplosionFrames, blockFrames, blockFramesL, critFrames, critFramesL, chargeFrames, chargeFramesL] = [[], [], [], [], [], [], [], [], []];
let [chargeIdleFrames, chargeIdleFramesL, blockIdleFrames, blockIdleFramesL, hurtFrames, hurtFramesL] = [[], [], [], [], [], []];
let label, label2, label3, label4, healthLabel, manaLabel, staminaLabel, MBLabel, MBLabel2, MBLabel3;
let MBIdleImage, MBRunImage, MBHurtImage, MBAirAttackImage, MBJumpImage, MBAttacksImage, MBDeathImage, MBCrouchImage;
let [MBIdleFrames, MBRunFrames, MBHurtFrames, MBAirAttackFrames, MBJumpFrames, MBAttacksFrames, MBDeathFrames, MBCrouchFrames] = [[], [], [], [], [], [], [], []];

let volLabel11, volLabel12, volLabel13, volLabel21, volLabel22, volLabel23, volLabel31, volLabel32, volLabel33;
let backBoard, healthBar, manaBar, staminaBar;
let [RslimeFrames, LslimeFrames, DslimeFrames, turretBEFrames, poisonGasFrames] = [[], [], [], [], []];
let castleGate, castleGateImage; 
let pauseMenu, controlsButton, volumeButton, saveButton, backButton, pauseMenuBlank, clearButton;
let pauseMenuImage, controlsButtonImage, volumeButtonImage, saveButtonImage, backButtonImage, pauseMenuBlankImage, clearButtonImage;

let backgroundMusic;
let startingScreen1Sprite, startingScreen2Sprite, startingScreen2Sprite2, startingScreen31Sprite, startingScreen32Sprite, startingScreen1, startingScreen2, startingScreen31, startingScreen32;
var counterScreen3 = 0;

let debugStuff = false;

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
    poisonGasSheet = loadImage(gs("poisonGasSheet.png"));

    pauseMenuImage = loadImage(gs("menuBackground.png"));
    controlsButtonImage = loadImage(gs("controlsButton.png"));
    volumeButtonImage = loadImage(gs("volumeButton.png"));
    saveButtonImage = loadImage(gs("saveButton.png"));
    clearButtonImage = loadImage(gs("clearButton.png"));
    backButtonImage = loadImage(gs("backButton.png"));
    pauseMenuBlankImage = loadImage(gs("pauseMenu.png"));

    MBIdleImage = loadImage(gs("MBIdle.png"));
    MBRunImage = loadImage(gs("MBRun.png"));
    MBHurtImage = loadImage(gs("MBHurt.png"));
    MBJumpImage = loadImage(gs("MBJump.png"));
    MBAttacksImage = loadImage(gs("MBAttacks.png"));
    MBAirAttackImage = loadImage(gs("MBAirAttack.png"));
    MBDeathImage = loadImage(gs("MBDeath.png"));
    MBGroundSlashImage = loadImage(gs("MBGroundSlash.png"));
    MBStabImage = loadImage(gs("MBStab.png"));
    MBSSlashImage = loadImage(gs("MBSSlash.png"));
    MBDSlashImage = loadImage(gs("MBDSlash.png"));
    MBArenaImage = loadImage(gs("MBArena.png"));
    MBBuffImage = loadImage(gs("MBBuff.png"));
    pillar1Image = loadImage(gs("Pillar1.png"));
    pillar2Image = loadImage(gs("Pillar2.png"));
    pillar3Image = loadImage(gs("Pillar3.png"));
    parryEffectImage = loadImage(gs("parryEffect.png"));
    MBCrouchImage = loadImage(gs("MBCrouch.png"));
    MBFinalAttackImage = loadImage(gs("MBFinalSlash.png"));
    MBSlideImage = loadImage(gs("MBSlide.png"));
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
    poisonGasData = [];
    MBSlashData = [];

    cloudSetUp();
    speech = new p5.Speech();
    speech.setPitch(1);
    speech.setVoice("Aaron");

    position = createVector(width * 0.75, 20);
    velocity = createVector();
    spriteSheetSetup();
    spriteStuff();
    textSetup();

    if(loadData()) {loadingCooldown = 0; dataLoaded = true;}
    else loadingCooldown = 100;
}


function draw() {
    managePauseMenu();
    mouseRepresenter.x = Math.round((mouseX/ 0.7)); mouseRepresenter.y = Math.round((mouseY/ 0.7));
    background(138, 176, 226);
    if(paused == false){
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
        poisonGasData.forEach(spritePG => {spritePG.update()});

        //Testing
        textSize(18);
        if(debugStuff) text(Math.round((mouseX/ 0.7)) + "," + Math.round((mouseY/ 0.7)), 500, 20);
        if(debugStuff) text("Hook Cooldown: " + hookCooldownTimer, 500, 50);

        if(debugStuff) text("MBDecision Timer: " + MBdecisionCooldown, 800, 20);
        if(debugStuff) text("MBDecision: " + MBdecision, 800, 50);
        if(debugStuff) text("Move Dist: " + MBMoveDist, 800, 80);
        if(debugStuff) text("counter Flash: " + counterMBFlashAttack, 800, 110);
        if(debugStuff) text("MB slide direction: " + MBSlideDirection, 800, 140);
        if(debugStuff) text("MB Slide: " + MBSliding, 800, 170);
        
        if(debugStuff) text("X-velocity: " + player.vel.x, 500, 150);
        if(debugStuff) text("Y-velocity: " + player.vel.y, 500, 200);

        if(stage == -1){
            startingScreenAnimation();
        }
        //This is for resetting the stage
        if(kb.presses("r") && stage != -1 && stage != bossStage) resetStage();
        
        if(respawned == true){
            player.rotation = 0;
            reverseDeathAnimation();
            if(rCounterDeath < 0.9) {
                player.image = standFrame;
                respawned = false;
                direction = true;
            }
        }
        if(stage >= 0 && stage <= bossStage - 2 && dead == true) {deathAnimation(); stopMotion();}
        
        if(stage == 0){
            portal.x = 1150;
            portal.y = 675;
            if(dead == false){
                normalStuff();
                level0();
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
                level1();
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
                level2();
            }
            if(player.overlaps(portal)){
                player.x = 50;
                player.y = 600;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 3){
            portal.x = 1100;
            portal.y = 675; 
            if(dead == false){
                normalStuff();
                level3();
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
                level4();
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
            portal.x = 25;
            portal.y = 150;
            if(dead == false){
                level5();
                normalStuff();
            }
            if(player.overlaps(portal)){
                player.x = 100;
                player.y = 0;
                normalStageStuff();
                gearSprite.y = -500;
                healthUp.y = -500;

                lever.y = -500;
                Ldoor.x = 1000
                Ldoor.y = 685
                clearEverything();
            }
        }
        else if(stage == 6){
            portal.x = 1150;
            portal.y = 670;
            if(dead == false){
                level6();
                normalStuff();
                lever.x = 100;
                lever.y = 425;
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
            portal.x = 1150;
            portal.y = 670;
            label.y = -100;
            if(dead == false){
                lever.x = 40; lever.y = 50;
                lever2.x = 430; lever2.y = 370; 
                level7();
                normalStuff();
            }
            if(player.overlaps(portal)){
                healthUp.y = -500;
                lever.y = -500;
                lever2.y = -500;
                gearSprite.y = -500;
                player.x = 100;
                player.y = 670;
                Ldoor.y = -500;
                Ldoor2.y = -500;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 8){
            if(dead == false){
                minibossfight();
                normalStuff();
            }
            if(player.overlaps(portal)){
                player.x = 100;
                player.y = 670;
                normalStageStuff();
                clearEverything();
                miniboss.visible = false;
                miniboss.collider = "none";
                miniboss.y = -500;
                MBSwordHitbox.y = -500;
                MBhealthBar.visible = false;
                MBLabel.y = -500;
                MBLabel2.y = -500;
                MBLabel3.y = -500;
                clearMBSlash();
                MBArena.visible = false;
                pillar1.visible = false; pillar2.visible = false; pillar3.visible = false; pillar4.visible = false;
                MBBuff.y = -500;
                healthUp.x = 1120;
                healthUp.y = 550;
            }
        }
        else if(stage == 9){
            portal.x = 1150;
            portal.y = 50;
            if(dead == false){
                level9();
                normalStuff();
            }
            if(player.overlaps(portal)){
                player.x = 100;
                player.y = 670;
                healthUp.y = -500;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 10){
            label.y = -500;
            portal.x = 1150;
            portal.y = 90;
            if(dead == false){
                lever.x = 550; lever.y = 350;
                level10();
                normalStuff();
            }
            if(player.overlaps(portal)){
                lever.y = -500;
                gearSprite.y = -500;
                player.x = 100;
                player.y = 100;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 11){
            portal.x = 990;
            portal.y = 225;
            if(dead == false){
                lever.x = 540; lever.y = 700;
                level11();
                normalStuff();
            }
            if(player.overlaps(portal)){
                lever.y = -500;
                gearSprite.y = -500;
                player.x = 100;
                player.y = 600;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 12){
            portal.x = 1150;
            portal.y = 50;
            if(dead == false){
                lever.x = 100; lever.y = 120;
                level12();
                normalStuff();
            }
            if(player.overlaps(portal)){
                lever.y = -500;
                gearSprite.y = -500;
                gearSprite2.y = -500;
                player.x = 100;
                player.y = 600;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 13){
            portal.x = 110;
            portal.y = 30;
            if(dead == false){
                lever.x = 1075; lever.y = 680;
                lever2.x = 560; lever2.y = 360;
                level13();
                normalStuff();
            }
            if(player.overlaps(portal)){
                lever.y = -500;
                lever2.y = -500;
                gearSprite.y = -500;
                gearSprite2.y = -500;
                player.x = 100;
                player.y = 50;
                normalStageStuff();
                clearEverything();
            }
        }
        else if(stage == 14){
            portal.x = 500;
            portal.y = 350;
            if(dead == false){
                lever.x = 600; lever.y = 680;
                lever2.x = 1070; lever2.y = 70;
                level14();
                normalStuff();
            }
            if(player.overlaps(portal)){
                lever.y = -500;
                lever2.y = -500;
                gearSprite.y = -500;
                gearSprite2.y = -500;
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
            if(dead == false){
                Ldoor.y = -500;
                Ldoor2.y = -500;
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
            if(dead == false){
                Ldoor.y = -500;
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
        else if(stage == bossStage+1){
            background("Yellow");
            text("Congratulations! You win!.", 500,500);
            hideEverything();
        }

        if(debugStuff) text("Stage: " + stage, 100, 50);
        if(debugStuff) text("Direction: " + direction, 100, 80);
        if(debugStuff) text("Boss x: " + miniboss.x, 100, 110);
        if(debugStuff) text("Bullets: " + turretBulletGroup.length, 100, 130);
    }

    if(loadingCooldown < 100 && paused == false){
        label3.layer = allSprites._getTopLayer() + 1;
        textSprite("Your progress has been restored.", 600, 100, label3);
        loadingCooldown++;
    }
}

function clearEverything(){
    clearTurret();
    clearTurretBullet();
    clearBlocks();
    clearSlimes();
    clearLava();
    clearBox();
    clearDashTrails();
    clearPoisonGas();
    clearMBSlash();
    Ldoor.y = -500;
    Ldoor2.y = -500;
    interactIndicator.y = -500;
    interactIndicatorGear.y = -500;
}

function mousePressed() {
    if(stage == -1){
        userStartAudio(); 
        backgroundMusic.loop();
        backgroundMusic.setVolume(backgroundMusicVar);
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

    MBhealthBar = new Sprite(600, 80, 50, 25); MBhealthBar.visible = false;
    MBhealthBar.colour = "red";
    MBhealthBar.collider = "none";

    backgroundMusicBar = new Sprite(600, 400, 100, 50); backgroundMusicBar.colour = "lightblue"; backgroundMusicBar.collider = "none"; backgroundMusicBar.visible = false;
    soundEffectBar = new Sprite(600, 550, 100, 50); soundEffectBar.colour = "lightblue"; soundEffectBar.collider = "none"; soundEffectBar.visible = false;
    speechSoundBar = new Sprite(600, 700, 100, 50); speechSoundBar.colour = "lightblue"; speechSoundBar.collider = "none"; speechSoundBar.visible = false;

    castleGate = new Sprite(castleGateImage, 1100, 550, 0, 0);
    castleGate.collider = "none";
    castleGate.visible = false;

    gearSprite = new Sprite(gear,-550,-500,50,50); 
    if(debugStuff) gearSprite.debug = false;
    gearSprite.scale.x = 0.3;
    gearSprite.scale.y = 0.3;
    gearSprite.collider = "static";

    gearSprite2 = new Sprite(gear,-550,-500,50,50); 
    if(debugStuff) gearSprite2.debug = false;
    gearSprite2.scale.x = 0.3;
    gearSprite2.scale.y = 0.3;
    gearSprite2.collider = "static";


    MBSwordHitbox = new Sprite(300, 300, 80, 120, "none");
    MBSwordHitbox.debug = true;
    MBSwordHitbox.visible = false;
    
    tp = new Sprite(100,200,50,50);
    tp.scale.x = 0.15;
    tp.scale.y = 0.15;
    tp.collider = "none";

    boom = new Sprite(-200, -200, 80, 80);
    boom.collider = "none";

    MBboom = new Sprite(-200, -200, 160, 160);
    MBboom.collider = "none";

    pillar1 = new Sprite(pillar1Image, 150, 514, 10, 10, "none"); pillar1.visible = false;
    pillar2 = new Sprite(pillar2Image, 820, 680, 10, 10, "none"); pillar2.visible = false;
    pillar3 = new Sprite(pillar3Image, 200, 640, 10, 10, "none"); pillar3.visible = false;
    pillar4 = new Sprite(pillar3Image, 1100, 613, 10, 10, "none"); pillar4.visible = false;
    pillar1.image.scale = 0.6;
    pillar2.image.scale = 0.6;
    pillar3.image.scale = 0.6; pillar3.rotation = -20;
    pillar4.image.scale = 0.6;

    swordHitBox = new Sprite(300,300, 40,60);
    swordHitBox.debug = true;
    swordHitBox.collider = "none";

    boss = new Sprite(bossImage, -100,-100,20,20);
    boss.scale.x = 0.2;
    boss.scale.y = 0.2;
    boss.visible = false;
    boss.collider = "static";

    miniboss = new Sprite(MBIdleFrames[0], 600, -670, 60, 130, "dynamic");
    miniboss.visible = false;
    if(debugStuff) miniboss.debug = true;
    miniboss.image.offset.y = -10;
    miniboss.image.scale.x = 3;
    miniboss.image.scale.y = 3;

    MBEyeEffect = new Sprite(-500, -500, 0, "none");
    drawMBEyeEffect();

    MBBuff = new Sprite(MBBuffFrames[0], -500, -500, 80, 80);
    if(debugStuff) MBBuff.debug = true; 
    MBBuff.collider = "none";

    MBFightBuff = new Sprite(MBBuffFrames[0], -500, -500, 80, 80, "none");

    player = new Sprite(idle, 100,200,50,50);
    if(debugStuff) player.debug = true; 
    player.collider = "dynamic";

    MBFlashAttack = new Sprite(0, -500, 350, 250, "none");
    if(debugStuff) MBFlashAttack.debug = true; 

    MBFinalAttack = new Sprite(0, -500, 1100, 250, "none");
    if(debugStuff) MBFinalAttack.debug = true; 

    parryEffect = new Sprite(-500, -500, 0, 0, "none");
    if(debugStuff) parryEffect.debug = true;

    ground = new Sprite(dirt, 600,800,1200,100);
    ground.collider = "static";
    if(debugStuff) ground.debug = false;

    MBArena = new Sprite(MBArenaImage, 625, 800, 1200, 100);
    MBArena.image.scale.x = 0.90;
    MBArena.image.scale.y = 0.54;
    MBArena.collider = "none";
    MBArena.visible = false;

    resizeThings();
    portal = new Sprite(portal2, 200,200,120,120);
    if(debugStuff) portal.debug = true;
    portal.scale = 0.35;
    portal.collider = "none";

    healthUp = new Sprite(hpUp, -200,200,750,750);
    healthUp.scale.x = 0.03;
    healthUp.scale.y = 0.03;
    if(debugStuff) healthUp.debug = false;
    healthUp.collider = "static";
    healthUp.y = -500;

    Ldoor = new Sprite(door, -200,600,200,200);
    Ldoor.scale.x = 0.5;
    Ldoor.scale.y = 0.5;
    if(debugStuff) Ldoor.debug = false;
    Ldoor.collider = "static";
    Ldoor.y = -500;

    lever = new Sprite(leverImage, -1100,700,400,400);
    lever.scale.x = 0.1;
    lever.scale.y = 0.1;
    if(debugStuff) lever.debug = false;
    lever.collider = "static";

    Ldoor2 = new Sprite(door, -200,600,200,200);
    Ldoor2.scale.x = 0.5;
    Ldoor2.scale.y = 0.5;
    if(debugStuff) Ldoor2.debug = false;
    Ldoor2.collider = "static";
    Ldoor2.y = -500;

    lever2 = new Sprite(leverImage, -1100,700,400,400);
    lever2.scale.x = 0.1;
    lever2.scale.y = 0.1;
    if(debugStuff) lever2.debug = false;
    lever2.collider = "static";
    
    bossSword = new Sprite(swordImage, -200,200,50,400);
    if(debugStuff) bossSword.debug = false;
    bossSword.collider = "static";
    bossSword.visible = false;

    bossSwordShadow = new Sprite(swordImageShadow, -1200,200,300,50);
    if(debugStuff) bossSwordShadow.debug = false;
    bossSwordShadow.collider = "dynamic";
    bossSwordShadow.visible = false;

    laser = new Sprite(laserImage, -200,200,140,475);
    laser.scale.y = 1.3;
    laser.collider = "static";
    if(debugStuff) laser.debug = false;
    laser.visible = false;

    darkbox = new Sprite(shadowBox,-200,200,250,250);
    darkbox.scale.x = 0.2;
    darkbox.scale.y = 0.2;
    darkbox.visible = false;
    if(debugStuff) darkbox.debug = false;
    darkbox.collider = "dynamic";

    finalAttackSprite = new Sprite(shadowBox,200,200,2500,750);
    finalAttackSprite.scale.x = 8;
    finalAttackSprite.scale.y = 2;
    finalAttackSprite.collider = "none";
    finalAttackSprite.visible = false;

    for(let i = 0; i < 6; i++){
        arrowListDown[i] = new Sprite(arrowD, -1000,100,20,275);
        if(debugStuff) arrowListDown[i].debug = false;
        arrowListDown[i].collider = "static";
        arrowListDown[i].visible = false;

        arrowListRight[i] = new Sprite(arrowR, 1400,100,275,20);
        if(debugStuff) arrowListRight[i].debug = false;
        arrowListRight[i].collider = "dynamic";
        arrowListRight[i].visible = false;

        arrowListLeft[i] = new Sprite(arrowL, 1400,100,275,20);
        if(debugStuff) arrowListLeft[i].debug = false;
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

    pauseMenu = new Sprite(pauseMenuImage, 600, 500, 300, 300, "none");
    controlsButton = new Sprite(controlsButtonImage, 600, 385, 450, 85, "none");
    volumeButton = new Sprite(volumeButtonImage, 600, 485, 450, 85, "none");
    saveButton = new Sprite(saveButtonImage, 600, 585, 450, 85, "none");
    clearButton = new Sprite(clearButtonImage, 600, 685, 450, 85, "none");
    pauseMenuBlank = new Sprite(pauseMenuBlankImage, 600, 500, 300, 300, "none");
    backButton = new Sprite(backButtonImage, 600, 240, 450, 85, "none");
    pauseMenu.visible = false;
    controlsButton.visible = false;
    volumeButton.visible = false;
    saveButton.visible = false;
    pauseMenuBlank.visible = false;
    backButton.visible = false;
    clearButton.visible = false;
    mouseRepresenter = new Sprite(10, 10, 1, 1, "none");
    mouseRepresenter.visible = false;

    interactIndicator = new Sprite(-200, -500, 50, 50, "none"); interactIndicator.shape = 'box';
    interactIndicator.color = color(0, 0, 0, 0);
    interactIndicator.stroke = "lightgreen"; 
    interactIndicator.strokeWeight = 4;
    
    interactIndicatorGear = new Sprite(-200, -500, 50, 50, "none"); interactIndicatorGear.shape = 'box';
    interactIndicatorGear.color = color(0, 0, 0, 0);
    interactIndicatorGear.stroke = "purple"; 
    interactIndicatorGear.strokeWeight = 4;

}


function basicMovement(){
    if(player.collides(laser)) health-=15;

    if(player.overlapping(miniboss));
    if(player.overlapping(swordHitBox));

    if(player.collides(healthUp)){
        healthUp.y = -500;
        health += 10;
        gotten = true;
        tempMaxHealth = maxHealth + 10;
    }
    
    if(health <= 0){
        dead = true;
        gotten = false;
    }
    player.scale.x = 0.2;
    player.scale.y = 0.2;
    
    if(MBBuffGotten) handleDash();
    
    if(kb.pressing("ArrowRight") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == false && isHooked2 == false){
        player.x = player.x + 10 + speedBuff;
        counter+=0.1;
        player.image = walkFrames[Math.round(counter)];
        direction = true;

        if(counter > 6) counter = 1;
    }
    else if(direction == true && player.vel.y == 0 && respawned == false) player.image = standFrame;
    if(kb.pressing("ArrowRight") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == true && isHooked2 == false){
        direction = true;
        velocity.x += 0.1;
    }
    if(kb.pressing("ArrowRight") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == false && isHooked2 == true){
        direction = true;
        velocity.x += 0.1;
    }
    
    if(kb.pressing("ArrowLeft") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == false && isHooked2 == false){
        player.x = player.x - 10 - speedBuff;
        counterL+=0.1;
        player.image = LwalkFrames[Math.round(counterL)];
        direction = false;

        if(counterL > 6) counterL = 1;
    }
    else if(direction == false && player.vel.y == 0 && respawned == false) player.image = LstandFrame;
    if(kb.pressing("ArrowLeft") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == true && isHooked2 == false){
        direction = false;
        velocity.x -= 0.1;
    }
    if(kb.pressing("ArrowLeft") && kb.pressing("ArrowDown") == false && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == false && isHooked2 == true){
        direction = false;
        velocity.x -= 0.1;
    }
        
    if(kb.pressing("ArrowDown") && direction == true && kb.pressing("f") == false && kb.pressing("s") == false){
        player.image = crouchFrame;
        player.height = 240;
        
        if(kb.pressing("ArrowRight") && stamina >= 4 && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == false && isHooked2 == false){
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
        
        if(kb.pressing("ArrowLeft") && stamina >= 4 && kb.pressing("f") == false && kb.pressing("s") == false && isHooked == false && isHooked2 == false){
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

    if(kb.presses("e") && d < 70) open = !open;
    
    if(open == true) lever.image = gs("lever2.png");
    
    if(open == false) lever.image = gs("lever.png");

    d2 = Math.sqrt(Math.pow(player.x - lever2.x, 2) + Math.pow(player.y - lever2.y, 2));

    if(kb.presses("e") && d2 < 70) open2 = !open2;
    
    if(open2 == true) lever2.image = gs("lever2.png");
    
    if(open2 == false) lever2.image = gs("lever.png");

    if(d < 70) {interactIndicator.x = lever.x; interactIndicator.y = lever.y;}
    else if(d2 < 70) {interactIndicator.x = lever2.x; interactIndicator.y = lever2.y;}
    else interactIndicator.y = -500;

    let d3 = Math.sqrt(Math.pow(player.x - MBBuff.x, 2) + Math.pow(player.y - MBBuff.y, 2));
    if(d3 < 70) {interactIndicator.x = MBBuff.x; interactIndicator.y = MBBuff.y;}
    else interactIndicator.y = -500;
    if(kb.presses("e") && d3 < 70) MBBuffGotten = true;
}

function resistance(){
    if(stage != bossStage - 1){
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
        if(player.x < 100 && sliding == true){
            player.x += (15 + speedBuff);
        }
    }
 } 

function pjump(){
    player.rotation = 0;

    if(player.collides(ground) || dashR || dashL) player.vel.y = 0;
    else if(isHooked == false) player.vel.y = player.vel.y+2;
    
    if((kb.pressing("s") == false && kb.pressing("f") == false && kb.pressing("ArrowUp") && (player.collides(ground) || player.collides(gearSprite) || player.collides(gearSprite2))) && stamina >= 20){
        player.vel.y = -20;
        stamina -= 20;
        jumpAni();
    }

    blocksGroup.forEach(spriteB => {
        //Gotta fix this part
        /*
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
        */
        if(player.collides(spriteB)){
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
    gearSprite.y = -500;
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
        if(health <= Math.max(maxHealth, tempMaxHealth) - 10) health+=10;
        else health = Math.max(maxHealth, tempMaxHealth);
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
    tempMaxHealth = maxHealth;
    open = false;
    open2 = false;
    isHooked = false;
    isHooked2 = false;
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
    if(MBBuffGotten){
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
    
    if(respawned == false && !cutScene) {
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

function level0(){
    if(blocksPlaced == false){
        spawnBlock(600, 680, 180, 120, "None", 0);
        blocksPlaced = true;
    }
    textSprite("Welcome. Arrows keys to move. D to teleport to your previous location. \nPrevious location is shown by the red star.", 600, 400, label);
}

function level1(){
    if(blocksPlaced == false){
        spawnBlock(400, 570, 150, 250, "None", 0);
        spawnBlock(900, 480, 70, 60, "None", 0);
        spawnBlock(1050, 350, 70, 60, "None", 0);
        spawnBlock(1050, 630, 70, 60, "None", 0);
        blocksPlaced = true;
    }
    textSprite("Hold down arrow and/or right or left to slide. A to swing your sword.", 600, 400, label);
}


function level2(){
    if(lavaPlaced == false){
        spawnLava(600, 780, 600, 150);
        lavaPlaced = true;
    }
    
    gearSprite.x = 500;
    gearSprite.y = 50;
    hookThing();

    if(blocksPlaced == false){
        spawnBlock(120, 350, 300, 230, "None", 0);
        spawnBlock(900, 350, 300, 230, "None", 0);
        blocksPlaced = true;
    }
    textSprite("Hold space when near a gear to hook onto it. R to respawn if you die.", 600, 600, label);
}


function level3(){
    if(boxPlaced == false){
        spawnBox(950, 700, 125, 95);
        boxPlaced = true;
    }
    gearSprite.y = -500;
    healthUp.y = -500;

    textSprite("Press q to shoot a fireball. \nFireballs can burn blocks of wood.", 890, 170, label);
    textSprite("Bullets hurt. You can destroy them \nwith your sword or fireballs.", 890, 230, label2);

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
            
            if(debugStuff) text("Y-vel: " + spriteS.vel.y, 150, 100);
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
                slimesData[index].EHealth -= (300 + damageBuff);
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
                spriteS.remove();
                slimesGroup.remove(spriteS);
                slimesData.splice(index, 1);
            }
        }
    });
   
}

function level4(){
    textSprite("Try hitting the slimes with your fireballs or sword.", 600, 500, label);
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


function level5(){
    textSprite("Press e to interact with levers.", 900, 100, label);
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 100; Ldoor.y = 150;}
    
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


function level6(){
    textSprite("Press S to charge mana and stamina\nPress S and A to critical strike.", 950, 60, label);
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 1000; Ldoor.y = 689;}
    
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
        spawnBlock(900, 530, 600, 220, "None", 0);//510
        blocksPlaced = true;
    }
  
    if(turretPlaced == false){
        spawnTurret(15, 700, 80, "e");
        turretPlaced = true;
    }  
}

function level7(){
    if(boxPlaced == false){
        spawnBox(700, 370, 125, 95);
        spawnBox(680, 590, 125, 95);
        boxPlaced = true;
    }

    gearSprite.x = 600; 
    gearSprite.y = 0;
    hookThing();
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 1015; Ldoor.y = 205;}
    if(open2 == true) Ldoor2.y = -500;
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

function minibossfight(){
    if(MBIntroTimer < 240){ //240
        MBArena.visible = true;
        pillar1.visible = true; pillar2.visible = true; pillar3.visible = true; pillar4.visible = true;
        miniboss.visible = true;
        portal.y = -500;
        swordHitBox.y = -500;
        MBSwordHitbox.y = -500;
        miniboss.y = 670;
        MBIntroTimer++;
        camera.x = lerp(camera.x, miniboss.x, 0.05);
        camera.y = lerp(camera.y, miniboss.y, 0.05);
        camera.zoom = lerp(camera.zoom, 1.5, 0.05);
        cutScene = true;
        miniboss.mirror.x = false;
        let randomNumber = Math.floor(Math.random() * 3) - 1.5;
        let randomNumber2 = Math.floor(Math.random() * 3) - 1.5;
        let randomNumber3 = Math.floor(Math.random() * 3) - 1.5;

        textSprite("THE", width/2-132.5+randomNumber, height/2+randomNumber2, MBLabel);
        if(MBIntroTimer > 50) textSprite("NAMELESS", width/2-10+randomNumber2, height/2+randomNumber3, MBLabel2);
        if(MBIntroTimer > 100) textSprite("KNIGHT", width/2+140+randomNumber3, height/2+randomNumber, MBLabel3);
        MBLabel.textSize = 30;
        let currentBarHeight = map(MBIntroTimer, 0, 100, 0, 160, true);
        topBar.x = camera.x;
        topBar.y = miniboss.y - 275;
        topBar.width = width; 
        topBar.height = currentBarHeight;
        botBar.x = camera.x;
        botBar.y = miniboss.y + 275;
        botBar.width = width; 
        botBar.height = currentBarHeight;
        counterMBIdle+=0.1;
        miniboss.image = MBIdleFrames[Math.floor(counterMBIdle)]
        if(counterMBIdle > MBIdleFrames.length-1) counterMBIdle = 0;
        miniboss.image.offset.y = -10;
        miniboss.image.scale.x = 3;
        miniboss.image.scale.y = 3;

        miniboss.color = color(0, 0, 0);
        return;
    }
    else if(cutScene == true){
        camera.zoom = lerp(camera.zoom, 1, 0.05);
        topBar.y = -200;
        botBar.y = -200;
        MBLabel2.y = -100;
        MBLabel3.y = -100;
    }
    if(camera.zoom < 1.01 && cutScene){
        camera.zoom = 1;
        cutScene = false;
        miniboss.vel.y = -1;
    }
    if(MBDeath == false && StartMBFinalAttack == false){
        if(!MBCrouch && counterMBFlashAttack < 10 && miniboss.x > player.x && !MBAirAttack) {MBDirection = false; MBSwordHitbox.x = miniboss.x - 80;}
        else if(!MBCrouch && counterMBFlashAttack < 10 && miniboss.x <= player.x && !MBAirAttack) {MBDirection = true; MBSwordHitbox.x = miniboss.x + 80;}

        if(!MBCrouch && counterMBFlashAttack < 10 && miniboss.x > player.x && !MBAirAttack && !MBSliding && Math.abs(miniboss.x - player.x) > MBMoveDist){
            miniboss.x -= 5;
            counterMBRun+=0.1;
            miniboss.image = MBRunFrames[Math.floor(counterMBRun)];
            if(counterMBRun > MBRunFrames.length-1) counterMBRun = 0;
            MBRunning = true;
        }
        else if(!MBCrouch && counterMBFlashAttack < 10 && miniboss.x <= player.x && !MBAirAttack && !MBSliding && Math.abs(miniboss.x - player.x) > MBMoveDist){
            miniboss.x += 5;
            counterMBRun+=0.1;
            miniboss.image = MBRunFrames[Math.floor(counterMBRun)];
            if(counterMBRun > MBRunFrames.length-1) counterMBRun = 0;
            MBRunning = true;
        }
        else MBRunning = false;

        if(MBDirection == true && MBSliding == false) miniboss.mirror.x = false;
        else if(MBSliding == false) miniboss.mirror.x = true;

        if(MBSliding == false) MBdecisionCooldown++;
        if(MBdecisionCooldown > MBdecisionWait){
            MBdecisionWait = 200;
            MBdecisionCooldown = 0;
            MBdecision = Math.floor(Math.random() * 4) + 1;
            MBMoveDist = Math.random() * 200 + 200;
        }
        
        if(!miniboss.colliding(ground)) miniboss.vel.y += 2;
        else if(miniboss.colliding(ground) && MBInAir == true){
            shakeAmount = 20;
            MBInAir = false;
            MBSwordHitbox.rotation = 0;
            spawnMBSlash(miniboss.x+50, ground.y - 100, "GS", true);
            spawnMBSlash(miniboss.x-50, ground.y - 100, "GS", false);
        }
        if(miniboss.colliding(ground)) {MBjumpAttackCooldown++; MBSwordHitbox.rotation = 0;}
        miniboss.rotation = 0;
        if(!MBSliding) miniboss.vel.x = 0;

        MBSwordHitbox.visible = true;
        MBSwordHitbox.y = miniboss.y;
        MBhealthBar.visible = true;
        visualMBHealth = lerp(visualMBHealth, MBHealth, 0.05);
        let maxWidth = 600;
        let healthRatio = visualMBHealth / 2500;
        MBhealthBar.width = maxWidth * healthRatio;
        MBhealthBar.x = 300 + MBhealthBar.width / 2;
        MBSlashData.forEach(spriteMBS => {spriteMBS.update();});
        applyShake();
        displayParryEffect();

        if(counterMBFlashAttack < 10 && !MBAirAttack && !MBRun && !MBAttack && !MBJump && !MBHurt && !MBDeath && !MBRunning && !MBCrouch && !MBSliding){
            counterMBIdle+=0.1;
            miniboss.image = MBIdleFrames[Math.floor(counterMBIdle)];
            if(counterMBIdle > MBIdleFrames.length-1) counterMBIdle = 0;
        }
        if(MBdecision == 1){  //Dash attack
            counterMBCrouch = 0;
            MBCrouch = true;
            MBdecision = 0;
        }
        counterMBFlashAttack-=0.5;
        if(MBCrouch){
            counterMBCrouch+= 0.5;
            miniboss.image = MBCrouchFrames[Math.floor(counterMBCrouch)];
            shakeAmount = map(counterMBCrouch, 0, MBCrouchFrames.length-1, 0, 1);
            if(counterMBCrouch > MBCrouchFrames.length-1){
                MBCrouch = false;
                if(MBDirection == true){miniboss.x += Math.min(350, (Math.abs(miniboss.x - 1200)));}
                if(MBDirection == false){miniboss.x -= Math.min(350, (Math.abs(miniboss.x - 0)));}
                counterMBFlashAttack = 50;
                counterMBFA = 0;
            }

            MBFightBuff.x = miniboss.x;
            MBFightBuff.y = miniboss.y+10;
            if(counterMBFightBuff < 4) counterMBFightBuff += 0.1;
            else counterMBFightBuff += buffIncrease;
            if(buffIncrease < 0.2) buffIncrease += 0.001;
            if(counterMBFightBuff > 10) counterMBFightBuff = 4;
            MBFightBuff.image = MBBuffFrames[Math.floor(counterMBFightBuff)];
            MBFightBuff.opacity = random(0.6, 0.8);
            MBFightBuff.image.scale = random(0.03, 0.04);
            
        }
        else{
            counterMBFightBuff = 0;
            MBFightBuff.y = -500;
        }
        if(counterMBFlashAttack == 40){
            if(MBDirection == true) MBFlashAttack.x = miniboss.x - 250;
            if(MBDirection == false) MBFlashAttack.x = miniboss.x + 250;
            MBFlashAttack.y = 620;
            shakeAmount = 15;
        }
        if(counterMBFlashAttack < 40){
            counterMBFA += 0.25;
            MBFlashAttack.image = MBFinalAttackFrames[Math.floor(counterMBFA)];
            MBFlashAttack.image.scale.x = 0.20 + random(-0.01, 0.01);
            MBFlashAttack.image.scale.y = 0.15 + random(-0.01, 0.01);
            MBFlashAttack.opacity = random(0.3, 0.5);
            if(counterMBFA > MBFinalAttackFrames.length-1){ counterMBFA = 0;}
        }
        if(counterMBFlashAttack <= 20) {MBFlashAttack.y = -500; }

        if(MBFlashAttack.overlapping(player)){health -= 1 * pResistance; player.opacity = random(0.7, 1);}
        else player.opacity = 1;
        
        if(MBdecision == 2 && MBAttack == false) {counterEyeEffect = 0; MBdecision = 0}
        if(counterEyeEffect == 0) MBAttackNum = Math.floor(Math.random() * 3); //Slash Attack

        counterEyeEffect++;
        if(counterEyeEffect < 50){
            if(MBAttackNum == 1) MBEyeEffect.image = MBEyeEffectImageS;
            else if(MBAttackNum == 2) MBEyeEffect.image = MBEyeEffectImage_S;
            else if(MBAttackNum == 0) MBEyeEffect.image = MBEyeEffectImageDS;
            MBEyeEffect.x = miniboss.x + (MBDirection ? 5 : -12);
            MBEyeEffect.y = miniboss.y - 60;
        } else MBEyeEffect.y = -500;

        if(counterEyeEffect == 50){
            MBAttack = true;
            if(MBAttackNum == 0) {
                counterMBAttack = 0; 
                counterMBDS = 0;
                spawnMBSlash(miniboss.x, miniboss.y, "DS", MBDirection);
            }
            if(MBAttackNum == 1) {counterMBAttack = 9; spawnMBSlash(miniboss.x, miniboss.y+15, "S", MBDirection);}
            if(MBAttackNum == 2) {counterMBAttack = 14; spawnMBSlash(miniboss.x, miniboss.y, "SS", MBDirection);}
        }
        counterMBDS++;
        if(counterMBDS == 30) spawnMBSlash(miniboss.x, miniboss.y, "DS", MBDirection);
        if(MBAttack == true){
            counterMBAttack += 0.2;
            miniboss.image = MBAttacksFrames[Math.floor(counterMBAttack)];
            if(counterMBAttack > 9 && MBAttackNum == 0) {MBAttack = false;}
            if(counterMBAttack > 13 && MBAttackNum == 1) {MBAttack = false;}
            if(counterMBAttack > 19 && MBAttackNum == 2) {MBAttack = false;}
        }

        if(MBdecision == 3 && MBAttack2 == false) {counterEyeEffect2 = 0; MBdecision = 0; MBdecisionWait = 400;}
        if(counterEyeEffect2 == 0) {
            for(let i = 0; i < 3; i++){
                if(i == 0) MBAttackNum2[i] = Math.floor(Math.random() * 3);
                else{
                    let newAttackNum = Math.floor(Math.random() * 3);
                    while(newAttackNum == MBAttackNum2[i-1]){
                        newAttackNum = Math.floor(Math.random() * 3);
                    }
                    MBAttackNum2[i] = newAttackNum;
                }
            }
        }
        counterEyeEffect2++;
        if(counterEyeEffect2 < 20){
            if(MBAttackNum2[0] == 1) MBEyeEffect.image = MBEyeEffectImageS;
            else if(MBAttackNum2[0] == 2) MBEyeEffect.image = MBEyeEffectImage_S;
            else if(MBAttackNum2[0] == 0) MBEyeEffect.image = MBEyeEffectImageDS;
            MBEyeEffect.x = miniboss.x + (MBDirection ? 5 : -12);
            MBEyeEffect.y = miniboss.y - 60;
        }
        else if(counterEyeEffect2 < 40){
            if(MBAttackNum2[1] == 1) MBEyeEffect.image = MBEyeEffectImageS;
            else if(MBAttackNum2[1] == 2) MBEyeEffect.image = MBEyeEffectImage_S;
            else if(MBAttackNum2[1] == 0) MBEyeEffect.image = MBEyeEffectImageDS;
            MBEyeEffect.x = miniboss.x + (MBDirection ? 5 : -12);
            MBEyeEffect.y = miniboss.y - 60;
        } 
        else if(counterEyeEffect2 < 60){
            if(MBAttackNum2[2] == 1) MBEyeEffect.image = MBEyeEffectImageS;
            else if(MBAttackNum2[2] == 2) MBEyeEffect.image = MBEyeEffectImage_S;
            else if(MBAttackNum2[2] == 0) MBEyeEffect.image = MBEyeEffectImageDS;
            MBEyeEffect.x = miniboss.x + (MBDirection ? 5 : -12);
            MBEyeEffect.y = miniboss.y - 60;
        }
        else if(MBdecisionWait == 400) MBEyeEffect.y = -500;
        if(counterEyeEffect2 == 60) MBcomboIndex = 0;

        if(MBcomboIndex < 3 && !MBAttack2){
            let currentAttack = MBAttackNum2[MBcomboIndex];
            MBAttack2 = true;
            counterMBDS2 = 0;

            if(currentAttack == 0) {counterMBAttack2 = 0; spawnMBSlash(miniboss.x, miniboss.y, "DS", MBDirection);}
            if(currentAttack == 1) {counterMBAttack2 = 9; spawnMBSlash(miniboss.x, miniboss.y+15, "S", MBDirection);}
            if(currentAttack == 2) {counterMBAttack2 = 14; spawnMBSlash(miniboss.x, miniboss.y, "SS", MBDirection);}
            
        }
        if(MBAttack2 == true){
            let currentAttack = MBAttackNum2[MBcomboIndex];
            if(currentAttack == 0){
                counterMBDS2++;
                if(counterMBDS2 == 30) spawnMBSlash(miniboss.x, miniboss.y, "DS", MBDirection);
            }
            
            counterMBAttack2 += 0.2;
            miniboss.image = MBAttacksFrames[Math.floor(counterMBAttack2)];
            if(counterMBAttack2 > 9 && currentAttack == 0){ MBcomboIndex++; MBAttack2 = false;}
            if(counterMBAttack2 > 13 && currentAttack == 1){ MBcomboIndex++; MBAttack2 = false;}
            if(counterMBAttack2 > 19 && currentAttack == 2){ MBcomboIndex++; MBAttack2 = false;}
        }
        
        if(MBdecision == 4){  //Slide attack
            counterMBSlide = 0;
            MBSliding = true;
            MBdecision = 0;
            MBexplosionSummoned = true;
            MBexplodeX = miniboss.x;
            MBexplodeY = miniboss.y; 
            if(player.x > miniboss.x){MBSlideDirection = true; miniboss.vel.x = -30;}
            else if(player.x <= miniboss.x){MBSlideDirection = false; miniboss.vel.x = 30;}
            miniboss.vel.y = -10;
            
        }
        
        if(MBSliding){
            if(miniboss.width != 120) {
                miniboss.width = 120;
                miniboss.height = 30;
            }
            counterMBSlide+=0.5;
            miniboss.image = MBSlideFrames[Math.floor(counterMBSlide)];
            if(counterMBSlide > 8) counterMBSlide = 2;

            if(MBSlideDirection && counterMBSlide > 3) miniboss.vel.x = 10;
            else if(!MBSlideDirection && counterMBSlide > 3) miniboss.vel.x = -10;
            if((miniboss.x < 40 && !MBSlideDirection) || (miniboss.x > 1160 && MBSlideDirection)){
                MBSliding = false;
                miniboss.vel.x = 0;
                shakeAmount = 20;
            }
            if(player.overlapping(miniboss)){
                health -= 5 * pResistance;
                player.vel.y = -30;
                if(MBSlideDirection == true) player.vel.x = -10;
                if(MBSlideDirection == false) player.vel.x = 10;
                MBSliding = false;
            }
        }
        else{
            if(miniboss.width != 60) {
                miniboss.width = 60;
                miniboss.height = 130;
            }
        }
        

        if(MBSwordHitbox.overlapping(player) && MBAttack == true && HitByMB == false){
            if(!playerIsHurt){
                HitByMB = true;
                health -= 30 * pResistance;
                playerIsHurt = true;
                counterH = 0;
        
                if(MBDirection == false){
                    playerHurtDirection = "r";
                }
                else{
                    playerHurtDirection = "l";
                }
            }
        }
        if(swordHitBox.overlapping(miniboss) && swordAttackType == 1 && MBHurt == false && counterMBHurt > 4 && MBCrouch){
            MBHealth -= 0.5 * (100 + damageBuff);
            MBHurt = true;
            counterMBHurt = 0;
            MBNameFlicker = 5;
        }
        else if(swordHitBox.overlapping(miniboss) && swordAttackType == 1 && MBHurt == false && counterMBHurt > 4) {
            MBHealth -= (100 + damageBuff);
            MBHurt = true;
            counterMBHurt = 0;
            MBNameFlicker = 5;
        }
        if(swordHitBox.overlapping(miniboss) && swordAttackType == 2 && MBHurt == false && counterMBHurt > 4 && MBCrouch) {
            MBHealth -= 0.5 * (300 + damageBuff);
            MBHurt = true;
            counterMBHurt = 0;
            MBNameFlicker = 10;
        }
        else if(swordHitBox.overlapping(miniboss) && swordAttackType == 2 && MBHurt == false && counterMBHurt > 4) {
            MBHealth -= (300 + damageBuff);
            MBHurt = true;
            counterMBHurt = 0;
            MBNameFlicker = 10;
        }
        counterMBHurt += 0.1;
        if(MBHurt == true){
            miniboss.image = MBHurtFrames[Math.floor(counterMBHurt)];
            if(counterMBHurt > 2) MBHurt = false;
        }

        if(MBNameFlicker > 0){
            MBNameFlicker--;
            if(MBNameFlicker % 2 == 0) {MBLabel.textColor = "red"; MBhealthBar.color = "red";}
            else {MBLabel.textColor = "white"; MBhealthBar.color = "white";}
            MBNameShake = random(-5, 5);
        }
        else {
            MBLabel.textColor = "red";
            MBhealthBar.color = "red";
            MBNameShake = 0;
        }

        MBLabel.textSize = 20;
        textSprite("The Nameless Knight", 400 + MBNameShake, 50 + MBNameShake, MBLabel);

        if(MBHealth <= 0) StartMBFinalAttack = true;
        
        MBexplosionAnimation(MBexplodeX, MBexplodeY);
        if(Math.abs(player.x - miniboss.x) < 30 && MBJump == false && miniboss.colliding(ground) && MBjumpAttackCooldown > 20 && !MBCrouch && !MBSliding){
            MBjumpAttackCooldown = 0;
            MBJump = true;
            counterMBJump = 0;
            MBexplosionSummoned = true;
            MBexplodeX = miniboss.x;
            MBexplodeY = miniboss.y; 
            miniboss.vel.y = -40;
            MBInAir = true;
        }
        if(MBJump == true){
            counterMBJump += 0.2;
            miniboss.image = MBJumpFrames[Math.floor(counterMBJump)];
            if(counterMBJump > 7) MBJump = false;
        }

        if(MBInAir == true && miniboss.vel.y > 0 && MBAirAttack == false){
            MBAirAttack = true;
            MBJump = false;
            counterMBAirAttack = 0;
        }
        if(MBAirAttack == true){
            counterMBAirAttack += 0.15;
            miniboss.image = MBAirAttackFrames[Math.floor(counterMBAirAttack)];
            if(counterMBAirAttack > 6) MBAirAttack = false;
            if(miniboss.x < player.x) miniboss.x+=2;
            else miniboss.x-=2;
            MBSwordHitbox.x = miniboss.x;
            MBSwordHitbox.y = miniboss.y + 20;
            MBSwordHitbox.rotation = 90;
        }

        if(MBSwordHitbox.overlapping(player) && MBAirAttack == true && HitByMBAA == false){
            if(!playerIsHurt){
                HitByMBAA = true;
                health -= 40 * pResistance;
                playerIsHurt = true;
                counterH = 0;
        
                if(miniboss.x > player.x){
                    playerHurtDirection = "r";
                }
                else{
                    playerHurtDirection = "l";
                }
            }
        }
    }
    else if(MBDeath == false && StartMBFinalAttack == true){
        MBEyeEffect.y = -500;
        MBSwordHitbox.y = -500;
        miniboss.opacity = random(MBLower, MBUpper);
        applyShake();
        displayParryEffect();
        MBLabel.textSize = 20;
        textSprite("The Nameless Knight", 400 + MBNameShake, 50 + MBNameShake, MBLabel);
        if(MBNameFlicker > 0){
            MBNameFlicker--;
            if(MBNameFlicker % 2 == 0) {MBLabel.textColor = "red"; MBhealthBar.color = "red";}
            else {MBLabel.textColor = "white"; MBhealthBar.color = "white";}
            MBNameShake = random(-5, 5);
        }
        else{
            MBLabel.textColor = "red";
            MBhealthBar.color = "red";
            MBNameShake = 0;
        }
        MBhealthBar.width = 0;

        counterMBHurt += 0.1;
        if(MBHurt == true){
            miniboss.image = MBHurtFrames[Math.floor(counterMBHurt)];
            if(counterMBHurt > 2) MBHurt = false;
        }
        if(MBHurt == false && MBFinalDecision == false){
            if(player.x >= miniboss.x) MBDirection = false; //True = Right
            if(player.x < miniboss.x) MBDirection = true;
            MBFinalDecision = true;
        }
        if(MBDirection == true) miniboss.mirror.x = false;
        else miniboss.mirror.x = true;

        if(MBHurt == false && MBDirection == true && miniboss.x < 1050 && !MBFinalDecision3){
            miniboss.x += 20;
            counterMBRun+=0.4;
            miniboss.image = MBRunFrames[Math.floor(counterMBRun)];
            if(counterMBRun > MBRunFrames.length-1) counterMBRun = 0;
            if(miniboss.x >= 1050){
                MBFinalDecision3 = true;
                MBDirection = false;
            }
        }
        if(MBHurt == false && MBDirection == false && miniboss.x > 150 && !MBFinalDecision3){
            miniboss.x -= 20;
            counterMBRun+=0.4;
            miniboss.image = MBRunFrames[Math.floor(counterMBRun)];
            if(counterMBRun > MBRunFrames.length-1) counterMBRun = 0;
            if(miniboss.x <= 150){
                MBFinalDecision3 = true;
                MBDirection = true;
            }
        }
        
        if(!miniboss.colliding(ground)) miniboss.vel.y += 2;

        if(!MBFinalDecision2){
            if((MBDirection == true && miniboss.x >= 1000) || (MBDirection == false && miniboss.x <= 200)){
                counterMBCrouch = 0;
                MBCrouch = true;
                MBFinalDecision2 = true;
            }
        }
    
        counterMBFinalAttack -= 0.5;
        
        if(MBCrouch){
            counterMBCrouch+= 0.2;
            miniboss.image = MBCrouchFrames[Math.floor(counterMBCrouch)];
            shakeAmount = map(counterMBCrouch, 0, MBCrouchFrames.length-1, 0, 5);
            if(counterMBCrouch > MBCrouchFrames.length-1){
                MBCrouch = false;
                if(MBDirection == true){miniboss.x += Math.min(1050, (Math.abs(miniboss.x - 1150)));}
                if(MBDirection == false){miniboss.x -= Math.min(1050, (Math.abs(miniboss.x - 50)));}
                counterMBFinalAttack = 50;
                counterMBFinA = 0;
            }

            MBFightBuff.x = miniboss.x;
            MBFightBuff.y = miniboss.y+10;
            if(counterMBFightBuff < 4) counterMBFightBuff += 0.1;
            else counterMBFightBuff += buffIncrease;
            if(buffIncrease < 0.24) buffIncrease += 0.001;
            if(counterMBFightBuff > 10) counterMBFightBuff = 4;
            MBFightBuff.image = MBBuffFrames[Math.floor(counterMBFightBuff)];
            MBFightBuff.opacity = random(0.6, 0.8);
            MBFightBuff.image.scale = random(0.03, 0.06);
            
        }
        else{
            counterMBFightBuff = 0;
            MBFightBuff.y = -500;
        }
        if(counterMBFinalAttack == 40){
            if(MBDirection == true) MBFinalAttack.x = miniboss.x - 450;
            if(MBDirection == false) MBFinalAttack.x = miniboss.x + 450;
            MBFinalAttack.y = 620;
            shakeAmount = 40;
            camera.zoom = random(0.95, 1.05);
        }
        if(counterMBFinalAttack < 40){
            counterMBFinA += 0.5;
            MBFinalAttack.image = MBFinalAttackFrames[Math.floor(counterMBFinA)];
            MBFinalAttack.image.scale.x = 0.6 + random(-0.02, 0.02);
            MBFinalAttack.image.scale.y = 0.15 + random(-0.02, 0.02);
            MBFinalAttack.opacity = random(0.5, 1);
            if(counterMBFinA > MBFinalAttackFrames.length-1) counterMBFinA = 0;
        }
        if(counterMBFinalAttack <= 0) {MBFinalAttack.y = -500;}
        if(counterMBFinalAttack == 1) {MBDeath = true; MBFinalAttack.y = -500;}

        if(MBFinalAttack.overlapping(player)){health -= 2 * pResistance; player.opacity = random(0.5, 0.7);}
        else player.opacity = 1;

    }
    else{
        applyShake();
        camera.zoom = 1;
        player.opacity = 1;
        counterMBDeath += 0.1; //0.07
        if(counterMBDeath < 4) miniboss.image = MBDeathFrames[Math.floor(counterMBDeath)];
        miniboss.vel.y = 0;
        miniboss.collider = "none";
        MBhealthBar.visible = false;
        MBLabel.y = -100;

        if(MBBuffGotten == false){
            MBBuff.x = miniboss.x;
            MBBuff.y = miniboss.y-10;
            if(counterMBBuff < 4) counterMBBuff += 0.2;
            else counterMBBuff += 0.15;
            MBBuff.image = MBBuffFrames[Math.floor(counterMBBuff)];
            MBBuff.image.scale = 0.04;
            MBBuff.opacity = random(0.8, 1);
            if(counterMBBuff > 10) counterMBBuff = 4;
        }
        else{
            MBBuff.y = -500;
            portal.x = 1150;
            portal.y = 670;
        }
    }
    miniboss.image.offset.y = -10;
    miniboss.image.scale.x = 3;
    miniboss.image.scale.y = 3;
}

function applyShake(){
    if(shakeAmount > 0){
        camera.x += random(-shakeAmount, shakeAmount);
        camera.y += random(-shakeAmount, shakeAmount);
        shakeAmount *= 0.9; 
        if(shakeAmount < 0.1) shakeAmount = 0;
    }else{
        camera.x = lerp(camera.x, width / 2, 0.1); 
        camera.y = lerp(camera.y, height / 2, 0.1);
    }
}

function displayParryEffect(){
    if(parryCounter == 0 && direction == true){parryEffect.x = player.x+50; parryEffect.y = player.y;}
    if(parryCounter == 0 && direction == false){parryEffect.x = player.x-50; parryEffect.y = player.y;}
    if(parryCounter < 4){
        parryCounter+=0.2;
        parryEffect.image = parryEffectFrames[Math.floor(parryCounter)];
        parryEffect.image.scale = 0.1;
    } else parryEffect.y = -500;
}

function drawMBEyeEffect() {
    eyeGfx = createGraphics(60, 60);
    eyeGfx.clear(); 
    eyeGfx.push();
    eyeGfx.translate(30, 30); 
    eyeGfx.noStroke();
    for(let i = 0; i < 5; i++){
        eyeGfx.fill(0, 0, 255, 40 - (i * 8));
        eyeGfx.circle(0, 0, 10 + (i * 8));
    }
    eyeGfx.stroke(52, 119, 235);
    eyeGfx.strokeWeight(1);
    eyeGfx.line(-10, 0, 10, 0); //Horizontal
    eyeGfx.line(0, -10, 0, 10); //Vertical
    eyeGfx.stroke(255);
    eyeGfx.point(0, 0);
    eyeGfx.pop();

    MBEyeEffectImage_S = eyeGfx;
    
    eyeGfx2 = createGraphics(60, 60);
    eyeGfx2.clear(); 
    eyeGfx2.push();
    eyeGfx2.translate(30, 30); 
    eyeGfx2.noStroke();
    for(let i = 0; i < 5; i++){
        eyeGfx2.fill(255, 255, 0, 40 - (i * 8));
        eyeGfx2.circle(0, 0, 10 + (i * 8));
    }
    eyeGfx2.stroke(255, 200, 50);
    eyeGfx2.strokeWeight(1);
    eyeGfx2.line(-10, 0, 10, 0); //Horizontal
    eyeGfx2.line(0, -10, 0, 10); //Vertical
    eyeGfx2.stroke(255);
    eyeGfx2.point(0, 0);
    eyeGfx2.pop();

    MBEyeEffectImageS = eyeGfx2;

    eyeGfx3 = createGraphics(60, 60);
    eyeGfx3.clear(); 
    eyeGfx3.push();
    eyeGfx3.translate(30, 30); 
    eyeGfx3.noStroke();
    for(let i = 0; i < 5; i++){
        eyeGfx3.fill(140, 0, 255, 40 - (i * 8));
        eyeGfx3.circle(0, 0, 10 + (i * 8));
    }
    eyeGfx3.stroke(140, 0, 255);
    eyeGfx3.strokeWeight(1);
    eyeGfx3.line(-10, 0, 10, 0); //Horizontal
    eyeGfx3.line(0, -10, 0, 10); //Vertical
    eyeGfx3.stroke(255);
    eyeGfx3.point(0, 0);
    eyeGfx3.pop();

    MBEyeEffectImageDS = eyeGfx3;
}

function level9(){
    textSprite("Double tap right or left arrow key to dash. Press Q while jumping to rocket jump.", 600, 100, label);
    label.layer = allSprites._getTopLayer() + 1;

    gearSprite.x = 600;
    gearSprite.y = 300;
    hookThing();

    if(blocksPlaced == false){
        spawnBlock(200, 590, 70, 300, "None", 0); 
        spawnBlock(380, 250, 70, 700, "None", 0); 

        spawnBlock(250, 720, 100, 30, "None", 0);
        spawnBlock(620, 720, 200, 30, "None", 0); 
        spawnBlock(410, 400, 100, 30, "None", 0);
        spawnBlock(410, 200, 100, 30, "None", 0);
        spawnBlock(800, 200, 100, 30, "None", 0);
        blocksPlaced = true;
    }

    if(lavaPlaced == false){
        spawnLava(700, 770, 1000, 130);
        lavaPlaced = true;
    }
}

function level10(){
    if(boxPlaced == false){
        spawnBox(900, 685, 125, 95);
        spawnBox(500, 100, 125, 95);
        boxPlaced = true;
    }
    gearSprite.x = 200; 
    gearSprite.y = 0;
    hookThing();
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 1060; Ldoor.y = 100;}
    if(lavaPlaced == false){
        spawnLava(390, 570, 1100, 130);
        spawnLava(680, 240, 1080, 130);
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

function level11(){
    if(boxPlaced == false){
        spawnBox(900, 685, 125, 95);
        boxPlaced = true;
    }
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 900; Ldoor.y = 220;}
    if(lavaPlaced == false){

        spawnLava(250, 770, 500, 130);
        spawnLava(1230, 770, 200, 130);
        lavaPlaced = true;
    }
    if(slimesSpawned == false){
        spawnSlime(580, 400, 2.5);
        spawnSlime(690, 60, 2.5);
        spawnSlime(930, 60, 2.5);
        spawnSlime(890, 520, 2.5);
        spawnSlime(700, 370, 2.5);
        slimesSpawned = true;
    }
    
    if(blocksPlaced == false){
        spawnBlock(100, 720, 120, 30, "w", 2); //Moving one

        spawnBlock(60, 240, 40, 30, "None", 0);
        spawnBlock(100, 110, 90, 30, "None", 0);
        spawnBlock(190, 340, 70, 50, "None", 0);
        spawnBlock(35, 440, 70, 50, "None", 0); 
        spawnBlock(190, 600, 50, 50, "None", 0);

        spawnBlock(250, 100, 70, 1000, "None", 0); 

        spawnBlock(390, 600, 70, 20, "None", 0);
        spawnBlock(400, 475, 50, 20, "None", 0);
        spawnBlock(410, 350, 40, 20, "None", 0);
        spawnBlock(310, 225, 70, 20, "None", 0);
        spawnBlock(300, 100, 50, 20, "None", 0);
        

        spawnBlock(460, 440, 70, 650, "None", 0);

        spawnBlock(640, 440, 70, 650, "None", 0); 

        spawnBlock(590, 500, 70, 30, "None", 0);
        
        spawnBlock(1070, 380, 70, 520, "None", 0);
        spawnBlock(890, 300, 300, 70, "None", 0);
        spawnBlock(815, 450, 300, 70, "None", 0);
        spawnBlock(890, 600, 300, 70, "None", 0);
        spawnBlock(860, 145, 460, 70, "None", 0);

        spawnBlock(840, 200, 70, 70, "None", 0);
        
        blocksPlaced = true;
    }
    
    if(blocksGroup[0].x < 20 || blocksGroup[0].x > 350) blocksGroup[0].vel.x *= -1;

    if(turretPlaced == false){
        spawnTurret(1200, 690, 80, "w");
        spawnTurret(359, 0, 80, "s");
        turretPlaced = true;
    }
    
    if(gasPlaced == false){
        spawnPoisonGas(855, 370, 500, 100, "s", 1);
        gasPlaced = true;
    }
    if(poisonGasData[0].sprite.y < 200 || poisonGasData[0].sprite.y > 650) poisonGasData[0].sprite.vel.y *= -1;
}

function level12(){
    gearSprite.x = 400; 
    gearSprite.y = 75;

    gearSprite2.x = 680; 
    gearSprite2.y = 75;
    hookThing();

    if(boxPlaced == false){
        spawnBox(180, 130, 80, 65);
        boxPlaced = true;
    }
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 1050; Ldoor.y = 60;}

    if(lavaPlaced == false){
        spawnLava(880, 770, 650, 130);
        lavaPlaced = true;
    }
    
    if(blocksPlaced == false){
        spawnBlock(1110, 0, 200, 30, "None", 0);
        spawnBlock(1110, 110, 200, 30, "None", 0);

        spawnBlock(480, 640, 70, 40, "None", 0);
        spawnBlock(320, 560, 70, 40, "None", 0);
        spawnBlock(220, 440, 70, 40, "None", 0);
        spawnBlock(120, 360, 70, 40, "None", 0);
        spawnBlock(330, 260, 70, 40, "None", 0);

        spawnBlock(180, 60, 85, 140, "None", 0);
        spawnBlock(180, 170, 85, 20, "None", 0);
        spawnBlock(100, 160, 80, 40, "None", 0);
        spawnBlock(100, 10, 80, 30, "None", 0);
        spawnBlock(50, 90, 50, 180, "None", 0);

        spawnBlock(710, 550, 70, 40, "None", 0);
        spawnBlock(900, 450, 70, 40, "None", 0);
        spawnBlock(760, 300, 70, 40, "None", 0);
        spawnBlock(950, 180, 70, 40, "None", 0);

        blocksPlaced = true;
    }

    if(turretPlaced == false){
        spawnTurret(600, 680, 80, "w");
        spawnTurret(0, 480, 80, "e");
        spawnTurret(1200, 220, 80, "w");

        turretPlaced = true;
    }
    
    if(gasPlaced == false){
        spawnPoisonGas(855, 370, 500, 100, "s", 1);
        gasPlaced = true;
    }
    if(poisonGasData[0].sprite.y < 0 || poisonGasData[0].sprite.y > 650) poisonGasData[0].sprite.vel.y *= -1;
}

function level13(){
    gearSprite.x = 290; 
    gearSprite.y = 270;

    gearSprite2.x = 840; 
    gearSprite2.y = 53;
    hookThing();

    if(boxPlaced == false){
        spawnBox(370, 170, 100, 75);
        spawnBox(860, 530, 100, 75);
        boxPlaced = true;
    }
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 120; Ldoor.y = 300;}
    if(open2 == true) Ldoor2.y = -500;
    else {Ldoor2.x = 30; Ldoor2.y = 170;}

    if(slimesSpawned == false){
        spawnSlime(1140, 40, 2.5);
        spawnSlime(1000, 660, 2.5);
        slimesSpawned = true;
    }
    
    if(blocksPlaced == false){
        spawnBlock(270, 720, 130, 60, "None", 0);
        spawnBlock(270, 570, 130, 180, "None", 0);
        spawnBlock(100, 500, 230, 30, "None", 0);

        spawnBlock(30, 225, 80, 20, "None", 0);
        spawnBlock(120, 355, 80, 20, "None", 0);
        spawnBlock(200, 150, 80, 20, "None", 0);
        spawnBlock(290, 120, 100, 300, "None", 0);
        spawnBlock(370, 220, 100, 20, "None", 0);
        spawnBlock(590, 395, 100, 20, "None", 0);
        spawnBlock(560, 180, 120, 20, "None", 0);
        spawnBlock(680, 265, 50, 20, "None", 0);

        spawnBlock(1150, 400, 80, 650, "None", 0);
        spawnBlock(1040, 720, 150, 30, "None", 0);
        spawnBlock(380, 720, 50, 20, "None", 0);
        spawnBlock(500, 615, 80, 40, "None", 0);
        spawnBlock(690, 670, 80, 30, "None", 0);
        spawnBlock(860, 580, 100, 30, "None", 0);

        spawnBlock(1080, 580, 80, 30, "None", 0);
        spawnBlock(1080, 440, 80, 30, "None", 0);
        spawnBlock(960, 350, 60, 30, "None", 0);
        spawnBlock(1080, 220, 80, 20, "None", 0);


        blocksPlaced = true;
    }

    if(lavaPlaced == false){
        spawnLava(770, 770, 870, 130);
        lavaPlaced = true;
    }

    if(turretPlaced == false){
        spawnTurret(0, 460, 80, "e");
        spawnTurret(330, 570, 80, "e");
        spawnTurret(1040, 0, 80, "s");
        turretPlaced = true;
    }
    if(gasPlaced == false){
        spawnPoisonGas(1040, 370, 140, 200, "s", 2);
        gasPlaced = true;
    }
    if(poisonGasData[0].sprite.y < 0 || poisonGasData[0].sprite.y > 650) poisonGasData[0].sprite.vel.y *= -1;

}

function level14(){
    gearSprite.x = 360; 
    gearSprite.y = 460;

    gearSprite2.x = 700; 
    gearSprite2.y = 460;
    hookThing();

    if(boxPlaced == false){
        spawnBox(520, 670, 100, 75);
        boxPlaced = true;
    }
    if(open == true) Ldoor.y = -500;
    else {Ldoor.x = 570; Ldoor.y = 350;}
    if(open2 == true) Ldoor2.y = -500;
    else {Ldoor2.x = 660; Ldoor2.y = 350;}
    
    if(blocksPlaced == false){
        spawnBlock(100, 720, 120, 30, "w", 2); //Moving one

        spawnBlock(100, 70, 100, 30, "None", 0);
        spawnBlock(540, 430, 350, 70, "None", 0);
        spawnBlock(540, 270, 350, 70, "None", 0);
        spawnBlock(415, 320, 100, 130, "None", 0);

        spawnBlock(560, 720, 180, 30, "None", 0);
        spawnBlock(620, 190, 80, 80, "None", 0);
        spawnBlock(1060, 135, 80, 80, "None", 0);
        spawnBlock(770, 130, 80, 80, "None", 0);
        spawnBlock(900, 220, 80, 80, "None", 0);

        spawnBlock(330, 230, 80, 80, "None", 0);
        spawnBlock(100, 340, 80, 80, "None", 0);
        spawnBlock(200, 600, 80, 30, "None", 0);
        spawnBlock(800, 640, 80, 80, "None", 0);
        spawnBlock(1040, 670, 80, 80, "None", 0);
        spawnBlock(930, 470, 80, 40, "None", 0);

        blocksPlaced = true;
    }

    if(blocksGroup[0].x < 20 || blocksGroup[0].x > 350) blocksGroup[0].vel.x *= -1;

    if(lavaPlaced == false){
        spawnLava(600, 770, 1200, 130);
        spawnLava(540, 240, 350, 50);
        lavaPlaced = true;
    }

    if(turretPlaced == false){
        spawnTurret(1200, 330, 80, "w");
        spawnTurret(0, 650, 80, "e");
        spawnTurret(1200, 590, 80, "w");
        turretPlaced = true;
    }
}

function level15(){
    portal.x = 1100;
    castleGate.visible = true;
    lever.y = -500;
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
        staticCloudBossSprite.visible = false;
        dynamicCloudBossSprite.visible = false;
        dynamicCloudBossSprite2.visible = false;
        skyBossSprite.visible = false;
 
        staticCloudSprite.visible = false;
        dynamicCloudSprite.visible = false;
        dynamicCloudSprite2.visible = false;
    }
    else if(stage == bossStage){
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
    clearEverything();
    fireballGroup.removeAll();
    fireballData.length = 0;
    player.vel.x = 0;
    player.vel.y = 0;
    backgroundMusic.play();
    prevXArr = []; prevYArr = []; prevDArr = []; savedprevXArr = []; savedprevYArr = []; savedprevDArr = [];
    damageBuff = 0;
    speedBuff = 0;
    dead = false;
    if(dataLoaded == true) {dataLoaded = false; health = maxHealth; normalHealth = maxHealth;}
    else {health = maxHealth; tempMaxHealth = maxHealth}
    mana = 100;
    stamina = 100;
    counterDeath = 1;
    playerIsHurt = false;
    shakeAmount = 0;
   
    if(stage == 0){player.x = 100; player.y = 300;}
    if(stage == 1){player.x = 100; player.y = 600;}
    if(stage == 2){player.x = 100; player.y = 100;}
    if(stage == 3){player.x = 100; player.y = 600;}
    if(stage == 4){player.x = 100; player.y = 300;}
    if(stage == 5){player.x = 100; player.y = 600;}
    if(stage == 6){player.x = 100; player.y = 0;}
    if(stage == 7){player.x = 100; player.y = 600;}
    if(stage == 8){player.x = 100; player.y = 600;} //Miniboss
    if(stage == 9){player.x = 100; player.y = 600;} //Blank stage for rocket jump
    if(stage == 10){player.x = 100; player.y = 670;}
    if(stage == 11){player.x = 100; player.y = 100;}
    if(stage == 12){player.x = 100; player.y = 600;}
    if(stage == 13){player.x = 100; player.y = 600;}
    if(stage == 14){player.x = 100; player.y = 50;}
    if(stage == 15){player.x = 100; player.y = 600;} //Level before boss stage
 
    prevX = player.x;
    prevY = player.y;
   
    stage--;
    stage++;
    if(stage == 2){
        healthUp.x = 60;
        healthUp.y = 675;
    }
    if(stage == 3){
        //Nothing
    }
    if(stage == 4){
       label2.y = -100;
    }
    if(stage == 5){
        healthUp.x = 1150;
        healthUp.y = 50;
        Ldoor.x = 100;
        Ldoor.y = 150;
        lever.x = 1100;
        open = false;
    }
    if(stage == 6){
        gearSprite.y = -500;
        healthUp.y = -500;
        lever.y = -500;
        Ldoor.x = 1000;
        open = false;
    }
    if(stage == 7){
        open = false;
        open2 = false;
        healthUp.x = 450;
        healthUp.y = 550;
    }
    if(stage == 8){
        MBIntroTimer = 0;
        MBHealth = 2500; //10
        MBDeath = false;
        miniboss.vel.y = 0;
        miniboss.collider = "dyanmic";
        counterMBDeath = 0;
        HitByMB = false;
        HitByMBAA = false;
        MBAttack = false;
        MBAirAttack = false;
        MBInAir = false;
        miniboss.image = MBIdleFrames[0];
        miniboss.y = 670;
        miniboss.x = 600;
        MBLabel.textColor = "red";
        counterMBDS = 50;
        MBexplodeY = -500;
        MBboom.y = -500;
        MBBuffGotten = false;
        MBBuff.y = -500;
        MBFlashAttack.y = -500;
        MBFinalAttack.y = -500;
        MBCrouch = false;
        counterEyeEffect = 50;
        counterEyeEffect2 = 60;
        StartMBFinalAttack = false;
        MBHurt = false;
        counterMBFinalAttack = 0;
        miniboss.opacity = 1;
        MBFinalDecision = false;
        MBFinalDecision2 = false;
        MBFinalDecision3 = false;
        MBMoveDist = 400;
        MBcomboIndex = 4;
        counterMBAttack2 = 0;
        MBAttack2 = false;
        miniboss.vel.x = 0;
        MBSliding = false;
    }
    if(stage == 9){
        //Rocket jump stage
        healthUp.x = 1120;
        healthUp.y = 550;
    }
    if(stage == 10){
        open = false;
        healthUp.y = -500;
        lever2.y = -500;
        Ldoor2.y = -500;
    }
    if(stage == 11){
        gearSprite.y = -500;
        open = false;
    }
    if(stage == 12){
        open = false;
    }
    if(stage == 13){
        
    }
    if(stage == 14){
        open = false;
        open2 = false;
    }
    if(stage == bossStage - 1) dStage = 0;
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

    cols = 4; rows = 1; w = poisonGasSheet.width / cols; h = poisonGasSheet.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) poisonGasFrames.push(poisonGasSheet.get(c * w, r * h, w, h));

    cols = 2; rows = 4; w = MBIdleImage.width / cols; h = MBIdleImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBIdleFrames.push(MBIdleImage.get(c * w, r * h, w, h));

    cols = 2; rows = 2; w = MBHurtImage.width / cols; h = MBHurtImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBHurtFrames.push(MBHurtImage.get(c * w, r * h, w, h)); MBHurtFrames.splice(3, 1);

    cols = 2; rows = 4; w = MBRunImage.width / cols; h = MBRunImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBRunFrames.push(MBRunImage.get(c * w, r * h, w, h)); 

    cols = 2; rows = 4; w = MBJumpImage.width / cols; h = MBJumpImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBJumpFrames.push(MBJumpImage.get(c * w, r * h, w, h)); 

    cols = 2; rows = 4; w = MBAirAttackImage.width / cols; h = MBAirAttackImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBAirAttackFrames.push(MBAirAttackImage.get(c * w, r * h, w, h)); MBAirAttackFrames.splice(7, 1);

    cols = 8; rows = 5; w = MBAttacksImage.width / cols; h = MBAttacksImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBAttacksFrames.push(MBAttacksImage.get(c * w, r * h, w, h)); 

    cols = 2; rows = 2; w = MBDeathImage.width / cols; h = MBDeathImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBDeathFrames.push(MBDeathImage.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = MBGroundSlashImage.width / cols; h = MBGroundSlashImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBGroundSlashFrames.push(MBGroundSlashImage.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = MBStabImage.width / cols; h = MBStabImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBStabFrames.push(MBStabImage.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = MBSSlashImage.width / cols; h = MBSSlashImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBSSlashFrames.push(MBSSlashImage.get(c * w, r * h, w, h));

    cols = 3; rows = 1; w = MBDSlashImage.width / cols; h = MBDSlashImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBDSlashFrames.push(MBDSlashImage.get(c * w, r * h, w, h));

    cols = 11; rows = 1; w = MBBuffImage.width / cols; h = MBBuffImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBBuffFrames.push(MBBuffImage.get(c * w, r * h, w, h));

    cols = 5; rows = 1; w = parryEffectImage.width / cols; h = parryEffectImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) parryEffectFrames.push(parryEffectImage.get(c * w, r * h, w, h));

    cols = 2; rows = 4; w = MBCrouchImage.width / cols; h = MBCrouchImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBCrouchFrames.push(MBCrouchImage.get(c * w, r * h, w, h));
    for (let i = 0; i < 8; i++) MBCrouchFrames.push(MBCrouchFrames[i]);
    for (let i = 0; i < 8; i++) MBCrouchFrames.push(MBCrouchFrames[i]);

    cols = 5; rows = 1; w = MBFinalAttackImage.width / cols; h = MBFinalAttackImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBFinalAttackFrames.push(MBFinalAttackImage.get(c * w, r * h, w, h));

    cols = 4; rows = 3; w = MBSlideImage.width / cols; h = MBSlideImage.height / rows;

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) MBSlideFrames.push(MBSlideImage.get((c * w)+15, (r * h)+10, w, h));
}

function barMovement(){
    let maxWidth = 250;
    visualHealth = lerp(visualHealth, health, 0.05);
    let healthRatio = visualHealth / maxHealth;
    healthBar.width = maxWidth * healthRatio;
    healthBar.x = 120 + healthBar.width / 2;
    if(health <= 0) healthBar.width = 0;

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
    label = new Sprite(400, 300, 0, 0); label.collider = "none"; label.textSize = 24; label.textColor = "Purple";
    label2 = new Sprite(400, 300, 0, 0); label2.collider = "none"; label2.textSize = 24; label2.textColor = "Purple";
    label3 = new Sprite(400, 300, 0, 0); label3.collider = "none"; label3.textSize = 30; label3.textColor = "Purple"; 
    label4 = new Sprite(400, 300, 0, 0); label4.collider = "none"; label4.textSize = 20; label4.textColor = "lightblue"; 
    healthLabel = new Sprite(400, 300, 0, 0); healthLabel.collider = "none"; healthLabel.textSize = 16; healthLabel.textColor = "Red";
    manaLabel = new Sprite(400, 300, 0, 0); manaLabel.collider = "none"; manaLabel.textSize = 16; manaLabel.textColor = "Blue";
    staminaLabel = new Sprite(400, 300, 0, 0); staminaLabel.collider = "none"; staminaLabel.textSize = 16; staminaLabel.textColor = "Yellow";
    MBLabel = new Sprite(400, 300, 0, 0); MBLabel.collider = "none"; MBLabel.textSize = 20; MBLabel.textColor = "Red";
    MBLabel2 = new Sprite(400, 300, 0, 0); MBLabel2.collider = "none"; MBLabel2.textSize = 30; MBLabel2.textColor = "Red";
    MBLabel3 = new Sprite(400, 300, 0, 0); MBLabel3.collider = "none"; MBLabel3.textSize = 30; MBLabel3.textColor = "Red";
    volLabel11 = new Sprite(400, 300, 0, 0); volLabel11.collider = "none"; volLabel11.textSize = 20; volLabel11.textColor = "lightblue"; 
    volLabel12 = new Sprite(400, 300, 0, 0); volLabel12.collider = "none"; volLabel12.textSize = 20; volLabel12.textColor = "lightblue"; 
    volLabel13 = new Sprite(400, 300, 0, 0); volLabel13.collider = "none"; volLabel13.textSize = 20; volLabel13.textColor = "lightblue"; 
    volLabel21 = new Sprite(400, 300, 0, 0); volLabel21.collider = "none"; volLabel21.textSize = 20; volLabel21.textColor = "lightblue"; 
    volLabel22 = new Sprite(400, 300, 0, 0); volLabel22.collider = "none"; volLabel22.textSize = 20; volLabel22.textColor = "lightblue"; 
    volLabel23 = new Sprite(400, 300, 0, 0); volLabel23.collider = "none"; volLabel23.textSize = 20; volLabel23.textColor = "lightblue"; 
    volLabel31 = new Sprite(400, 300, 0, 0); volLabel31.collider = "none"; volLabel31.textSize = 20; volLabel31.textColor = "lightblue"; 
    volLabel32 = new Sprite(400, 300, 0, 0); volLabel32.collider = "none"; volLabel32.textSize = 20; volLabel32.textColor = "lightblue"; 
    volLabel33 = new Sprite(400, 300, 0, 0); volLabel33.collider = "none"; volLabel33.textSize = 20; volLabel33.textColor = "lightblue"; 

    topBar = new Sprite(200, -200, 50, 50, "none"); topBar.color = "Black";
    botBar = new Sprite(200, -200, 50, 50, "none"); botBar.color = "Black";
}

function volLabelRemove(){
    volLabel11.y = -100;
    volLabel12.y = -100;
    volLabel13.y = -100;
    volLabel21.y = -100;
    volLabel22.y = -100;
    volLabel23.y = -100;
    volLabel31.y = -100;
    volLabel32.y = -100;
    volLabel33.y = -100;
}

class BlockSprite{
    //Width and height only change hitbox size, not actual image size
    //x and y are the center of the object
    //d = direction, s = speed
    constructor(x, y, w, h, d, s){
        //This builds each block using smaller blocks so it doesn't look stretched, will look slightly different each time due to random
        let gfx = createGraphics(w, h);
 
        for(let i = 0; i < w; i += stone.width-2){
            for(let j = 0; j < h; j += stone.height-2){
                gfx.push();
                gfx.translate(i + stone.width / 2, j + stone.height / 2);
                gfx.rotate(random(-0.11, 0.11));

                let baseBrightness = lerp(255, 180, j / h); // linearly interpolate brightness based on vertical position
                let variation = random(-10, 10);
                let tintValue = constrain(baseBrightness + variation, 0, 255);    
                gfx.tint(tintValue);

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
        if(debugStuff) blockObj.debug = true;
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
        if(debugStuff) slimeObj.debug = true;
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
        if(debugStuff) this.sprite.text = "Hp: " + this.EHealth;

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
        if(debugStuff) fireballObj.debug = true;
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
                spriteBox.y = -500;
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

        if (this.sprite.overlapping(miniboss) && this.sprite.collider == "dynamic" && StartMBFinalAttack == false) {
            MBHurt = true;
            counterMBHurt = 0;
            MBHealth -= 50;
            MBNameFlicker = 2.5;
            this.disappear();
            return;
        }

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
    if(HitByMBAA){ // MB Air attack
        if(d == "r"){
            player.vel.x = -10;
            if(counterH < 1){
                player.image = hurtFrames[Math.round(counterH)];
                player.vel.y = -5;
            }
            else{
                player.image = standFrame;
                if(player.vel.x != 0) player.vel.x+=2.5;
            } 
            if(counterH > 5) {playerIsHurt = false;  counterH = 0; HitByMBAA = false;}
        }
        if(d == "l"){
            player.vel.x = 10;
            if(counterH < 1){
                player.image = hurtFramesL[Math.round(counterH)];
                player.vel.y = -5;
            }
            else{
                player.image = LstandFrame;
                if(player.vel.x != 0) player.vel.x-=2.5;
            } 
            if(counterH > 5) {playerIsHurt = false;  counterH = 0; HitByMBAA = false;}
        }
    }
    else if(HitByMB){
        if(d == "r"){
            player.vel.x = -5;
            if(counterH < 1){
                player.image = hurtFrames[Math.round(counterH)];
                player.vel.y = -5;
            }
            else{
                player.image = standFrame;
                if(player.vel.x != 0) player.vel.x+=2.5;
            } 
            if(counterH > 5) {playerIsHurt = false;  counterH = 0; HitByMB = false;}
        }
        if(d == "l"){
            player.vel.x = 5;
            if(counterH < 1){
                player.image = hurtFramesL[Math.round(counterH)];
                player.vel.y = -5;
            }
            else{
                player.image = LstandFrame;
                if(player.vel.x != 0) player.vel.x-=2.5;
            } 
            if(counterH > 5) {playerIsHurt = false;  counterH = 0; HitByMB = false;}
        }
    }
    else{
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
}

function explosionAnimation(x, y){
    if(!explosionSummoned){ 
        boom.y = -500;
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
        if(boom.overlapping(miniboss)) MBHealth -= 2;
    }
    else{
        counterBoom = 0;
        explosionSummoned = false;
    }
}

function MBexplosionAnimation(x, y){
    if(!MBexplosionSummoned){ 
        MBboom.y = -500;
        return;
    }
    MBboom.x = x; 
    MBboom.y = y;
    if(counterMBBoom < 6){
        counterMBBoom += 0.2;
        MBboom.image = fireBallExplosionFrames[Math.round(counterMBBoom)];
        if(MBboom.overlapping(player)) health -= 1;
    }
    else{
        counterMBBoom = 0;
        MBexplosionSummoned = false;
    }
}

class strengthBuffs{
    constructor(){
        this.counter = 0; 
        damageBuff += 50;
        speedBuff += 5;
    }
    update(index){
        this.counter++;

        if(this.counter > 480){
            damageBuff -= 50;
            speedBuff -= 5;
            if(health <= Math.max(maxHealth, tempMaxHealth) - 5) health += 5;
            else health = Math.max(maxHealth, tempMaxHealth);
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
        let now2 = frameCount; 
        if (now2 - lastTapL < 20 && stamina >= 30 && mana >= 10 && dashCooldown <= 0) { 
            dashL = true;
            dashTimer = dashDuration;
            stamina -= 30;
            mana -= 10;
            dashCooldown = dashCooldownTime;
        }
        lastTapL = now2;
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
    let diff = dist(player.x, player.y, gearSprite.x, gearSprite.y);
    let diff2 = dist(player.x, player.y, gearSprite2.x, gearSprite2.y);
    if(diff < diff2 && diff < 300 && player.y > gearSprite.y) {interactIndicatorGear.x = gearSprite.x; interactIndicatorGear.y = gearSprite.y;}
    else if(diff2 < diff && diff2 < 300 && player.y > gearSprite2.y) {interactIndicatorGear.x = gearSprite2.x; interactIndicatorGear.y = gearSprite2.y;}
    else {interactIndicatorGear.y = -500;}

    if(kb.pressing("space")) {
        if(diff < diff2 && diff < 300 && isHooked2 == false && player.y > gearSprite.y) isHooked = true;
        if(diff2 < diff && diff2 < 300 && isHooked == false && player.y > gearSprite2.y) isHooked2 = true;   
        keyCode = 32;
    }
    else{
        hookCooldownTimer = 0;
        velocity.x = player.vel.x; 
        velocity.y = player.vel.y;
        position.x = player.x;
        position.y = player.y;
        isHooked = false;
        isHooked2 = false;
        origin = null;

        if(ropeSprite){
            ropeSprite.remove();
            ropeSprite = null;
        }
    }
    if(isHooked){
        origin = createVector(gearSprite.x, gearSprite.y);
        ropeLength = dist(position.x, position.y, gearSprite.x, gearSprite.y);
        rope(); 
        hookCooldownTimer++;
    }
    if(isHooked2){
        origin = createVector(gearSprite2.x, gearSprite2.y);
        ropeLength = dist(position.x, position.y, gearSprite2.x, gearSprite2.y);
        rope();
        hookCooldownTimer++;
    }
}

function keyReleased(){
    if(keyCode == 32 && (isHooked == true || isHooked2 == true) && hookCooldownTimer > 5){ 
        player.vel.y = -20;
        if(direction == true) player.vel.x = 10;
        else if(direction == false) player.vel.x = -10;

        velocity.x = 0;
        velocity.y = 0;
    }
}

function rope() {
    position.x = player.x;
    position.y = player.y;

    velocity.y += g; 
    position.add(velocity);
    velocity.mult(0.998); 

    if(origin){
        let dx = position.x - origin.x;
        let dy = position.y - origin.y;
        let currentDist = dist(position.x, position.y, origin.x, origin.y);

        if(currentDist > ropeLength){
            let angle = atan2(dy, dx);
            position.x = origin.x + cos(angle) * ropeLength;
            position.y = origin.y + sin(angle) * ropeLength;
        
            let normal = createVector(cos(angle), sin(angle));
            let dot = velocity.x * normal.x + velocity.y * normal.y;
            velocity.x -= 1.0 * dot * normal.x;
            velocity.y -= 1.0 * dot * normal.y;
        }

        player.moveTowards(position.x, position.y, 0.8);

        if(!ropeSprite){
            ropeSprite = new Sprite();
            ropeSprite.height = 4; 
            ropeSprite.color = "white";
            ropeSprite.collider = "none";
        }
        
        let visualDist = dist(player.x, player.y, origin.x, origin.y);
        let visualAngle = atan2(player.y - origin.y, player.x - origin.x);
            
        ropeSprite.width = visualDist;
        ropeSprite.x = (player.x + origin.x) / 2;
        ropeSprite.y = (player.y + origin.y) / 2;
        ropeSprite.rotation = visualAngle;
        ropeSprite.visible = true;
    }
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
        if(debugStuff) lavaObj.debug = true;
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
        if(debugStuff) boxObj.debug = true;
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
        if(debugStuff) turretObj.debug = true;
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
        if(this.shootCounter > 100 && dead == false){
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
        if(debugStuff) turretBullObj.debug = true;
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
        if(this.gone || dead == true) return;

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
        if(this.sprite.collides(portal) || this.sprite.collides(gearSprite) || this.sprite.collides(gearSprite2) || this.sprite.collides(Ldoor) || this.sprite.collides(Ldoor2) || this.sprite.collides(lever) || this.sprite.collides(lever2)) this.disappear();
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

class MBSlashSprite{
    //x, y, type, direction
    constructor(x, y, t, d){
        this.sprite = new Sprite(x, y, 50, 50);
        this.sprite.collider = "none";
        if(debugStuff) this.sprite.debug = true;
        this.type = t;
        this.d = d;
        this.gone = false;
        this.counter = 0;
        this.counterT = 0.5;
        this.reflected = false;
        if(this.d == true) this.sprite.mirror.x = true;

        if(t == "GS") {
            this.sprite.image = MBGroundSlashFrames[0];
            this.sprite.image.scale = 0.3;
            this.sprite.width = 80;
            this.sprite.height = 70;
        }
        if(t == "S") {
            this.sprite.image = MBStabFrames[0];
            this.sprite.image.scale = 0.5;
            this.sprite.width = 100;
        }
        if(t == "SS") {
            this.sprite.image = MBSSlashFrames[0];
            this.sprite.image.scale = 0.5;
            this.sprite.height = 100;
        }
        if(t == "DS"){
            this.sprite.image = MBDSlashFrames[0];
            this.sprite.image.scale = 0.5;
            this.sprite.height = 100;
        }
        if(d == true && t == "S"){
            this.sprite.vel.x = 15;
        }
        else if(d == true){
            this.sprite.vel.x = 8;
        }
        if(d == false && t == "S"){
            this.sprite.vel.x = -15;
        }
        else if(d == false){
            this.sprite.vel.x = -8;
        }
    }
    
    update(){
        if(this.gone || dead == true) return;
        this.sprite.color = "cyan";
        this.counterT += 0.01;
        this.sprite.opacity = this.counterT;
        if(this.counterT >= 1) this.counterT = 0.5;

        this.counter+=0.2;
        if(this.counter >= 3) this.counter = 0;
        if(this.type == "SS") this.sprite.image = MBSSlashFrames[Math.floor(this.counter)];
        if(this.type == "S") this.sprite.image = MBStabFrames[Math.floor(this.counter)];
        if(this.type == "DS") this.sprite.image = MBDSlashFrames[Math.floor(this.counter)];
        if(this.type == "GS") this.sprite.image = MBGroundSlashFrames[Math.floor(this.counter)];

        if(this.type != "GS") this.sprite.image.scale = 0.5;
        else this.sprite.image.scale = 0.3;

        if(this.sprite.overlaps(player)){
            this.disappear();
            if (!playerIsHurt) {
                if(this.type == "GS") health -= 20 * pResistance;
                if(this.type == "S") health -= 15;
                if(this.type == "SS") health -= 30 * pResistance;
                if(this.type == "DS") health -= 20 * pResistance;
                playerIsHurt = true;
                counterH = 0;
                if(player.x < this.sprite.x) playerHurtDirection = "r";
                else if(player.x >= this.sprite.x) playerHurtDirection = "l";
            }
        }
        if(this.sprite.overlaps(swordHitBox) && swordHitBox.collider == "static" && this.type != "S" && this.type != "GS") this.disappear();
        if(this.sprite.overlaps(swordHitBox) && swordHitBox.collider == "static" && this.type == "S" && !this.reflected){
            if(counterRA >= 2.2 && counterRA <= 3.2 || counterLA >= 2.2 && counterLA <= 3.2){this.reflect(); parryCounter = 0;}
        }

        fireballData.forEach(spriteFB => {if(this.sprite.overlaps(spriteFB.sprite) && this.type != "S" && this.type != "GS") {this.disappear(); spriteFB.disappear();}});
        if(this.sprite.x < -50 || this.sprite.x > 1250) this.disappear();

        if(this.reflected){
            if(this.sprite.overlapping(miniboss)){
                this.disappear();
                MBHealth -= 200;
                MBHurt = true;
                counterMBHurt = 0;
                MBNameFlicker = 15;
                shakeAmount = 15;
            }
        }
    }
    
    reflect(){
        if(this.reflected) return;
        this.reflected = true;
        this.sprite.vel.x *= -1.5; 
        this.d = !this.d; 
        this.sprite.mirror.x = this.d;
        shakeAmount = 5; 
    }

    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
        
}

function spawnMBSlash(x, y, t, d){
    let newMBSlash = new MBSlashSprite(x, y, t, d);
    MBSlashData.push(newMBSlash);
}

function clearMBSlash(){
    MBSlashData.forEach(spriteMBS => {spriteMBS.disappear()});
    MBSlashData.length = 0;
}

class PoisonGasSprite{
    //Width and height only change hitbox size, not actual image size
    //x and y are the center of the object
    //d = direction, s = speed
    constructor(x, y, w, h, d, s){
        let gfx = createGraphics(w, h);
 
        for(let i = 0; i < w; i += poisonGasFrames[0].width-2){
            for(let j = 0; j < h; j += poisonGasFrames[0].height-2){
                gfx.push();
                gfx.translate(i + poisonGasFrames[0].width / 2, j + poisonGasFrames[0].height / 2);
                gfx.rotate(random(-0.11, 0.11));
                let rand = Math.floor(Math.random() * 4);
                gfx.image(poisonGasFrames[rand], -poisonGasFrames[rand].width / 2, -poisonGasFrames[rand].height / 2, poisonGasFrames[rand].width*1.05, poisonGasFrames[rand].height*1.05);
                gfx.pop();
            }
        }
 
        this.sprite = new Sprite(x, y, w, h);
        this.sprite.image = gfx;
        //this.sprite.image.scale.x = w / poisonGasFrames[0].image.width;
        //this.sprite.image.scale.y = h / poisonGasFrames[0].image.height;
        this.sprite.collider = "none";
        if(debugStuff) this.sprite.debug = true;
        this.BSpeed = s;
        this.BDirection = d;
        this.gone = false;
        this.counterT = 0.5;
        this.change = 0.01;

        if(d == "n") this.sprite.vel.y = -s;
        if(d == "s") this.sprite.vel.y = s;
        if(d == "e") this.sprite.vel.x = s;
        if(d == "w") this.sprite.vel.x = -s;
    }
    disappear(){
        if(this.gone) return;
        this.gone = true;
        this.sprite.remove();
    }
    update(){
        if(this.sprite.overlapping(player) && blocking == false) health -= 2;
        this.sprite.opacity = this.counterT;
        this.counterT += this.change;
        if(this.counterT > 1 || this.counterT < 0.5) this.change *= -1;
    }
}

function spawnPoisonGas(x, y, w, h, d, s){
    let newPoisonGas = new PoisonGasSprite(x, y, w, h, d, s);
    poisonGasData.push(newPoisonGas);
}

function clearPoisonGas(){
    poisonGasData.forEach(spritePG => {spritePG.disappear()});
    gasPlaced = false;
    poisonGasData.length = 0;
}

function managePauseMenu(){
    if(kb.presses("Escape") && pauseMenu.visible == false && stage != -1){
        backgroundMusicBar.visible = false;
        soundEffectBar.visible = false;
        speechSoundBar.visible = false;
        pauseMenu.visible = true; 
        controlsButton.visible = true; 
        volumeButton.visible = true; 
        saveButton.visible = true; 
        clearButton.visible = true;
        paused = true;
        pauseMenu.layer = allSprites._getTopLayer() + 1;
        controlsButton.layer = allSprites._getTopLayer() + 1;
        volumeButton.layer = allSprites._getTopLayer() + 1;
        saveButton.layer = allSprites._getTopLayer() + 1;
        clearButton.layer = allSprites._getTopLayer() + 1;
        messageCooldown = 51;

        stopMotion();
    }
    else if(kb.presses("Escape") && pauseMenu.visible == true){
        pauseMenu.visible = false; 
        controlsButton.visible = false; 
        volumeButton.visible = false; 
        saveButton.visible = false; 
        clearButton.visible = false;
        paused = false;
        pauseMenuBlank.visible = false;
        backButton.visible = false;
        
        backgroundMusicBar.visible = false;
        soundEffectBar.visible = false;
        speechSoundBar.visible = false;
        controlScreenActive = false;
        volumeScreenActive = false;
        label4.y = -100;
        volLabelRemove();

        startMotion();
    }

    if(paused == true){
        backgroundMusicBar.visible = false;
        soundEffectBar.visible = false;
        speechSoundBar.visible = false;
        label3.layer = allSprites._getTopLayer() + 1;
        if(mouseRepresenter.overlapping(controlsButton) && mouse.pressed() && controlsButton.visible == true) {
            controlScreenActive = true;
            pauseMenuBlank.visible = true;
            pauseMenuBlank.layer = allSprites._getTopLayer() + 1;
            backButton.visible = true;
            backButton.layer = allSprites._getTopLayer() + 1;
        }

        if(mouseRepresenter.overlapping(volumeButton) && mouse.pressed() && volumeButton.visible == true) {
            volumeScreenActive = true;
            pauseMenuBlank.visible = true;
            pauseMenuBlank.layer = allSprites._getTopLayer() + 1;
            backButton.visible = true;
            backButton.layer = allSprites._getTopLayer() + 1;
        }

        if(mouseRepresenter.overlapping(saveButton) && mouse.pressing() && saveButton.visible == true) {
            saveButton.tint = color(200);
            saveData(); 
        }
        else { saveButton.tint = color(255);}

        if(mouseRepresenter.overlapping(clearButton) && mouse.pressing() && clearButton.visible == true) {
            clearButton.tint = color(200);
            //if(confirm("Do you really want to clear the data?")) 
            clearData();

        }
        else { clearButton.tint = color(255);}

        if(controlScreenActive) controlsScreen();
        if(volumeScreenActive) volumeScreen();

        messageCooldown++;
        if(messageCooldown > 50){
            textSprite("Your game has been paused.", 600, 100, label3);
        }

    } else {label3.y = -100;}
}

function controlsScreen(){
    pauseMenu.visible = true; 
    controlsButton.visible = false; 
    volumeButton.visible = false; 
    saveButton.visible = false; 
    clearButton.visible = false;
    backgroundMusicBar.visible = true;
    soundEffectBar.visible = true;
    speechSoundBar.visible = true;

    textSprite("R - Restart level \nArrow Keys - Move \nDown + Right or Left - Slide \nDown - Crouch\n \nD - Tp to previous location \nA - Light Attack \nQ - Fireball \nF - Block/brace \nS - Charge\n \nHolding S + A - Critical Attack \nHolding up arrow + Q - Rocket Jump \nHolding down arrow + Q - Explosion Buff \nE - Interact button", 600, 530, label4);
    label4.layer = allSprites._getTopLayer() + 1;

    backButtonFunction();
}

function volumeScreen(){
    backgroundMusicBar.visible = true;
    soundEffectBar.visible = true;
    speechSoundBar.visible = true;
    backgroundMusicBar.width = 300 * backgroundMusicVar;
    backgroundMusicBar.x = 450 + backgroundMusicBar.width / 2;
    soundEffectBar.width = 300 * soundEffectVar;
    soundEffectBar.x = 450 + soundEffectBar.width / 2;
    speechSoundBar.width = 300 * speechSoundVar;
    speechSoundBar.x = 450 + speechSoundBar.width / 2;
    pauseMenu.visible = true; 
    controlsButton.visible = false; 
    volumeButton.visible = false; 
    saveButton.visible = false; 
    clearButton.visible = false;

    backgroundMusicBar.layer = allSprites._getTopLayer() + 1;
    soundEffectBar.layer = allSprites._getTopLayer() + 1;
    speechSoundBar.layer = allSprites._getTopLayer() + 1;

    volLabel11.layer = allSprites._getTopLayer() + 1;
    volLabel12.layer = allSprites._getTopLayer() + 1;
    volLabel13.layer = allSprites._getTopLayer() + 1;
    volLabel21.layer = allSprites._getTopLayer() + 1;
    volLabel22.layer = allSprites._getTopLayer() + 1;
    volLabel23.layer = allSprites._getTopLayer() + 1;
    volLabel31.layer = allSprites._getTopLayer() + 1;
    volLabel32.layer = allSprites._getTopLayer() + 1;
    volLabel33.layer = allSprites._getTopLayer() + 1;

    textSprite("Background Music", 600, 350, volLabel11);
    textSprite("Sound Effects", 600, 500, volLabel12);
    textSprite("Dialogue", 600, 650, volLabel13);
    textSprite(0, 420, 400, volLabel21);
    textSprite(0, 420, 550, volLabel22);
    textSprite(0, 420, 700, volLabel23);
    textSprite(Math.round(backgroundMusicVar * 100), 780, 400, volLabel31);
    textSprite(Math.round(soundEffectVar * 100), 780, 550, volLabel32);
    textSprite(Math.round(speechSoundVar * 100), 780, 700, volLabel33);
    if(mouseRepresenter.overlapping(backgroundMusicBar) && mouse.pressing() && backgroundMusicBar.visible == true){
        let newVol = ((mouse.x/0.7) - 450) / 300; 
        backgroundMusicVar = constrain(newVol, 0, 1);
        backgroundMusic.setVolume(backgroundMusicVar);
    }
    if(mouseRepresenter.overlapping(soundEffectBar) && mouse.pressing() && soundEffectBar.visible == true){
        let newVol = ((mouse.x/0.7) - 450) / 300;
        soundEffectVar = constrain(newVol, 0, 1);
    }
    if(mouseRepresenter.overlapping(speechSoundBar) && mouse.pressing() && speechSoundBar.visible == true){
        let newVol = ((mouse.x/0.7) - 450) / 300;
        speechSoundVar = constrain(newVol, 0, 1);
    }

    backButtonFunction();
}

function backButtonFunction(){
    if(mouseRepresenter.overlapping(backButton) && mouse.pressed() && backButton.visible == true){
        pauseMenuBlank.visible = false;
        backButton.visible = false;
        backgroundMusicBar.visible = false;
        soundEffectBar.visible = false;
        speechSoundBar.visible = false;

        pauseMenu.visible = true; 
        controlsButton.visible = true; 
        volumeButton.visible = true; 
        saveButton.visible = true; 
        clearButton.visible = true;
        paused = true;
        pauseMenu.layer = allSprites._getTopLayer() + 1;
        controlsButton.layer = allSprites._getTopLayer() + 1;
        volumeButton.layer = allSprites._getTopLayer() + 1;
        saveButton.layer = allSprites._getTopLayer() + 1;
        clearButton.layer = allSprites._getTopLayer() + 1;

        controlScreenActive = false;
        volumeScreenActive = false;
        label4.y = -100;
        textSprite("Your game has been paused.", 600, 100, label3);
        volLabelRemove();
    }
}

function saveData(){
    messageCooldown = 0;
    localStorage.setItem("stage", stage);
    localStorage.setItem("maxHealth", maxHealth);
    localStorage.setItem("MBBuff", JSON.stringify(MBBuffGotten));
    textSprite("Saved!", 600, 100, label3);
}

function loadData(){
    let savedStage = localStorage.getItem("stage");
    let savedHealth = localStorage.getItem("maxHealth");
    let savedBuffStatus = true;//localStorage.getItem("MBBuff");

    if(savedStage !== null && savedHealth !== null && savedBuffStatus !== null){
        stage = Number(savedStage);
        maxHealth = Number(savedHealth);
        MBBuffGotten = JSON.parse(savedBuffStatus);

        if (!backgroundMusic.isPlaying()) backgroundMusic.loop();
        backgroundMusic.setVolume(backgroundMusicVar);
        userStartAudio();
        hideStartingScreen();
        resetStage();
        player.scale.x = 0.2;
        player.scale.y = 0.2;
        
        return true; 
    }
    
    return false; 
}

function clearData(){
    localStorage.clear();
    messageCooldown = 0;
    textSprite("Your data has been cleared! Refresh to start over.", 600, 100, label3);
}
 
function stopMotion(){
    blocksGroup.forEach(spriteB => {
        spriteB.savedVel = {x: spriteB.vel.x, y: spriteB.vel.y};
        spriteB.vel.x = 0;
        spriteB.vel.y = 0;
    });
    
    player.savedVel = {x: player.vel.x, y: player.vel.y};
    player.vel.x = 0;
    player.vel.y = 0;

    miniboss.savedVel = {x: miniboss.vel.x, y: miniboss.vel.y};
    miniboss.vel.x = 0;
    miniboss.vel.y = 0;
    miniboss.rotationSpeed = 0;

    slimesGroup.forEach(spriteS => {
        spriteS.savedVel = {x: spriteS.vel.x, y: spriteS.vel.y};
        spriteS.vel.x = 0;
        spriteS.vel.y = 0;
    });

    poisonGasData.forEach(spritePG => {
        let s = spritePG.sprite;
        s.savedVel = {x: s.vel.x, y: s.vel.y};
        s.vel.x = 0;
        s.vel.y = 0;
    });

    turretBulletGroup.forEach(spriteTB => {
        spriteTB.savedVel = {x: spriteTB.vel.x, y: spriteTB.vel.y};
        spriteTB.vel.x = 0;
        spriteTB.vel.y = 0;
    });

    fireballGroup.forEach(spriteFB => {
        spriteFB.savedVel = {x: spriteFB.vel.x, y: spriteFB.vel.y};
        spriteFB.vel.x = 0;
        spriteFB.vel.y = 0;
    });

    MBSlashData.forEach(spriteMBS => {
        spriteMBS.savedVel = {x: spriteMBS.sprite.vel.x, y: spriteMBS.sprite.vel.y};
        spriteMBS.sprite.vel.x = 0;
        spriteMBS.sprite.vel.y = 0;
    });
}

function startMotion(){
    blocksGroup.forEach(spriteB => {
        if(spriteB.savedVel){
            spriteB.vel.x = spriteB.savedVel.x;
            spriteB.vel.y = spriteB.savedVel.y;
            delete spriteB.savedVel;
        }
    });
    
    if(player.savedVel){
        player.vel.x = player.savedVel.x;
        player.vel.y = player.savedVel.y;
        delete player.savedVel;
    }

    if(miniboss.savedVel){
        miniboss.vel.x = miniboss.savedVel.x;
        miniboss.vel.y = miniboss.savedVel.y;
        delete miniboss.savedVel;
    }

    slimesGroup.forEach(spriteS => {
        if(spriteS.savedVel){
            spriteS.vel.x = spriteS.savedVel.x;
            spriteS.vel.y = spriteS.savedVel.y;
            delete spriteS.savedVel;
        }
    });

    poisonGasData.forEach(spritePG => {
        let s = spritePG.sprite;
        if(s.savedVel){
            s.vel.x = s.savedVel.x;
            s.vel.y = s.savedVel.y;
            delete s.savedVel;
        }
    });

    turretBulletGroup.forEach(spriteTB => {
        if(spriteTB.savedVel){
            spriteTB.vel.x = spriteTB.savedVel.x;
            spriteTB.vel.y = spriteTB.savedVel.y;
            delete spriteTB.savedVel;
        }
    });

    fireballGroup.forEach(spriteFB => {
        if(spriteFB.savedVel){
            spriteFB.vel.x = spriteFB.savedVel.x;
            spriteFB.vel.y = spriteFB.savedVel.y;
            delete spriteFB.savedVel;
        }
    });

     MBSlashData.forEach(spriteMBS => {
        if(spriteMBS.savedVel){
            spriteMBS.sprite.vel.x = spriteMBS.savedVel.x;
            spriteMBS.sprite.vel.y = spriteMBS.savedVel.y;
            delete spriteMBS.savedVel;
        }
    });
}








