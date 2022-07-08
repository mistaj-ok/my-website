const header = document.querySelector('#header');
header.innerHTML = `
<nav id='nav'>
    <h1 class="logo">Nick Jones</h1>
    <ul class="r-links">
        <li><a href="./projects/proj-landing.html">Projects <i class ="fas fa-caret-down"></i></a>
            <div class="dropdown">  
                <ul>
                    <li><a href ="java-projs.html">java</a></li>
                    <li><a href="#">C </a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
        </li>
        <li><a href="#">navPlaceHolder</a></li>
    </ul>
</nav>
<div class="about-container">
<div class="about">
         <p class="about-title">hello there...</p>
         <div class="about-text">Welcome to my custom website.<p>This site is under regular maintenance. Features will slowly be added as the author progresses his skills.</p>
             </div>
             <button class="header-button">Okay</button>
         </div>
         </div>
</div>

<div class="empty-header-box"></div>

`;

document.body.prepend(header);

header.classList.add('hero-color');
console.log(header);

//function to update the header info based on the current page

function setHeaderInfo() {
    return `
        
         `
}

// add the html to the page last


// const okayBtn = document.querySelector('.header-button');
// okayBtn.addEventListener('click', () => console.log('mewo') );

{/* */}