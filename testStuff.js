let arrowsGroup, arrowsData;
let arrowImageDefault;
let wall1, wall2, wall3, wall4;

function gs(fileName){
    return "/GameSprites/" + fileName;  
}


function preload(){
    arrowImageDefault = loadImage(gs("arrowD.png"));
    //arrowImageDefault = loadImage("arrowD.png");
}




function setup(){
    createCanvas(1200,1000);
    arrowsGroup = new Group();
    arrowsData = [];  
    wall1 = new Sprite(600,0, 1500, 100);//Top
    wall2 = new Sprite(600,1000, 1500, 100);//Bot
    wall3 = new Sprite(0,500, 100, 1500);//Left
    wall4 = new Sprite(1200,500, 100, 1500);//Right
    wall1.collider = "static";
    wall2.collider = "static";
    wall3.collider = "static";
    wall4.collider = "static";
}




function draw(){
    background("lightblue");

    if(kb.presses("space")) spawnArrow(400, 400, 5, 1);
    text(Math.round((mouseX - canvas.offsetLeft) / 0.7) + "," + Math.round((mouseY - canvas.offsetTop) / 0.7 - 40), 400, 100);

    text("Arrows: " + arrowsGroup.length, 200, 450);

    rect(50, 50, 50, 50);

    //0 degrees is pointed down
    arrowsGroup.forEach(spriteA => {
        let index = arrowsGroup.indexOf(spriteA);
        arrowsData[index].update();
        text("Angle: " + spriteA.rotation % 360, spriteA.x, spriteA.y - 25);
        text("Rotation speed: " + spriteA.rotationSpeed, spriteA.x, spriteA.y - 50);
        
    });
 
}




class BossArrowSprite{
  //x, y, speed, rotation
    constructor(x, y, s, r){
        let arrowObj = new arrowsGroup.Sprite();
        this.sprite = arrowObj;
        arrowObj.x = x;
        arrowObj.y = y;
        arrowObj.image = arrowImageDefault;
        arrowObj.image.scale.x = 40 / arrowObj.image.width;
        arrowObj.image.scale.y = 120 / arrowObj.image.height;
        arrowObj.width = 30; //30
        arrowObj.height = 110;//110
        arrowObj.collider = "dynamic"; //Experiment more with kinematic collider
        arrowObj.debug = true;
        arrowObj.rotationSpeed = r; //1.57 is basically the max rotation speed

        this.ESpeed = s;
        this.launched = false;
    }


    update(){
        stroke(0);
        line(this.sprite.x, this.sprite.y, mouseX, mouseY);
        this.sprite.rotationSpeed *= 1.01;

        if (!this.launched) {
            // Spin the arrow
            this.sprite.rotation = (this.sprite.rotation + this.sprite.rotationSpeed) % 360;

            if(this.sprite.rotationSpeed > 5) this.launched = true;

            if(this.launched == true){
                let dx = mouseX - this.sprite.x;
                let dy = mouseY - this.sprite.y;
                let targetAngle = atan2(dy, dx);
                this.sprite.vel.x = this.ESpeed * cos(targetAngle);
                this.sprite.vel.y = this.ESpeed * sin(targetAngle);
            }
        }
        else this.sprite.rotationSpeed = 0;
    } 
}

function spawnArrow(x, y, s, r){
    let newArrow = new BossArrowSprite(x, y, s, r);
    arrowsData.push(newArrow);    
}













