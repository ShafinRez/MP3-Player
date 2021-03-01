
let fill = document.querySelector('.fill');
let audios = ["Giveon - When It's All Said And Done (Official Audio).mp3", "Brent FaiyazGang Over Luv (Sonder Son).mp3", "Devil In A New Dress.mp3", 'PGT.mp3']
let covers = ["Giveon - When It's All Said And Done.jpg", 'sonders son.jpg', 'MBDTF.jpg', 'PGT.jpg']
let currentTime = document.querySelector(".time")
let endTime = document.querySelector(".endTime")

let audio = new Audio();
let currentSong = 0;


window.onload = playSong();

function playSong(){
    audio.src = audios[currentSong];
    audio.play();
    audio.volume = 0.5;
}

function togglePlay(){
    if(audio.paused){
        audio.play();
        let playBtns = document.querySelector('.play-pause');
        playBtns.innerHTML = '<i class = "fa fa-pause"></i>'
    } else{
        audio.pause();
        let playBtns = document.querySelector('.play-pause');
        playBtns.innerHTML = '<i class = "fa fa-play"></i>'
    }
}

//this is for the song bar
// SOME HOW MANAGE TO BE ABLE TO CHANGE LoCATION OF SONG 
function fillbar(){
    let position = audio.currentTime / audio.duration;
    fill.style.width = position * 100 + '%';

    converTime(Math.round(audio.currentTime));

    if(audio.ended){
        nextAudio();
    }
}

audio.addEventListener('timeupdate',fillbar)

//the time updating 
function converTime(seconds){
    let min = Math.floor(seconds/60);
    let sec  = seconds % 60; 
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    currentTime.textContent = min + ':' +sec;

    totalTime(Math.round(audio.duration));

}

function totalTime(seconds){
    let min = Math.floor(seconds/60);
    let sec  = seconds % 60; 
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    endTime.textContent = ' ' + min + ':' +sec;
}


// next and prev buttons 

function nextAudio(){
    currentSong++;
    if(!audios[currentSong]) {
        currentSong = 0;
    }
    playSong();
    playBtns = document.querySelector('.play-pause');
    playBtns.innerHTML = '<i class = "fa fa-pause"></i>'

    //jquery
    $('.img img').attr('src', covers[currentSong]);
    artist();
    
}


function prevAudio(){
    currentSong--;
    if(currentSong < 0) {
        currentSong = audios.length-1;
    }
    playSong();
    playBtns = document.querySelector('.play-pause');
    playBtns.innerHTML = '<i class = "fa fa-pause"></i>'
    //jquery
    $('.img img').attr('src', covers[currentSong]);
    artist();
}

//FIX repetition
function artist(){
    var artistLink = document.querySelector('.artistlink');
    var songTitle = document.querySelector('.songTitle');
    if(covers[currentSong] == 'sonders son.jpg'){
        songTitle.innerHTML = 'Sonders Son'
        artistLink.innerHTML = "<a href = " + "'https://open.spotify.com/artist/3tlXnStJ1fFhdScmQeLpuG'"  + "class = 'artistlink'" + "target='_blank'>" + "<p>Brent Faiyaz</p></a>" 
        document.body.style.backgroundImage = "linear-gradient(to top, #feada6 0%, #f5efef 100%)";
    }
    else if (covers[currentSong] == "Giveon - When It's All Said And Done.jpg") {
        artistLink.innerHTML = 'Giveon';
        songTitle.innerHTML ="When It's All Said And Done";
        document.body.style.backgroundImage = 'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)';
    }
    else if (covers[currentSong] == "MBDTF.jpg"){
        songTitle.innerHTML = 'Devil In A New Dress';
        artistLink.innerHTML = "<a href = " + "'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x'"  + "class = 'artistlink'" + "target='_blank'>" + "<p>Kanye West</p></a>";
        document.body.style.backgroundImage = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)";
    }
    else if (covers[currentSong] == 'PGT.jpg'){
        songTitle.innerHTML = 'PGT';
        artistLink.innerHTML = "<a href = " + "'https://open.spotify.com/artist/2HPaUgqeutzr3jx5a9WyDV'"  + "class = 'artistlink'" + "target='_blank'>" + "<p>PARTYNEXTDOOR</p></a>";
        document.body.style.backgroundImage = "linear-gradient(to top, #e6b980 0%, #eacda3 100%)";
    }
}


/*
function liked(){
    var heartColor = document.querySelector(".far fa-hearts");
    heartColor.style.color = 'red';
    

}
*/


function shuffle(){
    currentSong = Math.floor(Math.random() * audios.length); 
    playSong();
    playBtns = document.querySelector('.play-pause');
    playBtns.innerHTML = '<i class = "fa fa-pause"></i>'
    //jquery
    $('.img img').attr('src', covers[currentSong]);
    artist();
}



function volume(val){
    audio.volume = val/100;
}


var volumeMute = document.querySelector(".volume-up");

function mute(){
    if(audio.muted == false){
        console.log(audio.volume)
        audio.muted = true;
        document.querySelector('.volume-up i').className = 'fa fa-volume-mute';
    }else{
        unMute();
    }
    
}

function unMute(){
    if(audio.muted == true){
        audio.muted = false;
        document.querySelector('.volume-up i').className = 'fa fa-volume-up';
    }
}

/*
function loop(){
    audio.loop = true;
    document.getElementsByClassName('fa fa-retweet').style.color('rgba(255,140,0, 0.5)');
}
*/