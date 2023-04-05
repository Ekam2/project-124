user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "! " +"     "  +  "    THIS APP IS FONT MANIPULATOR APP        "  + "           (also click to go back)"  ;


function d(){
    window.location = "hi.html";
}

function note(){
window.alert("Get Your Left And Right Wrist Closer To Each other To Reduce The Font size And To Increase The Font Size Keep Your Left And Right Wrist Far From Each Other.");
}

    function setup(){
        video = createCapture(VIDEO);
        video.size(400,400);
        video.position(10,90);
    
        canvas = createCanvas(600,400);
        canvas.position(550,100);
    
        poseNet = ml5.poseNet(video,modelLoaded);
        poseNet.on('pose',gotposes);
    }




function draw(){
    background("#9996e3");
}

function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        
    }
}