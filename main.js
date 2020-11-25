function preload(){

}
function setup(){
    canvas=createCanvas(600,550);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,550);
}
function take_snapshot(){
    setTimeout(function(){
        for(var i=0;i<12;i++){
            var name="My Image "+i+".PNG";
            save(name);
            console.log("Image Taken, Name: "+name);
        }
    });
}