

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
    const gallery = document.querySelector(".gallery");
    
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

    function viewerTemplate(src, alt) {
        return `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${src}" alt="${alt}">
            </div>
        `;
    }

    function viewHandler(event) {
        const clickedElement = event.target;
        if (clickedElement.tagName.toLowerCase() === 'img') {
            const src = clickedElement.src.split("-")[0] + "-full.jpeg";
            const alt = clickedElement.alt;
            document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));
            const closeButton = document.querySelector(".close-viewer");
            closeButton.addEventListener("click", closeViewer);
        }
    }

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        viewer.remove();
    }

    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    gallery.addEventListener("click", viewHandler);

    handleResize();
});
