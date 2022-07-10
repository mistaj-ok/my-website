const navDropdown = document.querySelectorAll('.r-links');

function testPrint() {
  console.log('hi welcome to chilis')
}
function toggleMenuExpand() {
  this.classList.toggle('expanded')
  console.log(this.classList);
}

// loop through list items add event listener
navDropdown.forEach(link => {link.addEventListener('mouseover', toggleMenuExpand)});




/* video player */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');


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

// add listener to each image box to register a click
const imgBoxes = document.querySelectorAll('.img-box');
function toggleOpen() {
  this.classList.toggle('open');
  console.log('open toggled');
}
imgBoxes.forEach(imgBox => imgBox.addEventListener('click', toggleOpen));


// make the clicked box larger for preview


