// JavaScript for the pop-up window
const aboutMeBtn = document.querySelector("#about-me-btn");
const aboutMeModal = document.querySelector("#about-me");
const aboutMeClose = document.querySelector("#about-me-close");
aboutMeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  aboutMeModal.style.display = "block";
});
aboutMeClose.addEventListener("click", function () {
  aboutMeModal.style.display = "none";
});