// main.js

// Example of an array of projects
const projects = [
    { title: "Web Project 1", category: "web", description: "Description of web project 1", image: "images/web1.jpg" },
    { title: "Design Project 1", category: "design", description: "Description of design project 1", image: "images/design1.jpg" },
    { title: "Other Project 1", category: "other", description: "Description of other project 1", image: "images/other1.jpg" },
    // Add more projects as needed
];

// Function to display projects
function displayProjects(category = "all") {
    const projectGallery = document.getElementById("project-gallery");
    projectGallery.innerHTML = "";

    const filteredProjects = category === "all" ? projects : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGallery.appendChild(projectItem);
    });
}

// Event listener for filter change
document.getElementById("filter").addEventListener("change", (event) => {
    displayProjects(event.target.value);
});

// Initialize display with all projects
displayProjects();

// Random Quote Generator
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    // Add more quotes as needed
];

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("random-quote").textContent = quotes[randomIndex];
}

// Display a random quote on page load
displayRandomQuote();
