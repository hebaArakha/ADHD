let foodPlanDetailsContainer = document.getElementById("foodPlanDetailsContainer")
console.log(foodPlanDetailsContainer)

const urlParams = new URLSearchParams(window.location.search);
const foodId = parseInt(urlParams.get("id"));


console.log(foodId)

let foodPlan = [
    {
        id: 1,
        titleFood: "Breakfast",
        description: [
            {
                title: "Yogurt with fruit : ",
                text: "try plain or Greek yogurt with fruit for added protein. Most children's yogurts contain excess sugars and food coloring. Instead, add berries such as strawberries, blueberries, and raspberries, which are naturally sweet and high in antioxidants."
            },
            {
                title: "Eggs and whole-grain toast :",
                text: "Scrambled eggs with low-fat milk and olive oil give protein and necessary fats. Whole grain bread is a complex carbohydrate."
            },
            {
                title: "Whole-grain oatmeal with fruit : ",
                text: `Oatmeal made with whole oats and topped with a blueberries or banana contains complex carbohydrates and sweetness from the fruit.`
            },
            {
                title: "Banana date smoothie",
                text: ''
            },
        ],
        img: "image/Food/Plan/Breakfast.jpg",
    },

    {
        id: 2,
        titleFood: "Snacks",
        description: [
            {
                title: "Peanut butter and apples :",
                text: "Apples include complex carbohydrates and fiber, which will keep your child feeling full for longer. Choose a natural peanut butter and examine the label for extra sugars or artificial ingredients."
            },
            {
                title: "Cottage cheese and blueberries : ",
                text: " Cottage cheese, like plain yogurt, contains protein and other essential elements such as vitamin B and calcium. Blueberries are also abundant in vitamin B, antioxidants that help the immune system operate, and fiber. Sprinkle chia seeds on top for an extra punch of Omega-3 fatty acids."
            },
            {
                title: "No-bake oatmeal cookie energy balls :",
                text: ""
            },

        ],
        img: "image/Food/Plan/Snacks.jpg",
    },
    {
        id: 3,
        titleFood: "Lunch and Dinner",
        description: [
            {
                title: "Lean meats :",
                text: "such as chicken breast, fatty fish like tuna and salmon , and lean red meat, are high in protein and omega-3 fatty acids. Protein combined with fiber keeps your child feeling full for longer. "
            },
            {
                title: "Leafy greens: ",
                text: "such as spinach, broccoli and kale can be cooked in olive oil to enhance flavor. They can cut into smaller pieces to add to recipes. Children are more likely to suffer from iron deficiency since they do not consume enough veggies. Continue to provide them on a regular basis and in a variety of ways until you find one or two that your child lov"
            },
            {
                title: "Whole grains:",
                text: "Whole grain pasta is a good way for adding complex carbohydrates into your child's diet. You can also provide whole wheat bread for sandwiches and toast."

            },
            {
                title: "Falafel:",
                text: "use frozen or store-bought falafel for a quick and low effort meal"

            },
            {
                title: "Chicken BBQ flatbread pizza: ",
                text: ""

            },
            {
                title: "Fish stick tacos :",
                text: ""

            },
            {
                title: "Canned salmon pasta:",
                text: ""

            },

        ],
        img: "image/Food/Plan/Lunch.jpg",
    },
    {
        id: 4,
        titleFood: "Dessert ",
        description: [
            {
                title: "Applesauce :",
                text: "unsweetened applesauce with cinnamon or apple pie spice sprinkled on top is a delicious sweet a child can enjoy post-dinner or as a snack."
            },



            {
                title: "Frozen fruit pops :",
                text: "Natural frozen fruit bars make a delicious dessert, especially when the weather is warm. Some manufacturers sell fruit juice-based bars with no added sugar, and you can make your own."

            },

        ],
        img: "image/Food/Plan/Dessert.jpg",
    },
]

// display details food
function displayFoodPlanDetails() {
    let selectedFood = foodPlan.find((food) => food.id === foodId);

    foodPlanDetailsContainer.innerHTML = `
        <div class="col-lg-6 item">
        
                    <h2 class="section-title">${selectedFood.titleFood}</h2>
                    <ul>
                        ${selectedFood.description.map((item) => {
        return `
                                <li>
                                    <p>${item.title}</p>
                                    <span>${item.text}</span>
                                </li>
                            `;
    }).join('')}
                    </ul>
        </div>

        <div class="col-lg-6 item">
        <figure>
            <img src=${selectedFood.img} alt=${selectedFood.titleFood} class="w-100">
            </figure>


        </div>`;
}

displayFoodPlanDetails();
