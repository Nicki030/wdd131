document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
  
    function toggleMenu() {
      menu.classList.toggle("hide");
    }
  
    function handleResize() {
      if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
      } else {
        menu.classList.add("hide");
      }
    }
  
    function viewerTemplate(pic, alt) {
      return `
        <div class="viewer">
          <button class="close-viewer">X</button>
          <img src="${pic}" alt="${alt}">
        </div>
      `;
    }
  
    function viewHandler(event) {
      const clickedElement = event.target;
      if (clickedElement.tagName === 'IMG') {
        const src = clickedElement.getAttribute('src');
        const alt = clickedElement.getAttribute('alt');
        const fullSrc = src.split('-')[0] + '-full.jpeg';
        const viewerHTML = viewerTemplate(fullSrc, alt);
  
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);
  
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
      }
    }
  
    function closeViewer() {
      const viewer = document.querySelector(".viewer");
      if (viewer) {
        viewer.remove();
      }
    }
  
    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    document.querySelector(".gallery").addEventListener("click", viewHandler);
  
    handleResize();
  });