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


// beginning of flip pp on load



// ending of flip pp on load


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

function starsAnimation() {
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

  let factor = (y/H)*0.2 + 0.8; 

  if(Math.random() > factor) {
    ctx.beginPath();
    ctx.fillStyle = "#AAB5A9";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  
  setTimeout(starsAnimation, 90);
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


// ending of arrow code project





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

