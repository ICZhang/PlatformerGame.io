let fireballGroup, fireballData;
let fireballImageDefaultR, fireballImageDefaultL;

let arr = [1, 2, 3];

function gs(fileName){
    return "/GameSprites/" + fileName;  
}

function preload(){
    fireballImageDefaultL = loadImage(gs("a1.png"));
    fireballImageDefaultR = loadImage(gs("b1.png"));
}


function setup(){
   createCanvas(1200,1000);
  
   fireballGroup = new Group();
   fireballData = [];

   spawnFireball(400, 400, "r", 11);
   spawnFireball(400, 500, "l", 11);
}


function draw(){
   background("lightblue");


   text(Math.round(mouseX) + "," + Math.round(mouseY), 200, 400);
   text("Fireballs: " + fireballGroup.length, 200, 450);
   text(arr[1], 200, 500);


   rect(50, 50, 50, 50);


   //0 degrees is pointed down
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
   }

    updateAnimation() {
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
        this.sprite.vel.x *= 0.9;
        let index = fireballGroup.indexOf(this.sprite);
        if(Math.abs(this.sprite.vel.x) < 0.05){ 
            this.disappear();
            return;
        }

        for(let spriteS of slimesGroup){
            if (this.sprite.overlapping(spriteS)) {
                let index2 = slimesGroup.indexOf(spriteS);
                slimesData[index2].EHealth -= 50;
                this.disappear();
                return;
            }
        }
        
        for(let spriteB of blocksGroup){
            if (this.sprite.overlapping(spriteB)) {
                this.disappear();
                return;
            }
        }

        if(this.sprite.overlapping(portal)) this.disappear();

        if(this.sprite.overlapping(box)){
            this.disappear();
            box.x = -200;
        }

    }

    disappear(){
        //Prevent any indexing issues
        if(fireballGroup.includes(this.sprite)) {
            fireballGroup.remove(this.sprite);
        }
        const index = fireballData.indexOf(this);
        if (index !== -1) {
            fireballData.splice(index, 1);
        }
    }
}


function spawnFireball(x, y, d, s){
   let newFireball = new fireballSprite(x, y, d, s);
   fireballData.push(newFireball);
}





