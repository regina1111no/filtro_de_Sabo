nosex=0;
nosey=0;
function preload()
{
     Filtro= loadImage("https://i.postimg.cc/TPrKqZgt/4061bbcd5ccf6bc33fbc2d97769ecfc4-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(475,250);
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("El modelo se cargo exitosamente :D");
}
function  gotPoses(results)    {
    if(results.length>0){
        console.log(results);
        console.log("nose x:"+results[0].pose.nose.x);
        console.log("nose y:"+results[0].pose.nose.y);
        nosex= results[0].pose.nose.x-200;
        nosey= results[0].pose.nose.y-170;
    }
}
function draw() {
    image(video, 0, 0, 500, 500);
    image(Filtro,nosex,nosey, 400,200);
  }
   
  function take_snapshot(){    
    save('myFilterImage.png');
  }