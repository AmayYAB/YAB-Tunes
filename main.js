
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Raataan Lambiyan", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Ranjha", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Maan Bariyaan 2.0", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Teri Mitt(Female)", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Teri Mitt(Male)", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Makhna", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Zaalima", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Shabhasiyan", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Maa Tuje Saalam", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Ghungroo", filePath: "10.mp3", coverPath: "10.jpg"},
    {songName: "Haan Main Galat", filePath: "11.mp3", coverPath: "11.jpg"},
    {songName: "O Desh Mere(Bhuj)", filePath: "12.mp3", coverPath: "12.jpg"},
    {songName: "All in-one songs", filePath: "13.mp3", coverPath: "Music_Logo.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{    
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})