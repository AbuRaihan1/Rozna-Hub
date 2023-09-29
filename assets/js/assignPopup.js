const assignStudentButton = document.getElementById("assignPopUpOpen");
const assignPopup = document.getElementById("CourseListPopUp");
const assignPopupOverlay = document.getElementById("courseListOverlay");
const assignPopupCloseBtn = document.getElementById("assignPopupCloseBtn");

function openassignPopup() {
  assignPopup.style.display = "block";
  assignPopupOverlay.style.display = "block";
}

function closeassignPopup() {
  assignPopup.style.display = "none";
  assignPopupOverlay.style.display = "none";
}

assignStudentButton.addEventListener("click", openassignPopup);

assignPopupCloseBtn.addEventListener("click", () => {
  closeassignPopup();
});

assignPopup.addEventListener("click", (event) => {
  event.stopPropagation();
});
