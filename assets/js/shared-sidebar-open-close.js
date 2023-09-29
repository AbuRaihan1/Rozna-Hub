// compoenent 29 sidebar js
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("popSidebarSettingOpen");
  const sidebar = document.getElementById("shared-sidebar-wrapper");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("closeBtnPopSidebar");

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    sidebar.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "100%";
    } else {
      sidebar.style.width = "586px";
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});

// compoenent 29 sidebar js
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("component30sidebarOpenBtn");
  const sidebar = document.getElementById("shared-sidebar-wrapper-compo-30");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById(
    "closeBtnPopSidebarComponent30"
  );

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    sidebar.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "100%";
    } else {
      sidebar.style.width = "586px";
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});

// compoenent 30 audio add sidebar js
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("addAudioOpenBtn");
  const sidebar = document.getElementById("addAudioSidebar");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("addAudioCloseBtn");

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    sidebar.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "100%";
    } else {
      sidebar.style.width = "586px";
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});

// compoenent 54 audio img sidebar js
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("addImgOpenBtn");
  const sidebar = document.getElementById("addAudioSidebar");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("addImgCloseBtn");

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    sidebar.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "100%";
    } else {
      sidebar.style.width = "586px";
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});

// compoenent 33 audio quiz sidebar js
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("addQuizOpenBtn");
  const sidebar = document.getElementById("addQuizSidebar");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("addQuizCloseBtn");

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    sidebar.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "100%";
    } else {
      sidebar.style.width = "586px";
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});

// compoenent 51 rozna space  sidebar js
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("roznaSpaceOpenBtn");
  const sidebar = document.getElementById("addRoznaSpaceSidebar");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("roznaSpaceCloseBtn");

  openButton.addEventListener("click", function () {
    sidebar.style.right = "0";
    overlay.style.display = "block";
    sidebar.style.display = "block";
  });

  overlay.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  closeBtnPopSidebar.addEventListener("click", function () {
    sidebar.style.right = "-100%";
    overlay.style.display = "none";
  });

  function handleResize() {
    if (window.innerWidth <= 586) {
      sidebar.style.width = "100%";
    } else {
      sidebar.style.width = "586px";
    }
  }
  handleResize();
  window.addEventListener("resize", handleResize);
});
