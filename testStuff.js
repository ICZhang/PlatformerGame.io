let testSprite1, testSprite2;


function setup(){
   createCanvas(1200,1000);

   testSprite1 = new Sprite(400, 400, 50, 50);
   testSprite2 = new Sprite(200, 400, 50, 50);
   testSprite1.collider = "none";
   testSprite2.collider = "dynamic";
   testSprite1.color = "blue";
   testSprite2.color = "red";
}

function draw(){
   background("lightblue");

   if(kb.pressing("a")) testSprite1.x -= 5;
   if(kb.pressing("d")) testSprite1.x += 5;
   if(kb.pressing("w")) testSprite1.y -= 5;
   if(kb.pressing("s")) testSprite1.y += 5;
    
    if(testSprite1.overlapping(testSprite2) && kb.presses("e")) background("orange");

   text("Collider: " + testSprite1.collider, 400, 650);
   
   rect(50, 50, 50, 50);
}

