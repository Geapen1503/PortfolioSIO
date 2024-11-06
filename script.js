// start navbar shadow

window.onscroll = function() {
        const navbar = document.getElementById("buttonBox")
          if (window.pageYOffset > 0) {
            navbar.classList.add("headerBoxShadow");
          } else {
            navbar.classList.remove("headerBoxShadow");
          }
        };

// end navbar shadow


// beginning of star script

var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#242936";
ctx.fillRect(0, 0, W, H);

ctx.shadowBlur = 10;
ctx.shadowColor = "white";

let starCount = 0;
const maxStars = 100;

function starsAnimation() {
  if (starCount <= maxStars) {
      let x = W * Math.random();
      let y = H * Math.random();
      let r = 2.5 * Math.random();

      let factor = (y / H) * 0.2 + 0.8;

      if (Math.random() > factor) {
          ctx.beginPath();
          ctx.fillStyle = "#AAB5A9";
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
          starCount ++;
      }

      setTimeout(starsAnimation, 90);
  }
}

starsAnimation();


// ending of star script


// beginning of code arrow project

function setupDropdown(button, dropdown) {
    let toggleIndex = 0;

    button.addEventListener('click', () => {
        if (toggleIndex === 0) {
            dropdown.style.backgroundColor = "grey";
            dropdown.style.height = dropdown.scrollHeight + "px";
            toggleIndex++;
        } else {
            dropdown.style.backgroundColor = "transparent";
            dropdown.style.height = button.scrollHeight + "px";
            toggleIndex--;
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.style.backgroundColor = "transparent";
            dropdown.style.height = button.scrollHeight + "px";
            toggleIndex = 0;
        }
    });
}

const btnDropLth = document.querySelector(".bloc-top-lth");
const dropdownlth = document.querySelector(".dropdownLth");
setupDropdown(btnDropLth, dropdownlth);

const btnDropAkb = document.querySelector(".bloc-top-akb");
const dropdownakb = document.querySelector(".dropdownAkb");
setupDropdown(btnDropAkb, dropdownakb);

const btnDropJarod = document.querySelector(".bloc-top-jarod");
const dropdownjarod = document.querySelector(".dropdownJarod");
setupDropdown(btnDropJarod, dropdownjarod);

const btnDropBlogAI = document.querySelector(".bloc-top-BlogAIPro");
const dropdownBlogAI = document.querySelector(".dropdownBlogAIPro");
setupDropdown(btnDropBlogAI, dropdownBlogAI);


// ending of arrow code project



// beginning of BrBad bear buoyancy

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
function generateRandomKeyframes() {
    const keyframes = [
        { percent: 0, x: 0, y: 0 },
        { percent: 25, x: getRandomInt(-20, 20), y: getRandomInt(-20, 20) },
        { percent: 50, x: getRandomInt(-20, 20), y: getRandomInt(-20, 20) },
        { percent: 75, x: getRandomInt(-20, 20), y: getRandomInt(-20, 20) },
        { percent: 100, x: 0, y: 0 }
    ];

    let keyframesCSS = '@keyframes floatDiagonal {';

    keyframes.forEach(frame => {
        keyframesCSS += `
            ${frame.percent}% {
                transform: translate(-50%, -50%) translate(${frame.x}px, ${frame.y}px);
            }
        `;
    });

    keyframesCSS += '}';

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframesCSS;
    document.head.appendChild(styleSheet);
}


/*
document.addEventListener('DOMContentLoaded', () => {
    generateRandomKeyframes();
    adjustFloatingImagePosition();
});

window.addEventListener('resize', adjustFloatingImagePosition);

function adjustFloatingImagePosition() {
    const projectBox = document.querySelector('.projectBox');
    const floatingImage = document.getElementById('floatingImage');

    const projectBoxRect = projectBox.getBoundingClientRect();
    floatingImage.style.left = `${projectBoxRect.right + 90}px`;
    floatingImage.style.animation = 'floatDiagonal 12s ease-in-out infinite';
}
*/

// ending of BrBad bear buoyancy

// beginning interships popup

function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

function closePopupOnClickOutside(event) {
    if (event.target.id === "popupOverlay") closePopup();
}

// ending of interships popup


// début code bouton du bas

const btn = document.querySelector('.retourHaut');

		btn.addEventListener('click', () => {

			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			})

		})


// fin code bouton du bas 

