//toogle class

const navbarNav = document.querySelector(".navbar-nav");
// klik menu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik luar
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// fungsi slide manual
window.onload = function(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showSlides(1);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySildes");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n-1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
