AOS.init();

let menuBox = document.getElementById("menuBox");
let menueIcon  = document.getElementById("menueIcon");

menueIcon.onclick = function(){
    menuBox.classList.toggle("mobile-menu-active");

    if (menuBox.classList.contains("mobile-menu-active")) {
        menueIcon.classList.add('active')
    } else {
        menueIcon.classList.remove('active')
    }
}


// -----------initialize-tooltip  
const isSmallScreen = () => window.innerWidth <= 576;
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

if (isSmallScreen()) {
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

window.addEventListener('resize', () => {
  if (isSmallScreen()) {
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
  } else {
    tooltipTriggerList.forEach(el => bootstrap.Tooltip.getInstance(el)?.dispose());
  }
});

// gsap