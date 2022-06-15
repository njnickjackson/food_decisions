let rightEl = document.getElementById("right-pic");
let leftEl = document.getElementById("left-pic");
let countdownEl = document.getElementById("countdown");
let restaurantEl = document.getElementById("restaurant-link");
let recipeEl = document.getElementById("recipe-link");
let foodEl = document.getElementById("food-rec");

rightEl.addEventListener("click", rightPicture);
leftEl.addEventListener("click", leftPicture);

let veggieImage = (Math.floor(Math.random() * 5)) + 1;
let pastaImage = (Math.floor(Math.random() * 5)) + 1;
let meatImage = (Math.floor(Math.random() * 5)) + 1;

let veggieTotal = 0;
let pastaTotal = 0;
let meatTotal = 0;

let total = 10;

function rightPicture() {
    total -= 1;
    if (total === 0) {
        if (meatTotal < pastaTotal && meatTotal < veggieTotal) {
            localStorage.setItem('result', '0');
            window.location = 'recommendation.html';
        } else if (pastaTotal < meatTotal && pastaTotal < veggieTotal) {
            localStorage.setItem('result', '1');
            window.location = 'recommendation.html';
        } else {
            localStorage.setItem('result', '2');
            window.location = 'recommendation.html';
        }
    }
    else {
        countdownEl.textContent = total;
        let rightSource = document.right.src;
        if (rightSource.includes("veggie")) {
            veggieTotal += 1;
            if (meatImage > 5) {
                meatImage -= 5;
            }
            if (pastaImage > 5) {
                pastaImage -= 5;
            }
            document.right.src = 'images/meat/meat-image' + meatImage + '.jpg';
            document.left.src = 'images/pasta/pasta-image' + pastaImage + '.jpg';
            veggieImage += 1;
            meatImage += 1;
            pastaImage += 1;
        } else if (rightSource.includes("meat")) {
            meatTotal += 1;
            if (pastaImage > 5) {
                pastaImage -= 5;
            }
            if (veggieImage > 5) {
                veggieImage -= 5;
            }
            document.right.src = 'images/pasta/pasta-image' + pastaImage + '.jpg';
            document.left.src = 'images/veggie/veggie-image' + veggieImage + '.jpg';
            meatImage += 1;
            pastaImage += 1;
            veggieImage += 1;
        } else {
            pastaTotal += 1;
            if (veggieImage > 5) {
                veggieImage -= 5;
            }
            if (meatImage > 5) {
                meatImage -= 5;
            }
            document.right.src = 'images/veggie/veggie-image' + veggieImage + '.jpg';
            document.left.src = 'images/meat/meat-image' + meatImage + '.jpg';
            pastaImage += 1;
            meatImage += 1;
            veggieImage += 1;
        }
    }
}

function leftPicture() {
    total -= 1;
    if (total === 0) {
        if (meatTotal < pastaTotal && meatTotal < veggieTotal) {
            localStorage.setItem('result', '0');
            window.location = 'recommendation.html';
        } else if (pastaTotal < meatTotal && pastaTotal < veggieTotal) {
            localStorage.setItem('result', '1');
            window.location = 'recommendation.html';
        } else {
            localStorage.setItem('result', '2');
            window.location = 'recommendation.html';
        }
    }
    else {
        countdownEl.textContent = total;
        let leftSource = document.left.src;
        if (leftSource.includes("veggie")) {
            veggieTotal += 1;
            if (meatImage > 5) {
                meatImage -= 5;
            }
            if (pastaImage > 5) {
                pastaImage -= 5;
            }
            document.left.src = 'images/meat/meat-image' + meatImage + '.jpg';
            document.right.src = 'images/pasta/pasta-image' + pastaImage + '.jpg';
            veggieImage += 1;
            meatImage += 1;
            pastaImage += 1;
        } else if (leftSource.includes("meat")) {
            meatTotal += 1;
            if (pastaImage > 5) {
                pastaImage -= 5;
            }
            if (veggieImage > 5) {
                veggieImage -= 5;
            }
            document.left.src = 'images/pasta/pasta-image' + pastaImage + '.jpg';
            document.right.src = 'images/veggie/veggie-image' + veggieImage + '.jpg';
            meatImage += 1;
            pastaImage += 1;
            veggieImage += 1;
        } else {
            pastaTotal += 1;
            if (veggieImage > 5) {
                veggieImage -= 5;
            }
            if (meatImage > 5) {
                meatImage -= 5;
            }
            document.left.src = 'images/veggie/veggie-image' + veggieImage + '.jpg';
            document.right.src = 'images/meat/meat-image' + meatImage + '.jpg';
            pastaImage += 1;
            meatImage += 1;
            veggieImage += 1;
        }
    }
}

function restaurantLink() {
    let restaurantRec = ['https://www.olivegarden.com/home',
        'https://fazolis.com/',
        'https://www.chick-fil-a.com/'];

    let stringData = localStorage.getItem('result');
    let intData = Number.parseInt(stringData);
    restaurantEl.href = restaurantRec[intData];
}

function recipeLink() {
    let recipeRec = ['https://www.allrecipes.com/recipe/223042/chicken-parmesan/',
        'https://www.allrecipes.com/recipe/23431/to-die-for-fettuccine-alfredo/',
        'https://www.delish.com/cooking/recipe-ideas/recipes/a58703/best-cobb-salad-recipe/'];

    let stringData = localStorage.getItem('result');
    let intData = Number.parseInt(stringData);
    recipeEl.href = recipeRec[intData];
}

function finalRec() {
    let dishRec = ['Chicken Parmesan', 'Fettuccine Alfredo', 'Cobb Salad'];
    let stringData = localStorage.getItem('result');
    let intData = Number.parseInt(stringData);
    foodEl.textContent = dishRec[intData];
    document.finalDish.src = 'images/food-recs/food-rec' + stringData + '.jpg';
}