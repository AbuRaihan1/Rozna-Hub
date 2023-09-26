// Get references to the button and popup elements
// Get references to the button, popup, and overlay elements
const assignStudentButton = document.getElementById("designNewBtn");
const designNowPopup = document.getElementById("designNowPopup");
const designNowOverlay = document.getElementById("designNowOverlay");

// Function to open the popup and show the overlay
function opendesignNowPopup() {
  designNowPopup.style.display = "block";
  designNowOverlay.style.display = "block";
}

// Function to close the popup and hide the overlay
function closedesignNowPopup() {
  designNowPopup.style.display = "none";
  designNowOverlay.style.display = "none";
}

// Event listener to open the popup when the button is clicked
assignStudentButton.addEventListener("click", opendesignNowPopup);

// Event listener to close the popup when clicking outside of it
document.addEventListener("click", (event) => {
  if (event.target === designNowOverlay) {
    closedesignNowPopup();
  }
});

// Prevent closing the popup when clicking inside it
designNowPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});
