function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("p1-button").addEventListener("click", function() {
    const videoUrl = './assets/GymManager.mp4';
    const newTab = window.open('', '_blank');
    newTab.document.body.innerHTML = `<video controls autoplay width="100%" height="100%"><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
  });
  document.getElementById("p2-button").addEventListener("click", function() {
    const videoUrl = './assets/GrubGambler.mp4';
    const newTab = window.open('', '_blank');
    newTab.document.body.innerHTML = `<video controls autoplay width="100%" height="100%"><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
  });
  document.getElementById("p3-button").addEventListener("click", function() {
    const videoUrl = './assets/AR_Resume.mp4';
    const newTab = window.open('', '_blank');
    newTab.document.body.innerHTML = `<video controls autoplay width="100%" height="100%"><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
  }); 
});
