console.log("hello");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let progress = document.getElementById('progress');
let masterPlay = document.getElementById('masterPlay');
let paused = document.getElementById('paused');
let duration = document.getElementById('duration');
let list = Array.from(document.getElementsByClassName('list'));

let songs = [
    {songName: "salam", filepath: "1.mp3"},
    {songName: "salam", filepath: "/music/2.mp3"},
    {songName: "salam", filepath: "/music/3.mp3"},
    {songName: "Kallo Ajay Hooda", filepath: "/music/4.mp3"},
    {songName: "Zaroori Tha", filepath: "/music/39.mp3"},
    {songName: "ALI MOLA ALI DAM", filepath: "/music/6.mp3"},
    {songName: "Apna Raja ka fan hum bani", filepath: "/music/7.m4a"},
    {songName: "Apne Labhar Ko Dhokha Do", filepath: "/music/8.mp3"},
    {songName: "ASSUBHU BADA", filepath: "/music/9.mp3"},
    {songName: "badli badli lage", filepath: "/music/10.mp3"},
    {songName: "Bapu_Zimidar", filepath: "/music/11.mp3"},
    {songName: "Bhar Do Jholi Meri", filepath: "/music/12.mp3"},
    {songName: "charal jawani Rasgolla", filepath: "/music/13.mp3"},
    {songName: "Daad Mein Bandook Rakhela", filepath: "/music/14.mp3"},
    {songName: "Ey Hasnain Ke Nana", filepath: "/music/15.mp3"},
    {songName: "Faslon Ko Takkalu", filepath: "/music/16.mp3"},
    {songName: "Ghunghat Bain Karade", filepath: "/music/17.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "GODANWA", filepath: "/music/18.mp3"},
    {songName: "Heroine", filepath: "/music/19.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Humne Ankhon Se Dekha", filepath: "/music/20.mp3"},
    {songName: "kala chachma laga lijiye", filepath: "/music/21.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Kamariya Gole Gole Dole Raja Ji", filepath: "/music/22.mp3"},
    {songName: "Kandhe Pe Dunali", filepath: "/music/23.mp3"},
    {songName: "Kardo Karam", filepath: "/music/24.mp3"},
    {songName: "Khawaja_Mere_Khawaja", filepath: "/music/25.mp3"},
    {songName: "Laad Piya Ke", filepath: "/music/26.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Matak chalungi", filepath: "/music/27.mp3"},
    {songName: "Raja Maja Liya Loot", filepath: "/music/28.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Saj Ke Sawar Ke", filepath: "/music/29.mp3"},
    {songName: "Sapna Choudhary", filepath: "/music/30.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Sent Gamkauwa", filepath: "/music/31.mp3"},
    {songName: "Solid Body", filepath: "/music/32.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Tajdar e Haram", filepath: "/music/33.mp3"},
    {songName: "Teri Aakhya Ka Yo Kajal", filepath: "/music/34.mp3"},{songName: "salam", filepath: "/music/1.mp3"},
    {songName: "Titliaan", filepath: "/music/35.mp3"},
    {songName: "Tohre Me Base Raja", filepath: "/music/36.mp3"},
    {songName: "Wo Mera Nabi Hai", filepath: "/music/37.mp3"},
    {songName: "Ya Rabbe Mustafa to Mujhe Hajj Pa Bula", filepath: "/music/38.mp3"},
]
masterPlay.addEventListener('click', ()=>{
    if(audioElement.pause || audioElement.currentTime <=0){
        audioElement.play();
        document.getElementById("duration").style.innerText = audioElement.duration;
        console.log(duration);
        document.getElementById("masterPlay").style.display = "none";
        document.getElementById("paused").style.display = "inline";

    }
})
paused.addEventListener('click',()=>{
    audioElement.pause();
    document.getElementById("masterPlay").style.display = "inline";
    document.getElementById("paused").style.display = "none";
})

audioElement.addEventListener('timeupdate', ()=>{
    progres = ((audioElement.currentTime/audioElement.duration)*100);
    console.log('timeupdate');
    progress.value = progres;

})


progress.addEventListener('change', ()=>{
    audioElement.currentTime = progress.value * audioElement.duration/100;
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=38){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    audioElement.src = `/music/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    document.getElementById("masterPlay").style.display = "none";
    document.getElementById("paused").style.display = "inline";
})


document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src = `/music/${songIndex+1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    document.getElementById("masterPlay").style.display = "none";
    document.getElementById("paused").style.display = "inline";
})

Array.from(document.getElementsByClassName("play")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index =parseInt(e.target.id);
        audioElement.src = `/music/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById("masterPlay").style.display = "none";
        document.getElementById("paused").style.display = "inline";
       

    })
})

document.querySelector("#menu").addEventListener("click", ()=>{
    document.querySelector(".side").style.display = "inline"
})

document.querySelector("#cross").addEventListener("click", ()=>{
    document.querySelector(".side").style.display = "none"
})
