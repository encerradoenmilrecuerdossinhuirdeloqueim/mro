
function preload()
{
    mario_die=loadSound("mariodie.wav");
    mario_gameover=loadSound("gameover.wav");
    mario_jump=loadSound("jump.wav");
    mario_coin=loadSound("coin.wav");
    mario_kick=loadSound("kick.wav");
    world_start=loadSound("world_start.wav");
    setSprites();
    MarioAnimation();
}


function setup()
{
    canvas=createCanvas(1700, 1000);
    canvas.parent("canvas");
    instializeInSetup(mario);
    video=createCapture(VIDEO);
    video.size(16, 10);
    video.parent("game_console");
    poseNet=ml5.poseNet(video, ctq);
    poseNet.on("pose", qtc);
}

function ctq()
{
 console.log("cargado");
 
}
function qtc(dore)
{
if(dore.length>0)
{
    console.log(dore);
    noseX=dore[0].pose.nose.x;
    noseY=dore[0].pose.nose.y;
}
}
function draw()
{
    game();
}