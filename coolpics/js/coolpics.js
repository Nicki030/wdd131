document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector("nav .menu");
    const viewer = document.querySelector(".viewer");
    const closeViewer = document.querySelector(".close-viewer");
    const viewerImage = document.querySelector(".viewer img");
  

    menuButton.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  

    function handleResize() {
      if (window.innerWidth > 1000) {
        menu.classList.remove("show");
      }
    }
  
    window.addEventListener("resize", handleResize);
    handleResize();
  

    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", () => {
        viewerImage.src = img.src;
        viewer.classList.remove("hide");
      });
    });
  
    closeViewer.addEventListener("click", () => {
      viewer.classList.add("hide");
    });
  });
  