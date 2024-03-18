let currentImg = document.getElementById("currentImg");
let foodTitle = document.getElementById("foodTitle");
let foodDetailsTitle = document.getElementById("food-details-title");
let foodDetailsdescription = document.getElementById(
  "food-details-description"
);
const urlParams = new URLSearchParams(window.location.search);
const foodId = parseInt(urlParams.get("id"));

// Check if 'foods' is already declared
let foodss = [
  {
    id: 1,
    title: "Healthy Fats",
    description: `Research shows consuming healthy fats is essential for boosting brain health and supporting the nervous system. This improved brain functioning may reduce symptoms of ADHD like inattention or poor focus.
    Healthy fats to include in an ADHD diet include:
    Avocado, Oily fish (mackerel, tuna, trout, salmon), Eggs, Nuts, Seeds, Olive oil, Dark chocolate.
    `,
    img: "image/Food/Healthy Fats.jpg",
  },
  {
    id: 2,
    title: "Complex Carbohydrates",
    description: `Complex carbohydrates consist of sugar molecules strung together into complex chains. Various whole grains, starchy vegetables, beans, oats, and fruits contain these specific nutrients. In some cases, eating complex carbohydrates before bed can help promote sleep, possibly reducing insomnia commonly associated with ADHD.
    Complex carbohydrates to include in an ADHD diet include:
    Oatmeal, Brown rice, Quinoa, Chickpeas, Potatoes, Beets, Peas, Apples, Bananas.
    `,
    img: "image/Food/Complex Carbohydrates.jpg",
  },
  {
    id: 3,
    title: "Protein",
    description: `t’s important to get plenty of protein on an ADHD diet. It’s essential for balancing neurotransmitters, like dopamine, that are in short supply for people with ADHD.
    Healthy sources of protein:
    Meat and poultry, Beans and lentils, Eggs, Greek yogurt, Peanuts, Rolled oats
    
    `,
    img: "image/Food/Protein.jpg",
  },
  {
    id: 4,
    title: "Fruits & Vegetables",
    description: `Fruits and vegetables contain numerous essential minerals and vitamins. They promote a healthy gut and can reduce inflammation and digestion problems. Additionally, eating fruits and vegetables can prevent blood sugar spikes, which can cause irritation, hunger, and other physiological symptoms.
    `,
    img: "image/Food/Vegetables.jpg",
  },
];

// display details food
function displayFoodDetails() {
  let selectedFood = foodss.find((food) => food.id === foodId);

  console.log(selectedFood.description);
  currentImg.src = selectedFood.img;
  foodTitle.innerHTML = selectedFood.title;
  foodDetailsTitle.innerHTML = selectedFood.title;
  foodDetailsdescription.innerHTML = selectedFood.description;
}

displayFoodDetails();
