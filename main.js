song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("Harry-Potter-Theme.mp3");
    song2 = loadSound("Peter Pan Theme.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    if (scoreRightWrist> 0.2) {
        circle(righttWristX,rightWristY,20);
        if (rightWristY>0 && rightWristY<=500) {
            play(song1)
            song.rate(1);
        }      
        else(scoreLeftWrist > 0.1) 
            circle(leftWristX,leftWristY,20); 
            if (leftWristY>0 && leftWristY<=500) {
                play(song2)
                song.rate(1); 
            }}}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        LeftWristX = results[0].pose.LeftWrist.X;
        LeftWristY = results[0].pose.LeftWrist.Y;
        console.log("Left Wrist X ="+LeftWristX+"Left Wrist Y ="+ LeftWristY);
        rightWristX = results[0].pose.RightWrist.X;
        rightWristY = results[0].pose.RightWrist.Y;
        console.log("Right Wrist X ="+rightWristX+"Right Wrist Y ="+ rightWristY);
        }
}