song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("Harry-Potter-Theme.mp3");
    song = loadSound("Peter Pan Theme.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
}