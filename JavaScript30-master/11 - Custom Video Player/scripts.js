/* Get the elements */

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelector('.player__slider');



/* Functions */

function togglePlay() {
    const pausePlay = video.paused ? 'play' : 'pause';
    video[pausePlay]();
}





/* Event Listeners */

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);





