const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const slider = document.querySelector('#myRange')
const slider_value = document.querySelector('#slider_value')




//slider output
slider.oninput = function(){
    const values = [6, 16,26, 40, 51, 64]

    const songs = ['pink','blue', 'white','brown','black', 'orange', 'gray']

    let color = "gray";
    var value = this.value;
    // slider_value.innerText = value;
    
    for (let index = 0; index <= values.length; index++) {
        if (value < values[index]) {
            color = songs[index]
            break
        }
    }

    loadSong(color)
}





function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    playSong()
}


function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')


    audio.play()
}


function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}



//Event listeners

playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play')
    
    if (isPlaying) {
        pauseSong()
        
    }
    else{
        playSong()
    }
})


