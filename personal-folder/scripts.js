// Random Travel Tip Generator
const tips = [
    "Pack light to travel with ease.",
    "Always carry a reusable water bottle.",
    "Learn basic phrases in the local language.",
    "Keep digital and physical copies of important documents.",
    "Try local cuisine to fully experience the culture."
];

function displayRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById('travel-tip').innerText = tips[randomIndex];
}

window.onload = displayRandomTip;

// Search and Filter Functionality
function filterBlogPosts() {
    const query = document.getElementById('search').value.toLowerCase();
    const posts = document.querySelectorAll('#blog-post-list li');
    posts.forEach(post => {
        const destination = post.getAttribute('data-destination').toLowerCase();
        const category = post.getAttribute('data-category').toLowerCase();
        const date = post.getAttribute('data-date');
        const text = `${destination} ${category} ${date}`;
        post.style.display = text.includes(query) ? '' : 'none';
    });
}

// Initialize and add the map
function initMap() {
    // The location of each destination in Tokyo
    const locations = {
        Shibuya: { lat: 35.6580, lng: 139.7017 },
        Shinjuku: { lat: 35.6938, lng: 139.7034 },
        Asakusa: { lat: 35.7148, lng: 139.7967 },
        Ginza: { lat: 35.6717, lng: 139.7650 },
        Akihabara: { lat: 35.6983, lng: 139.7730 },
        Roppongi: { lat: 35.6645, lng: 139.7294 },
        Ueno: { lat: 35.7120, lng: 139.7753 },
        Odaiba: { lat: 35.6272, lng: 139.7786 }
    };

    // The map, centered at Tokyo
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 35.6895, lng: 139.6917 }
    });

    // Add markers for each location
    for (const location in locations) {
        const marker = new google.maps.Marker({
            position: locations[location],
            map: map,
            title: location
        });

        // Add a click listener for each marker
        marker.addListener('click', () => {
            filterByCountry(location);
        });
    }
}

function filterByCountry(country) {
    const posts = document.querySelectorAll('#blog-post-list li');
    posts.forEach(post => {
        const destination = post.getAttribute('data-destination');
        post.style.display = destination === country ? '' : 'none';
    });
}

// Back to Site Plan button functionality
document.getElementById('backButton').addEventListener('click', () => {
    window.location.href = 'site-plan.html';
});
