/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("btn-active"); }





/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document.
        querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove(
          "active-link"
        );
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav=document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add the scroll-header class
    if(this.scrollY>=80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    if(this.scrollY>=560)scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='uil-sun'

//Previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-them class

const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fulfilled ,we ask the issue was know if we activated
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon'?'add':'remove'](iconTheme)
}

//Activate /deactivate the theme manually with the button

themeButton.addEventListener('click',()=>{
    //add or remove the dark /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})