const themeSelector = document.getElementById('themeSelector');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    const logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');

        logo.src = 'white_logo.png';
    } else {
        document.body.classList.remove('dark');
    
        logo.src = 'blue_logo.png';
    }
}

themeSelector.addEventListener('change', changeTheme);