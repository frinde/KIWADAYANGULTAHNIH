const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const seekbar = document.getElementById('seekbar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const muteUnmuteButton = document.getElementById('muteUnmute');
const volumeControl = document.getElementById('volumeControl');

audio.addEventListener('loadedmetadata', () => {
    seekbar.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    seekbar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

seekbar.addEventListener('input', () => {
    audio.currentTime = seekbar.value;
});

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.querySelector('.icon').classList.remove('play');
        playPauseButton.querySelector('.icon').classList.add('pause');
    } else {
        audio.pause();
        playPauseButton.querySelector('.icon').classList.remove('pause');
        playPauseButton.querySelector('.icon').classList.add('play');
    }
});

muteUnmuteButton.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteUnmuteButton.querySelector('.icon').classList.toggle('muted');
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

