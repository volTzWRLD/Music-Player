var muted_Volume = false;

var loop = false;

var posMusic = 0;

let number = 0.1;

let Interval, timeOut, Interval_2, timeOut_2;

var style = document.getElementById('style')

let input_Music     = document.getElementById("range");
let input_Volume    = document.getElementById("Audio-range");

let progress_Music  = document.getElementsByClassName("progressBar-Music")[0];
let progress_Volume = document.getElementById("progressAudio")

let loop_Audio = document.getElementById("loop"); 

let show_ControlAudio   = document.getElementById("options");
let control_Audio       = document.getElementById("options");
let option_Description  = document.getElementById("description-Option");

let order_Options  = document.getElementById("order");
let control_Div    = document.getElementById("control");
let order_Control  = document.getElementById("order-control");
let order_Velocity = document.getElementsByClassName("order-Velocity")[0];
let order_Playlist = document.getElementsByClassName("playlist-Order")[0];

let paragraph_Velocity = document.getElementById("velocity");
let paragraph_Playlist = document.getElementById("playlist-2");

let choose_Speed     = document.getElementById("speed");
let choose_Playlist   = document.getElementById("playlist");

const btn_Close        = document.getElementById("Close");
const btn_arrowBack    = document.getElementById("arrow-back");
const btn_arrowBack_2  = document.getElementById("back-Playlist");

const final_Result    = document.getElementsByClassName('paragraph-stop')[1];
const stopWatch_Music = document.getElementsByClassName('paragraph-stop')[0];

const btn_Back      = document.getElementById("back-Music");
const btn_backWards = document.getElementById("backWards-Music");
const btn_Play      = document.getElementById("play-Music");
const btn_Pause     = document.getElementById("pause");
const btn_forWards  = document.getElementById("forWards-Music");
const btn_Next      = document.getElementById("next-Music");

const music_Tracks = document.querySelector("audio");

const audio_Desmuted = document.getElementById("audio");
let   audio_Div      = document.getElementById("audio-Div")
const audio_Muted    = document.getElementById("muted");

btn_forWards.addEventListener("click", increaseTime);
btn_backWards.addEventListener("click", decreaseTime);
btn_Play.addEventListener("click", playMusic);
btn_Next.addEventListener("click", nextMusic);
btn_Back.addEventListener("click", backMusic);

input_Music.addEventListener("input", chooseTime);
input_Volume.addEventListener("input", chooseVolume);
audio_Desmuted.addEventListener("click", muteVolume);

loop_Audio.addEventListener("click", enableLoop);

show_ControlAudio.addEventListener("mouseover", showDescription);
control_Audio.addEventListener("click", showMenu);

paragraph_Velocity.addEventListener("click", showVelocity);
paragraph_Playlist.addEventListener("click", showPlaylist);

btn_Close.addEventListener("click", executeClose);
btn_arrowBack.addEventListener("click", executeBack);
btn_arrowBack_2.addEventListener("click", executeBackPlaylist);

let Playlist = [

    createObject
    (
        //NAME
        "Save a Prayer 2009 - Remaster",
        //SINGER
        "Duran Duran",
        //File Photo
        "./images/SaveAprayer.jpg",
        //File Audio
        "./musics/SaveAprayer.mp3",
        //Progress
        verifyTime,
        //Design
        "(255,0,0, 0.349)",
        //LIST 
        "(255,0,0, 0.549)",
        //CONTROL
        "(255,0,0, 0.549)",
        //VELOCITY 
        "(255,0,0, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(139,0,0)", 
        "(139,0,0)", 
        //VOLUMEINPUT AND PROGRESS
        "(139,0,0)",  
        "(139,0,0)"

    ),

    createObject
    (
        // NAME//
        "Tempo Perdido", 
        //SINGER 
        "Legião Urbana",
        //FILE IMAGE
        "./images/Legiao_Urbana.jpg", 
        // FILE AUDIO
        "./musics/Tempo_Perdido.mp3",
        //Progress
        verifyTime,
        //DESIGN
        "(18, 39, 59, 0.637)",
        //LIST 
        "(72, 154, 248, 0.349)",
        //CONTROL
        "(72, 154, 248, 0.349)",
        //VELOCITY 
        "(72, 154, 248, 0.349)", 
        //MUSICINPUT AND PROGRESS
        "(0, 132, 255)", 
        "(0, 132, 255)", 
        //VOLUMEINPUT AND PROGRESS
        "(0, 132, 255)", 
        "(0, 132, 255)"
    ),

    createObject
    (
        // NAME//
        "Sunday Bloody Sunday", 
        //SINGER 
        "U2", 
         //FILE IMAGE
        "./images/SundayBlood.jpg", 
        // FILE AUDIO
        "./musics/SundayBloody.mp3",
        //Progress
        verifyTime,
        //DESIGN
        "(255,99,71, 0.349)",
        //LIST 
        "(165,42,42, 0.549)",
        //CONTROL
        "(165,42,42, 0.549)",
        //VELOCITY 
        "(165,42,42, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(165,42,42)", 
        "(165,42,42)", 
        //VOLUMEINPUT AND PROGRESS
        "(165,42,42)", 
        "(165,42,42)"
    ),

   createObject
    (
        //NAME
        "Owner of a Lonely Heart",
        //SINGER
        "Yes",
        //File Photo
        "./images/ownerLonely.jpg",
        //File Audio
        "./musics/ownerLonely.mp3",
        //Progress
        verifyTime,
        //Design
        "(160,82,45, 0.349)",
        //LIST 
        "(160,82,45, 0.549)",
        //CONTROL
        "(160,82,45, 0.549)",
        //VELOCITY 
        "(160,82,45, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(139,69,19)", 
        "(139,69,19)", 
        //VOLUMEINPUT AND PROGRESS
        "(139,69,19)",  
        "(139,69,19)"

    ),

    createObject
    (
        //NAME
        "Hold The Line",
        //SINGER
        "Toto",
        //File Photo
        "./images/holdTheLine.jpg",
        //File Audio
        "./musics/HoldtheLine.mp3",
        //Progress
        verifyTime,
        //Design
        "(123,104,238, 0.349)",
        //LIST 
        "(123,104,238, 0.549)",
        //CONTROL
        "(123,104,238, 0.549)",
        //VELOCITY 
        "(123,104,238, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(128,0,128)", 
        "(128,0,128)", 
        //VOLUMEINPUT AND PROGRESS
        "(128,0,128)",  
        "(128,0,128)"

    ),

    createObject
    (
        //NAME
        "Acenda o farol",
        //SINGER
        "Tim Maia",
        //File Photo
        "./images/timMaia.jpg",
        //File Audio
        "./musics/AcendaOFarol.mp3",
        //Progress
        verifyTime,
        //Design
        "(112,128,144, 0.349)",
        //LIST 
        "(112,128,144, 0.549)",
        //CONTROL
        "(112,128,144, 0.549)",
        //VELOCITY 
        "(112,128,144, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(112,128,144)", 
        "(112,128,144)", 
        //VOLUMEINPUT AND PROGRESS
        "(128,0,128)",  
        "(128,0,128)"

    ),

    createObject
    (
        //NAME
        "Eduarda e Mônica",
        //SINGER
        "Legião Urbana",
        //File Photo
        "./images/EduardoEmonica.jpg",
        //File Audio
        "./musics/EduardoEmonica.mp3",
        //Progress
        verifyTime,
        //Design
        "(255,140,0, 0.349)",
        //LIST 
        "(255,140,0, 0.549)",
        //CONTROL
        "(255,140,0, 0.549)",
        //VELOCITY 
        "(255,140,0, 0.549)", 
        //MUSICINPUT AND PROGRESS
        "(255,69,0)", 
        "(255,69,0)", 
        //VOLUMEINPUT AND PROGRESS
        "(255,69,0)",  
        "(255,69,0)"

    ),
    
]

function createObject(name_Music, name_Singer, name_filePhoto, name_fileAudio, account, colorDesign_HEX, colorList_HEX, colorControl_HEX, colorVelocity_HEX, colorMusicInput_HEX, colorProgressMusic_HEX, colorAudioInput_HEX, colorProgressVolume_HEX){

    return {

       song: name_Music,
       singer: name_Singer,   
       filePhoto: name_filePhoto,
       fileAudio: name_fileAudio,
       accountProgress: account,
       backgroundDesign: colorDesign_HEX,
       backgroundList: colorList_HEX,
       backgroundControl: colorControl_HEX,
       backgroundVelocity: colorVelocity_HEX,
       backgroundMusicInput: colorMusicInput_HEX,
       backgroundProgressMusic: colorProgressMusic_HEX,
       backgroundAudioInput: colorAudioInput_HEX,
       backgroundProgressVolume: colorProgressVolume_HEX,

    }

}

console.log(Playlist)

function nextMusic(){

    if (posMusic == Playlist.length-1){

        posMusic = 0;
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        playMusic(this);

    } 
    
    else {
        
        posMusic++;
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        playMusic(this);

    }
}

function backMusic(){

    if (posMusic == 0){

        posMusic = Playlist.length-1
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        playMusic(this);

    } 

    else {
        
        posMusic--;
        instructionsMusic(posMusic)
        music_Tracks.currentTime = 0;
        playMusic(this);

    }

}

function instructionsMusic(index){

    let title_Music  = document.getElementById('title');
    let singer_Music = document.getElementById("singer");

    let image_Body   = document.getElementById("image-main");
    let image_Music  = document.getElementById("music-Image");

    let design_Music  = document.getElementsByClassName("design-Music")[0];
    
    let order_List    = document.getElementsByClassName("order-list")[0];

    title_Music.innerHTML  = Playlist[index].song;
    singer_Music.innerHTML = Playlist[index].singer;

    image_Body.src  = Playlist[index].filePhoto;
    image_Music.src = Playlist[index].filePhoto;

    design_Music.style.backgroundColor   = "rgba" + Playlist[index].backgroundDesign;

    order_List.style.backgroundColor     = "rgba" + Playlist[index].backgroundList;
    order_Control.style.backgroundColor  = "rgba" + Playlist[index].backgroundControl;
    order_Velocity.style.backgroundColor = "rgba" + Playlist[index].backgroundVelocity;

    style.innerHTML       = ".input-Music input[type='range']::-webkit-slider-thumb{background-color: rgb" + Playlist[index].backgroundMusicInput + "} .audio input[type='range']::-webkit-slider-thumb{background-color: rgb" + Playlist[index].backgroundMusicInput + "}";
    progress_Music.style  = "background-color: rgb" + Playlist[index].backgroundMusicInput;
    progress_Volume.style = "background-color: rgb" + Playlist[index].backgroundMusicInput;

    music_Tracks.src = Playlist[index].fileAudio;

} 

instructionsMusic(posMusic)

function musicTime(){

    input_Music.max   = music_Tracks.duration;
    input_Music.value = music_Tracks.currentTime;

    progress_Music.style       = "background-color: rgb" + Playlist[posMusic].backgroundProgressMusic
    progress_Music.style.width = input_Music.value/Playlist[posMusic].accountProgress() + "%";

    let final_Minutes = parseInt(Math.floor(music_Tracks.duration / 60));
    let final_Seconds = parseInt(Math.round(music_Tracks.duration % 60));

    let minutes_Music = Math.floor(music_Tracks.currentTime / 60);
    let seconds_Music = Math.floor(music_Tracks.currentTime % 60);

    final_Minutes = final_Minutes > '9' ? 

        final_Minutes
    :
        final_Minutes = "0" + final_Minutes;

    final_Seconds = final_Seconds > '9'?
    
        final_Seconds
    :
        final_Seconds = "0" + final_Seconds;


    minutes_Music = minutes_Music > '9' ? 

        minutes_Music
    :
        minutes_Music = "0" + minutes_Music;

    seconds_Music = seconds_Music > '9' ?

        seconds_Music
    :
        seconds_Music = "0" + seconds_Music;

    
    changeMusic();

    stopWatch_Music.innerText = minutes_Music + ":" + seconds_Music;
    final_Result.innerText    = final_Minutes + ":" + final_Seconds;

}

function changeMusic(){

    const time_Final   = music_Tracks.duration;
    const time_Current = music_Tracks.currentTime;

    if (time_Current == time_Final) {

        nextMusic();

    }

}

setInterval(musicTime, 15 );

function playMusic(e){  

    music_Tracks.volume = input_Volume.value/100;
    progress_Volume.style.width = input_Volume.value/2.2 + "%";

    Interval = setInterval(function(){

        number += 0.1

        btn_Play.style.opacity = '1' - number;

    },30)

    timeOut = setTimeout(function(){

        clearInterval(Interval)

        btn_Play.style      = 'display: none; position: absolute; left: 50%; transform: translate(-50%, -35px); margin-right: 30px;';
        btn_Pause.style     = "display: block; position: absolute; left: 50%; transform: translate(-50%, -35px); margin-right: 30px; margin-top: -1px";
        btn_forWards.style  = "margin-left: 60px";      
        btn_Pause.style.opacity  = '1';

        music_Tracks.play();

        btn_Play.removeEventListener(e.type, arguments.callee);
        btn_Pause.addEventListener("click", pauseMusic);

    },400)
}

function pauseMusic(e){

    Interval_2 = setInterval(function(){

        number -= 0.1;

        btn_Pause.style.opacity = '1' - number;

    },30)

    timeOut_2 = setTimeout(function(){

        clearInterval(Interval_2);

        btn_Play.style.display  = "block";
        btn_Pause.style.display = "none";
        btn_Play.style.opacity  = '1';

        music_Tracks.pause();

        btn_Pause.removeEventListener(e.type, arguments.callee);
        btn_Play.addEventListener("click", playMusic);

    },400)

}

function muteVolume(e){

    Interval = setInterval(function(){

        number += 0.1;

        audio_Desmuted.style.opacity = '1' - number;

    },40)

    timeOut = setTimeout(function(){

        clearInterval(Interval)

        music_Tracks.volume = 0;

        audio_Desmuted.style.display = 'none';

        audio_Muted.style = "display: block; filter: invert(100%)"
        audio_Muted.style.opacity  = '1';
        input_Volume.value = 0;

        progress_Volume.style.width = input_Volume.value*2 + "%";
        audio_Desmuted.removeEventListener(e.type, arguments.callee);
        audio_Muted.addEventListener(e.type, defaultVolume);

        muted_Volume = true;

    },500)
}

function defaultVolume(e){


    Interval_2 = setInterval(function(){

        number -= 0.1;

        audio_Muted.style.opacity = '1' + number;

    },40)

    timeOut_2 = setTimeout(function(){

        clearInterval(Interval);

        music_Tracks.volume = 1;

        audio_Desmuted.style.opacity  = '1';
        audio_Desmuted.src = "./images/aumentar-o-volume.png"
        audio_Desmuted.style = "display: block;";

        audio_Muted.style.display   = 'none';
        
        input_Volume.style = "position: relative; left: 9%; top: 30px;"
        input_Volume.value = 50;

        progress_Volume.style.backgroundColor = "rgb" + Playlist[posMusic].backgroundProgressVolume;
        progress_Volume.style.width = music_Tracks.volume*50/2 + "%";

        audio_Muted.removeEventListener(e.type, arguments.callee);
        audio_Desmuted.addEventListener(e.type, muteVolume);

        muted_Volume = false;
        
    },500)

}

function chooseVolume(){

    if (!muted_Volume){

        music_Tracks.volume = input_Volume.value/100;
        progress_Volume.style.width = input_Volume.value/2.2+ "%";


        if (music_Tracks.volume > 0){

            audio_Desmuted.src   = "./images/aumentar-o-volume.png";
            audio_Desmuted.style = " height: 32px;";

        }

        if (music_Tracks.volume < 0.3){

            audio_Desmuted.src   = "./images/volume-baixo.png";
            audio_Desmuted.style = " height: 32px;";

        }

        if (music_Tracks.volume == 0){

            audio_Desmuted.style = " height: 32px;";
            audio_Desmuted.src   = "./images/mute.png";

        }
    }
}



function showMenu(){

    control_Audio.style  = 'display: none';
    control_Div.style    = 'filter: blur(15px)';
    order_Options.style  = 'display: block; filter: blur(0) !important; background-color: rgba' + Playlist[posMusic].backgroundList;
    order_Control.style  =  'display: block; filter: blur(0) !important; background-color: rgba' + Playlist[posMusic].backgroundControl;

}

function showVelocity(){

    order_Velocity.style  = "background-color: rgba" + Playlist[posMusic].backgroundVelocity;
    choose_Speed.style  = 'display: block;'
    order_Options.style = 'display: none;'

    let velocity_Choose = document.getElementById("choose");
    let group_Velocity  = velocity_Choose.children;

    for(let i = 0; i < group_Velocity.length; i++){


        group_Velocity[i].onclick = function(e){
           
            music_Tracks.playbackRate = e.target.id;

        };
    }
}

function showPlaylist(e){

    order_Options.style   = 'display: none;';
    choose_Playlist.style = "display: block;";
    order_Playlist.style  = "background-color: rgba" + Playlist[posMusic].backgroundList;

    let playlist_ID = document.getElementById("playlist");
    let group_Playlist = playlist_ID.children;


    for(let i = 0; i < group_Playlist.length; i++){

        group_Playlist[i].onclick = function(e){

            for(let j = 0; j < Playlist.length; j++){   
            
                if (Playlist[j].fileAudio == e.target.id ){

                    posMusic = j;
                    instructionsMusic(posMusic)
                    music_Tracks.currentTime = 0;
                    playMusic(this);

                }
            }
        }
    }
}

function showDescription(e){

    option_Description.style = "display: block;";

    show_ControlAudio.removeEventListener(e.type, arguments.calle);
    show_ControlAudio.addEventListener("mouseout", hideDescription);

}

function hideDescription(e){

    option_Description.style = "display: none";

    show_ControlAudio.removeEventListener(e.type, arguments.calle);
    show_ControlAudio.addEventListener("mouseover", showDescription);

}


function executeClose(){

    control_Audio.style = 'display: block; ';
    control_Div.style  = 'filter: blur(0)';
    order_Options.style = 'display: none';

}

function executeBack(){

    choose_Speed.style.display = 'none';
    order_Options.style  = 'display: block;  background-color: rgba' + Playlist[posMusic].backgroundList;

}

function executeBackPlaylist(){

    order_Options.style  = 'display: block;  background-color: rgba' + Playlist[posMusic].backgroundList;
    choose_Playlist.style   = 'display: none; background-color: rgba'  + Playlist[posMusic].backgroundList;

}

function enableLoop(e){

    if(!loop){

        music_Tracks.loop = true;
        loop_Audio.style = 'filter: invert(100%)';

    }
    
    else{

        music_Tracks.loop = false;
        loop_Audio.style = 'filter: invert(0%)';

    }

    loop = !loop;

}

function verifyTime(){

    let time_All = parseInt(music_Tracks.duration);
    time_All     = time_All/100;

    return time_All

}

function chooseTime(){

    music_Tracks.currentTime = input_Music.value;

}

function increaseTime(){ 

    music_Tracks.currentTime += 6;

}

function decreaseTime(){ 

    music_Tracks.currentTime -= 6;
    
}
