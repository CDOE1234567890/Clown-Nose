NoseX = 0;
NoseY = 0;

function preload() {
clown_nose = loadImage("download-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is initialized");
}

function draw() {
image(video, 0, 0, 300, 300);
// circle(NoseX, NoseY, 20);
fill(255, 0, 0);
stroke(255, 0, 0);
image(clown_nose, NoseX, NoseY, 60, 60);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x - 180;
        NoseY = results[0].pose.nose.y - 140;
        console.log(" results x =" + NoseX);
        console.log(" results y = " + NoseY);
    }
}