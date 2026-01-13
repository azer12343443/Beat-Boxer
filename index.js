btn=document.querySelectorAll("button");

let audios = ["sounds/tom-3.mp3","sounds/tom-1.mp3","sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3","sounds/tom-2.mp3", "sounds/tom-4.mp3"];
let joue= new Audio("sounds/Dynasty__Official_Audio____MIIA(360p).mp3");

for(let n=0; n<btn.length; n++)
{
    btn[n].addEventListener("click", function()
    {
        playsoundClick(this.innerHTML);
        boutonAnimation(this.innerHTML);
        console.log(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    playsoundOld(event.key); 
    console.log(event.key);
    boutonAnimation(event.key); 
});

function playsoundClick(key){
    switch(key){
    case "d":
        var audio = new Audio(audios[0]);
        audio.play();
        break;

    case "f":
        var audio = new Audio(audios[1]);
        audio.play();
        break;

    case "l":
        var audio = new Audio(audios[2]);
        audio.play();
        break;

    case "s":
        var audio = new Audio(audios[3]);
        audio.play();
        break;

    case "h":
        var audio = new Audio(audios[4]);
        audio.play();
        break;  

    case "j":
        var audio = new Audio(audios[5]);
        audio.play();
        break;

    case "k":
        var audio = new Audio(audios[6]);
        audio.play();
        break;
    }
}

function playsoundOld(key){
    switch(key){
    case "d":
        var audio = new Audio(audios[0]);
        audio.play();
        break;

    case "f":
        var audio = new Audio(audios[1]);
        audio.play();
        break;

    case "l":
        var audio = new Audio(audios[2]);
        audio.play();
        break;

    case "s":
        var audio = new Audio(audios[3]);
        audio.play();
        break;

    case "h":
        var audio = new Audio(audios[4]);
        audio.play();
        break;  

    case "j":
        var audio = new Audio(audios[5]);
        audio.play();
        break;

    case "k":
        var audio = new Audio(audios[6]);
        audio.play();
        break;
    }
}

function boutonAnimation(currentKey){
    let activebtn=document.querySelector("."+currentKey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },200);
}
