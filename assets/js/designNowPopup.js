const assignStudentButton = document.getElementById("designNewBtn");
const designNowPopup = document.getElementById("designNowPopup");
const designNowOverlay = document.getElementById("designNowOverlay");

function opendesignNowPopup() {
  designNowPopup.style.display = "block";
  designNowOverlay.style.display = "block";
}

function closedesignNowPopup() {
  designNowPopup.style.display = "none";
  designNowOverlay.style.display = "none";
}

assignStudentButton.addEventListener("click", opendesignNowPopup);

document.addEventListener("click", (event) => {
  if (event.target === designNowOverlay) {
    closedesignNowPopup();
  }
});

designNowPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});
