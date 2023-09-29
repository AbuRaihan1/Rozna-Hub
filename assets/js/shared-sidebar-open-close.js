// open pages box start 
document.addEventListener("DOMContentLoaded", function () {
  var openBoxButton = document.getElementById("openBoxButton");
  var pagesPreviewBox = document.querySelector(".pages-preview-box");

  openBoxButton.addEventListener("click", function () {
    // Toggle the visibility of the popup
    if (pagesPreviewBox.style.display === "block") {
      pagesPreviewBox.style.display = "none";
    } else {
      pagesPreviewBox.style.display = "block";
    }
  });

  // Close the popup if the user clicks anywhere outside of it
  document.addEventListener("click", function (event) {
    if (
      event.target !== openBoxButton &&
      !openBoxButton.contains(event.target)
    ) {
      pagesPreviewBox.style.display = "none";
    }
  });
});

// open pages box close 

// setting sidebar open
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openSettingSidebarBtn");
  const sidebar = document.getElementById("settingSidebar");
  const overlay = document.getElementById("popSidebarOverlay");
  const closeBtnPopSidebar = document.getElementById("closeBtnSettingSidebar");

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
