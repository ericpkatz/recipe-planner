let recipes = [];
const recipeList = document.querySelector('#recipe-list');

async function fetchRecipes(){
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/recipes');
  const json = await response.json();
  recipes = json.data; 
  renderRecipes();
}

function renderRecipes(){
  const html = recipes.map(function(recipe){
    console.log(recipe);
    return `
      <div>
        <h2>${ recipe.name }</h2>
        <p>
          ${ recipe.description }
        </p>
        <img src='${recipe.imageUrl}' />
      </div>
    `;
  }).join('');
  recipeList.innerHTML = html;

}

fetchRecipes();


