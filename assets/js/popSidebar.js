document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("togglePopupSidebar");
  const sidebar = document.getElementById("popSidebar");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("closeBtnPopSidebar");

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%"; // Change to -100% to hide the sidebar completely
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%"; // Change to -100% to hide the sidebar completely
    overlay.style.display = "none";
  });

  // Function to handle resizing
  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "90%";
    } else {
      sidebar.style.width = "586px";
    }
  }

  // Initial call to handleResize
  handleResize();

  // Listen for window resize events
  window.addEventListener("resize", handleResize);
});


