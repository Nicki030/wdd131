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
        <img src="${pic}" alt="${alt}" class="viewer-img">
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
      document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
  }

 
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.remove();
    }
  }

 
  function generateArticles() {
    const container = document.querySelector('.articles-container'); 
    let articlesHTML = articles.map(item => `
      <article>
        <div class="article-details">
          <p class="article-date">${item.date}</p>
          <p>${item.ages}</p>
          <p>${item.genre}</p>
          <p>${item.stars}</p>
        </div>
        <div>
          <h2 class="article-title">${item.title}</h2>
          <img src="${item.imgSrc}" alt="${item.imgAlt}" class="article-img">
          <p>${item.description}</p>
        </div>
      </article>
    `).join('');
    container.innerHTML = articlesHTML;
  }

  menuButton.addEventListener("click", toggleMenu);
  window.addEventListener("resize", handleResize);
  document.querySelector(".gallery").addEventListener("click", viewHandler);

  handleResize();
  generateArticles(); 
});