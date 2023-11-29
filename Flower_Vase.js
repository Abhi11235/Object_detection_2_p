function preload(){
    img=loadImage("dog_cat.jpg");
    }
    
    
    
    
    function setup() {
        canvas=createCanvas(640, 420);
        canvas.center();
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
      document.getElementById("status").innerHTML= "status: Detecting Objects"; 
    }
    
    function modelLoaded() {
        console.log("Model Loaded!");
         Status=true;
         objectDetector.detect(video, gotResults);
    }
    
    function gotResults(error,results){
        if(error) {
            console.log(error);
        }
        console.log(results);
        objects=results;
    }