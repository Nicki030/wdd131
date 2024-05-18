function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }
  
  function viewHandler(event) {
    if (event.target.tagName === "IMG") {
      const pic = event.target.src.split("-")[0] + "-full.jpeg";
      const alt = event.target.alt;
      const viewerHTML = viewerTemplate(pic, alt);
      document.body.insertAdjacentHTML("afterbegin", viewerHTML);
      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
    }
  }
  
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.parentNode.removeChild(viewer);
  }
  
  const gallery = document.querySelector(".gallery");
  gallery.addEventListener("click", viewHandler);