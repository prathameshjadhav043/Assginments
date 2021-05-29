var image = document.getElementById("img");
var contt = document.getElementById("container");
var btn = document.createElement("button");
var imgCounter=document.querySelector("#txtCounter");
var video = document.querySelector("video");
// var circleCounter=["pehlagol","","","",""];
var circleCounter=document.querySelector("#allCircle").children;

contt.appendChild(btn);
btn.innerHTML="play";
var images=[
    "https://images.unsplash.com/photo-1622228405568-7b353ef1a939?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156__340.jpg",
    "https://cdn.pixabay.com/photo/2021/05/23/06/39/zebra-6275284__340.jpg",
    "https://cdn.pixabay.com/photo/2021/05/18/10/22/sheep-6262928__340.jpg",
    "https://cdn.pixabay.com/photo/2020/02/05/06/24/cat-4820202__340.jpg"
];

var border = [
    "2px solid peru",
    "2px solid violet",
    "2px solid indigo",
    "2px solid aquamarine",
    "2px solid green",
]

function colorChange(i){
    circleCounter[i].style.background="whitesmoke";
    var count=i;
    while(true){
        count++;
        if(count==5){
            count=0;
        }
        if(count==i){
            return;
        }
        circleCounter[count].style.background="rgba(0,0,0,0.6)";
       
    }
}

var i=0;
var a;
image.src=images[i];
image.style.border=border[i]
function screenSaver(){
    i++;
    if(i==images.length){
        i=0;
    }
    // console.log(i);
    imgCounter.innerHTML=i+1;
    image.src=images[i];
    image.style.border=border[i];
    colorChange(i);
    a=setTimeout("screenSaver()",1000);
    
}
var j=0;
function clickk(){
    
    if(j%2!=0){
        clearTimeout(a);
        btn.innerHTML="play";
        video.play();
    }
    else{
        screenSaver();
        btn.innerHTML="pause";
        video.pause();
    }
    j++;
}
btn.addEventListener("click", clickk);
