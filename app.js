const app_id = "38418589";
const app_key = "6e344a72b040c0a8776bb69517005b9d";

var button = document.querySelector("button");
console.log(button);

const get_recipe = async () => {
  var input = document.querySelector("input");

  console.log(input);
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=${app_id}&app_key=${app_key}`
  );
  var data = await response.json();

  
  console.log(data);
  //   data = data.hits;  
  var cards = document.querySelector(".Cards-section");
  cards.innerHTML = "";
  for (let i = 0; i < data.hits.length; i++) {
    cards.innerHTML += `
  <div class="card">
  <div class="card__body">
    <img
      src="${data.hits[i].recipe.image}"
      alt=""
      class="card__image"
    />
    <h2 class="card__title">${data.hits[i].recipe.label}</h2>
    <p class="card__description">
    Hosting a dinner party? 
    No Indian-themed meal or celebration is complete without paneer,
     and this cheesy delight is just the ticket!
    </p>
    <h2 class="card__title">${data.hits[i].recipe.label}</h2>
    <p class="card__description">
    Make pakoras with paneer and a little coriander chutney in the centre to 
    add extra flavour. They're crispy on the outside and super-soft in the middle
    </p>
    <h2 class="card__title">${data.hits[i].recipe.label}</h2>
    <p class="card__description">
    Serve this classic veggie Indian dish with cheese and peas in a spicy
    tomato sauce as an easy midweek meal. It takes just 25 minutes to make
    </p>
    <h2 class="card__title">${data.hits[i].recipe.label}</h2>
    <p class="card__description">
    An Indian dish with plenty of flavour, saag paneer is a well-loved vegetarian side dish.
    It's rich in calcium and folate from the spinach and is gluten-free, too
    </p>
  </div>
  <a href="${data.hits[i].recipe.url}" class="card__btn">View Recipe</a>
</div>
  `;
  }
};

button.addEventListener("click", get_recipe);