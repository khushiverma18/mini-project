console.log("hlo hii")
let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterplay=document.getElementById("masterplay");
let my=document.getElementById("my")
let gs=document.getElementById("gs")
let items=Array.from(document.getElementsByClassName("item"));
let songs=[
    {filepath:"1.mp3",coverpath:"sq.jpg"},
    {filepath:"3.mp3",coverpath:"sq3.jpg"},
    {filepath:"2.mp3",coverpath:"sq2.webp"},
    {filepath:"4.mp3",coverpath:"sq4.jpg"},
    {filepath:"5.mp3",coverpath:"sq5.jpg"},
    {filepath:"6.mp3",coverpath:"sq6.jpg"},
    {filepath:"7.mp3",coverpath:"sq7.jpg"},
    {filepath:"8.mp3",coverpath:"sq8.jpg"},
]
items.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    
})
 //play audio
 masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
       masterplay.classList.remove("fa-play-circle");
       masterplay.classList.add("fa-pause-circle");
        gs.style.opacity=1;
    }
    else{
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gs.style.opacity=0;
}
 })
 //event listen
 audioElement.addEventListener('timeupdate',()=>{
    //update seeker
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    my.value=progress;
})
my.addEventListener('change',()=>{
    audioElement.currentTime=my.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle')
            element.classList.add('fa-play-circle')

})
    }
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      if(audioElement.paused||audioElement.currentTime<=0){
       songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`${songIndex}.mp3`;
        audioElement.currentTime=0;
          audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
      }
      else{
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-pause-circle')
        e.target.classList.add('fa-play-circle')
        audioElement.src=`${songIndex}.mp3`;
        audioElement.currentTime=progress;
          audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
      }
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
      songIndex=0
    }
    else{
  songIndex +=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
      audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('pre').addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex=0
    }
    else{
  songIndex -=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
      audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})