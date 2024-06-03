const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const title = document.getElementById('title')
const audio = document.getElementById('audio')
const cover = document.getElementById('cover')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

//song titles
const songs =  ['hey', 'summer', 'ukulele']
let SongsNum = songs.length

//keep track of songs
let songIndex = 0;

loadingSong(songs[songIndex])

function loadingSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function pauseSong(){
    audio.pause()
    musicContainer.classList.remove('play')
    playBtn.querySelector('i').classList.remove('fa-pause')
    playBtn.querySelector('i').classList.add('fa-play')
}

function playSong(){
    audio.play()
    musicContainer.classList.add('play')
    playBtn.querySelector('i').classList.add('fa-pause')
    playBtn.querySelector('i').classList.remove('fa-play')
}

function setProgress(e) {
    const { duration, currentTime} = e.srcElement

    progress.style.width = `${currentTime/duration * 100}%`
}

function updateProgress(e) {
    console.log("CLICK")
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = clickX / width * duration
}

function nextSong() {
    if (songIndex + 1 == SongsNum) {
        songIndex = 0;
    }
    else {
        songIndex ++;
    }
    loadingSong(songs[songIndex])

    playSong()
}

function prevSong() {
    if (songIndex == 0) {
        songIndex = SongsNum - 1;
    }
    else {
        songIndex = songIndex - 1;
    }
    loadingSong(songs[songIndex])

    playSong()
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    }
    else {
        playSong()
    }
})

audio.addEventListener('timeupdate', setProgress)
progressContainer.addEventListener('click', updateProgress)
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
audio.addEventListener('ended', nextSong)
