
import { Zlist } from './playlist.js';



function fixZLink (link) {
 link = link.replace("v/","downloadAudio?key=").replace("/file.html","&amp")
 return link
 }; 

function setTrackLink(link){
 link = fixZLink(Zlist[link][1])
 return link
};
var nr = 0;

var CurrentTrack = setTrackLink(0);

function nextTrack(){ 
 if (nr == Zlist.length -1){
  nr = 0;
 }else{
  nr += 1;  
 }
 song.src = setTrackLink(nr)
 songTitle.textContent = Zlist[nr][0]
 song.play();


}


var song = new Audio(); 

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

song.src = (CurrentTrack);


function run(){

if(song.paused){ // fix src
 song.play();
 document.getElementById("play").innerHTML = "Pause"
}
else{
 song.pause();
 document.getElementById("play").innerHTML = "Play"
} 

};

// Time Slider //
song.addEventListener('timeupdate',function(){ 
            
 var position = song.currentTime / song.duration;
 
 fillBar.style.width = position * 100 +'%';
});

/* fillbar.addEventListener = function() {
 song.currentTime = fillbar.value * song.duration / 100;
} */

document.getElementById("play").onclick = function() {run()}; //myBtnnxt
document.getElementById("next").onclick = function() {nextTrack()};
