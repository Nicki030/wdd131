import recipes from './recipes.mjs';


function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const randomNum = random(list.length);
    return list[randomNum];
}


console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
    return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}


function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('#recipe-container');
    recipeContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();


function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(lowerCaseQuery) ||
        recipe.description.toLowerCase().includes(lowerCaseQuery) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
    ).sort((a, b) => a.name.localeCompare(b.name));
}


function searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('#search-input').value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}


document.querySelector('#search-button').addEventListener('click', searchHandler);
