//toogle class

const navbarNav = document.querySelector('.navbar-nav');
// klik menu
document.querySelector('#hamburger-menu').onclick= () => {
    navbarNav.classList.toggle('active');
};

// klik luar
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    }
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};