// window.onscroll = function() {myFunction()};
// function myFunction() {
//     if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 50) {
//         document.querySelector(".header-container").className = "menuScrollBgColor";
//     } else {
//         document.querySelector(".header-container").className = "";
//     }
// }


const nav = document.querySelector("#nav");
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./images/ico/burger-close.svg"
    } else {
        navBtnImg.src = "./images/ico/burger-open.svg"
    }
}

nav.onclick = () => {
    nav.classList.toggle('open');
    navBtnImg.src = "./images/ico/burger-open.svg"

}

const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0); 
  }
}