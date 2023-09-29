document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("popSidebarSettingOpen");
  const sidebar = document.getElementById("createResourceSidebar");
  const closeBtnPopSidebar = document.getElementById(
    "closeBtnCreateResourceSidebar"
  );

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%"; // Change to -100% to hide the sidebar completely
    overlay.style.display = "none";
  });
});
