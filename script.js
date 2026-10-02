
// =========================
// MIZAJ HOME MENU FILTER
// =========================

const filterButtons =
    document.querySelectorAll(".filter-button");

const menuCards =
    document.querySelectorAll(".menu-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        const selectedCategory =
            button.dataset.category;


        menuCards.forEach(function (card) {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});



// =========================
// FIND YOUR MIZAJ
// =========================

const moodButtons =
    document.querySelectorAll(".mood-button");


const moodTitle =
    document.getElementById("moodTitle");


const moodDescription =
    document.getElementById("moodDescription");


const moodRecommendation =
    document.getElementById("moodRecommendation");


const moodDrink =
    document.getElementById("moodDrink");


const moodFeeling =
    document.getElementById("moodFeeling");


const moodMenuButton =
    document.getElementById("moodMenuButton");



const moods = {

    // =========================
    // MORNING
    // =========================

    morning: {

        title: "Morning Mood",

        description:
            "Start your day with a fresh breakfast and a good cup of coffee.",

        recommendation:
            "MIZAJ Breakfast",

        drink:
            "MIZAJ Latte",

        feeling:
            "Fresh & Energized",

        menu:
            "menu.php#breakfast"

    },


    =========================
     CHILL
     =========================

    chill: {

        title: "Chill Mood",

        description:
            "Slow down, relax and enjoy something cold with a little sweetness.",

        recommendation:
            "Iced Coffee",

        drink:
            "Cheesecake",

        feeling:
            "Calm & Cozy",

        menu:
            "menu.php#drinks"

    },


    // =========================
    // FRESH
    // =========================

    fresh: {

        title: "Fresh Mood",

        description:
            "Choose something light, colorful and refreshing.",

        recommendation:
            "Mediterranean Salad",

        drink:
            "Fresh Lemonade",

        feeling:
            "Light & Fresh",

        menu:
            "menu.php#salads"

    },


    // =========================
    // LUNCH
    // =========================

    lunch: {

        title: "Lunch Mood",

        description:
            "You're ready for something warm, filling and satisfying.",

        recommendation:
            "Grilled Chicken Sandwich",

        drink:
            "Iced Tea",

        feeling:
            "Comfort & Satisfied",

        menu:
            "menu.php#lunch"

    },


    // =========================
    // SWEET
    // =========================

    sweet: {

        title: "Sweet Mood",

        description:
            "Sometimes the perfect MIZAJ is simply something sweet.",

        recommendation:
            "Classic Cheesecake",

        drink:
            "Spanish Latte",

        feeling:
            "Sweet & Happy",

        menu:
            "menu.php#desserts"

    },


    // =========================
    // SIGNATURE
    // =========================

    signature: {

        title: "Signature Mood",

        description:
            "Try something made to feel like a true MIZAJ moment.",

        recommendation:
            "MIZAJ Signature Latte",

        drink:
            "Caramel Cloud",

        feeling:
            "Special & Indulgent",

        menu:
            "menu.php#specials"

    }

};



// =========================
// MOOD BUTTON CLICK
// =========================

moodButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedMood =
            button.dataset.mood;


        const mood =
            moods[selectedMood];


        if (!mood) {
            return;
        }


        // Remove active
        moodButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active
        button.classList.add("active");


        // Update title
        if (moodTitle) {

            moodTitle.textContent =
                mood.title;

        }


        // Update description
        if (moodDescription) {

            moodDescription.textContent =
                mood.description;

        }


        // Update recommendation
        if (moodRecommendation) {

            moodRecommendation.textContent =
                mood.recommendation;

        }


        // Update drink
        if (moodDrink) {

            moodDrink.textContent =
                mood.drink;

        }


        // Update feeling
        if (moodFeeling) {

            moodFeeling.textContent =
                mood.feeling;

        }


        // Update menu link
        if (moodMenuButton) {

            moodMenuButton.href =
                mood.menu;

        }

    });

});



// =========================
// CURRENT YEAR
// =========================

const footerYear =
    document.querySelector("footer > span");


if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " MIZAJ Café & Bakery. All Rights Reserved.";

}



