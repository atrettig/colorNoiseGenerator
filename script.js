const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const slider = document.querySelector('#myRange')




//slider output
slider.oninput = function(){
    const values = [10,30,41]

    const songs = ['pink','blue', 'white','brown']

    let color = "brown";
    var value = this.value;
    for (let index = 0; index <= values.length; index++) {
        if (value < values[index]) {
            color = songs[index]
            break
        }
    }
    loadSong(color)
}




// TO DO: need go grab the color from the picker
// loadSong(songs[])



function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
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