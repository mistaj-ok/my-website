const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

// //add an image to the left side
const heroImg = document.createElement('img');
heroImg.src = "./img/left-portrait.jpg";

function togglePlay() {
    console.log('hi welcome to chilis');

    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }


  function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
  }

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);  

  toggle.addEventListener('click', togglePlay);


