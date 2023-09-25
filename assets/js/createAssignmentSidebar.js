document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("createAssignment");
  const sidebar = document.getElementById("createAssignmentSidebar");
  const closeBtnPopSidebar = document.getElementById(
    "closeBtnCreateAssignmentSidebar"
  );

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    // overlay.style.display = "block";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%"; // Change to -100% to hide the sidebar completely
    overlay.style.display = "none";
  });
});

// Get references to the button and popup elements
// Get references to the button, popup, and overlay elements
const assignStudentButton = document.getElementById("assignStudentButton");
const assignStudentPopup = document.getElementById("assignStudentPopup");
const assignOverlay = document.getElementById("assignOverlay");

// Function to open the popup and show the overlay
function openAssignStudentPopup() {
  assignStudentPopup.style.display = "block";
  assignOverlay.style.display = "block";
}

// Function to close the popup and hide the overlay
function closeAssignStudentPopup() {
  assignStudentPopup.style.display = "none";
  assignOverlay.style.display = "none";
}

// Event listener to open the popup when the button is clicked
assignStudentButton.addEventListener("click", openAssignStudentPopup);

// Event listener to close the popup when clicking outside of it
document.addEventListener("click", (event) => {
  if (event.target === assignOverlay) {
    closeAssignStudentPopup();
  }
});

// Prevent closing the popup when clicking inside it
assignStudentPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});
