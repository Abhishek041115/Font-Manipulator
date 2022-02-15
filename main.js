function setup()
{
video=createCapture(VIDEO);
video.size(400,300);
video.position(200,120)
canvas=createCanvas(440,440);
canvas.position(700,110);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
console.log("Model is Loaded");
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
}
}