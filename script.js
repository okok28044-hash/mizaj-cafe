<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>MIZAJ Café & Bakery | Menu</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet"
    >

    <!-- Main CSS -->
    <link rel="stylesheet" href="style.css">

    <style>

        /* =========================================
           MENU PAGE
        ========================================= */

        .menu-page {
            background: var(--cream);
        }

        /* =========================================
           MENU HERO
        ========================================= */

        .menu-hero {
            min-height: 430px;

            padding: 90px 7%;

            display: flex;

            align-items: center;

            justify-content: center;

            text-align: center;

            position: relative;

            background:
                linear-gradient(
                    rgba(32, 24, 21, 0.58),
                    rgba(32, 24, 21, 0.68)
                ),
                url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90");

            background-size: cover;

            background-position: center;
        }

        .menu-hero-content {
            max-width: 750px;

            color: white;
        }

        .menu-hero .eyebrow {
            color: #d8b08e;

            margin-bottom: 15px;
        }

        .menu-hero h1 {
            font-family: "Playfair Display", serif;

            font-size: clamp(55px, 7vw, 90px);

            line-height: 1;

            margin-bottom: 22px;
        }

        .menu-hero h1 span {
            color: #d8a87e;
        }

        .menu-hero p {
            max-width: 600px;

            margin: auto;

            color: rgba(255, 255, 255, 0.78);

            font-size: 15px;

            line-height: 1.8;
        }


        /* =========================================
           MENU NAVIGATION
        ========================================= */

        .menu-navigation {
            position: sticky;

            top: 88px;

            z-index: 900;

            padding: 15px 7%;

            background: rgba(245, 239, 230, 0.96);

            border-bottom: 1px solid var(--border);

            backdrop-filter: blur(10px);
        }

        .menu-navigation-inner {
            max-width: 1100px;

            margin: auto;

            display: flex;

            justify-content: center;

            align-items: center;

            flex-wrap: wrap;

            gap: 9px;
        }

        .menu-navigation a {
            padding: 9px 17px;

            border: 1px solid var(--border);

            color: var(--brown);

            font-size: 11px;

            transition: 0.3s;

            background: transparent;
        }

        .menu-navigation a:hover {
            background: var(--brown);

            border-color: var(--brown);

            color: white;

            transform: translateY(-2px);
        }


        /* =========================================
           MENU SECTIONS
        ========================================= */

        .full-menu-section {
            padding: 110px 7%;

            scroll-margin-top: 145px;
        }

        .full-menu-section:nth-child(even) {
            background: var(--light);
        }

        .full-menu-section:nth-child(odd) {
            background: var(--cream);
        }

        .full-menu-container {
            max-width: 1250px;

            margin: auto;
        }


        /* =========================================
           SECTION HEADER
        ========================================= */

        .full-menu-heading {
            max-width: 750px;

            margin: 0 auto 55px;

            text-align: center;
        }

        .full-menu-heading .eyebrow {
            margin-bottom: 13px;
        }

        .full-menu-heading h2 {
            font-family: "Playfair Display", serif;

            font-size: clamp(42px, 5vw, 62px);

            line-height: 1.05;

            color: var(--dark);

            margin-bottom: 17px;
        }

        .full-menu-heading h2 span {
            color: var(--caramel);
        }

        .full-menu-heading p {
            color: var(--muted);

            font-size: 14px;

            line-height: 1.8;
        }


        /* =========================================
           SECTION IMAGE
        ========================================= */

        .menu-section-image {
            width: 100%;

            height: 390px;

            margin-bottom: 45px;

            background-size: cover;

            background-position: center;

            position: relative;

            overflow: hidden;
        }

        .menu-section-image::after {
            content: "";

            position: absolute;

            inset: 0;

            background:
                linear-gradient(
                    transparent 45%,
                    rgba(32, 24, 21, 0.55)
                );
        }

        .menu-section-image span {
            position: absolute;

            left: 30px;

            bottom: 25px;

            z-index: 2;

            color: white;

            font-family: "Playfair Display", serif;

            font-size: 25px;

            letter-spacing: 2px;
        }

        .breakfast-section-image {
            background-image:
                url("https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=90");
        }

        .drinks-section-image {
            background-image:
                url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=90");
        }

        .salads-section-image {
            background-image:
                url("https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1600&q=90");
        }

        .lunch-section-image {
            background-image:
                url("https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=90");
        }

        .desserts-section-image {
            background-image:
                url("https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1600&q=90");
        }

        .specials-section-image {
            background-image:
                url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=90");
        }


        /* =========================================
           MENU ITEMS
        ========================================= */

        .menu-items {
            display: grid;

            grid-template-columns: repeat(2, 1fr);

            gap: 0 60px;
        }

        .menu-item {
            padding: 25px 0;

            border-bottom: 1px solid var(--border);

            display: grid;

            grid-template-columns: 1fr auto;

            gap: 25px;

            transition: 0.3s;
        }

        .menu-item:hover {
            padding-left: 8px;
        }

        .menu-item-info h3 {
            font-family: "Playfair Display", serif;

            font-size: 23px;

            color: var(--brown);

            margin-bottom: 6px;
        }

        .menu-item-info p {
            color: var(--muted);

            font-size: 12px;

            line-height: 1.7;

            max-width: 480px;
        }

        .menu-item-price {
            color: var(--caramel);

            font-size: 15px;

            font-weight: 700;

            white-space: nowrap;

            padding-top: 3px;
        }


        /* =========================================
           SPECIALS DARK SECTION
        ========================================= */

        .special-menu-section {
            background: var(--dark) !important;

            color: white;
        }

        .special-menu-section .full-menu-heading h2 {
            color: white;
        }

        .special-menu-section .full-menu-heading p {
            color: #cfc1b6;
        }

        .special-menu-section .menu-item {
            border-color: rgba(255, 255, 255, 0.12);
        }

        .special-menu-section .menu-item-info h3 {
            color: white;
        }

        .special-menu-section .menu-item-info p {
            color: #cfc1b6;
        }

        .special-menu-section .menu-item-price {
            color: #d8a87e;
        }


        /* =========================================
           BACK TO HOME
        ========================================= */

        .menu-bottom {
            padding: 90px 7%;

            background: var(--beige);

            text-align: center;
        }

        .menu-bottom h2 {
            font-family: "Playfair Display", serif;

            font-size: 45px;

            color: var(--brown);

            margin-bottom: 15px;
        }

        .menu-bottom p {
            color: var(--muted);

            font-size: 14px;

            margin-bottom: 30px;
        }

        .menu-home-button {
            display: inline-flex;

            align-items: center;

            justify-content: center;

            padding: 14px 27px;

            background: var(--brown);

            color: white;

            font-size: 12px;

            transition: 0.3s;
        }

        .menu-home-button:hover {
            background: var(--caramel);

            transform: translateY(-3px);
        }


        /* =========================================
           MENU PAGE RESPONSIVE
        ========================================= */

        @media (max-width: 850px) {

            .menu-navigation {
                top: 75px;

                padding: 12px 5%;
            }

            .full-menu-section {
                padding: 85px 5%;

                scroll-margin-top: 130px;
            }

            .menu-section-image {
                height: 330px;
            }

            .menu-items {
                grid-template-columns: 1fr;

                gap: 0;
            }

        }


        @media (max-width: 600px) {

            .menu-hero {
                min-height: 380px;

                padding: 75px 5%;
            }

            .menu-hero h1 {
                font-size: 53px;
            }

            .menu-hero p {
                font-size: 13px;
            }

            .menu-navigation {
                position: relative;

                top: auto;

                padding: 12px 5%;
            }

            .menu-navigation-inner {
                gap: 7px;
            }

            .menu-navigation a {
                padding: 8px 11px;

                font-size: 10px;
            }

            .full-menu-section {
                padding: 75px 5%;

                scroll-margin-top: 20px;
            }

            .full-menu-heading {
                margin-bottom: 35px;
            }

            .full-menu-heading h2 {
                font-size: 40px;
            }

            .full-menu-heading p {
                font-size: 13px;
            }

            .menu-section-image {
                height: 250px;

                margin-bottom: 30px;
            }

            .menu-section-image span {
                left: 20px;

                bottom: 18px;

                font-size: 20px;
            }

            .menu-item {
                grid-template-columns: 1fr auto;

                gap: 12px;

                padding: 21px 0;
            }

            .menu-item-info h3 {
                font-size: 20px;
            }

            .menu-item-info p {
                font-size: 11px;
            }

            .menu-item-price {
                font-size: 13px;
            }

            .menu-bottom {
                padding: 75px 5%;
            }

            .menu-bottom h2 {
                font-size: 37px;
            }

        }

    </style>

</head>


<body class="menu-page">


<!-- =========================================
     NAVBAR
========================================= -->

<header class="navbar">

    <a href="index.php" class="logo">

        <span class="logo-main">
            MIZAJ
        </span>

        <span class="logo-sub">
            CAFÉ & BAKERY
        </span>

    </a>


    <nav>

        <a href="index.php#home">
            Home
        </a>

        <a href="menu.php">
            Menu
        </a>

        <a href="index.php#about">
            About
        </a>

        <a href="index.php#space">
            Our Space
        </a>

        <a href="index.php#contact">
            Contact
        </a>

    </nav>


    <a href="index.php#contact" class="nav-button">
        FIND US
    </a>

</header>



<!-- =========================================
     MENU HERO
========================================= -->

<section class="menu-hero">

    <div class="menu-hero-content">

        <p class="eyebrow">
            MIZAJ CAFÉ & BAKERY
        </p>

        <h1>
            Our <span>Menu</span>
        </h1>

        <p>
            From slow mornings and fresh salads to comforting lunches
            and something sweet at the end — discover the flavors
            that make every MIZAJ moment different.
        </p>

    </div>

</section>



<!-- =========================================
     MENU NAVIGATION
========================================= -->

<div class="menu-navigation">

    <div class="menu-navigation-inner">

        <a href="#breakfast">
            Breakfast
        </a>

        <a href="#drinks">
            Drinks
        </a>

        <a href="#salads">
            Salads
        </a>

        <a href="#lunch">
            Lunch
        </a>

        <a href="#desserts">
            Desserts
        </a>

        <a href="#specials">
            MIZAJ Specials
        </a>

    </div>

</div>



<!-- =========================================
     BREAKFAST
========================================= -->

<section class="full-menu-section" id="breakfast">

    <div class="full-menu-container">

        <div class="full-menu-heading">

            <p class="eyebrow">
                GOOD MORNING
            </p>

            <h2>
                Breakfast <span>& Brunch</span>
            </h2>

            <p>
                Slow mornings deserve something fresh, warm and satisfying.
            </p>

        </div>


        <div class="menu-section-image breakfast-section-image">

            <span>
                FRESH START
            </span>

        </div>


        <div class="menu-items">


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        MIZAJ Breakfast
                    </h3>

                    <p>
                        Eggs, avocado, fresh vegetables, toasted bread and a side of labneh.
                    </p>

                </div>

                <div class="menu-item-price">
                    $9.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Avocado Toast
                    </h3>

                    <p>
                        Smashed avocado, poached egg, herbs and toasted sourdough.
                    </p>

                </div>

                <div class="menu-item-price">
                    $7.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Croissant Breakfast
                    </h3>

                    <p>
                        Fresh butter croissant served with eggs and seasonal vegetables.
                    </p>

                </div>

                <div class="menu-item-price">
                    $8.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Pancake Stack
                    </h3>

                    <p>
                        Fluffy pancakes, maple syrup, berries and a touch of powdered sugar.
                    </p>

                </div>

                <div class="menu-item-price">
                    $8.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Labneh Morning Plate
                    </h3>

                    <p>
                        Creamy labneh, olives, tomatoes, cucumbers and warm bread.
                    </p>

                </div>

                <div class="menu-item-price">
                    $7.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Granola Bowl
                    </h3>

                    <p>
                        Greek yogurt, house granola, honey and fresh seasonal fruit.
                    </p>

                </div>

                <div class="menu-item-price">
                    $7.50
                </div>

            </div>

        </div>

    </div>

</section>



<!-- =========================================
     DRINKS
========================================= -->

<section class="full-menu-section" id="drinks">

    <div class="full-menu-container">

        <div class="full-menu-heading">

            <p class="eyebrow">
                TAKE A SIP
            </p>

            <h2>
                Coffee <span>& Drinks</span>
            </h2>

            <p>
                Classic coffee, refreshing cold drinks and cozy MIZAJ favorites.
            </p>

        </div>


        <div class="menu-section-image drinks-section-image">

            <span>
                BREWED WITH CARE
            </span>

        </div>


        <div class="menu-items">


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Espresso
                    </h3>

                    <p>
                        Rich and balanced single espresso with a smooth finish.
                    </p>

                </div>

                <div class="menu-item-price">
                    $3.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        MIZAJ Latte
                    </h3>

                    <p>
                        Smooth espresso with steamed milk and a creamy finish.
                    </p>

                </div>

                <div class="menu-item-price">
                    $5.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Spanish Latte
                    </h3>

                    <p>
                        Espresso, silky milk and a touch of sweet condensed milk.
                    </p>

                </div>

                <div class="menu-item-price">
                    $5.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Iced Coffee
                    </h3>

                    <p>
                        Chilled espresso, milk and ice for an easy refreshing break.
                    </p>

                </div>

                <div class="menu-item-price">
                    $5.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Iced Matcha
                    </h3>

                    <p>
                        Smooth matcha, cold milk and ice with a naturally fresh taste.
                    </p>

                </div>

                <div class="menu-item-price">
                    $5.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Fresh Lemonade
                    </h3>

                    <p>
                        Fresh lemon juice, chilled water and a hint of sweetness.
                    </p>

                </div>

                <div class="menu-item-price">
                    $4.00
                </div>

            </div>

        </div>

    </div>

</section>



<!-- =========================================
     SALADS
========================================= -->

<section class="full-menu-section" id="salads">

    <div class="full-menu-container">

        <div class="full-menu-heading">

            <p class="eyebrow">
                LIGHT & FRESH
            </p>

            <h2>
                Fresh <span>Salads</span>
            </h2>

            <p>
                Colorful ingredients, fresh vegetables and light homemade dressings.
            </p>

        </div>


        <div class="menu-section-image salads-section-image">

            <span>
                FRESH FROM THE KITCHEN
            </span>

        </div>


        <div class="menu-items">


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Classic Caesar
                    </h3>

                    <p>
                        Crisp lettuce, parmesan, croutons and creamy Caesar dressing.
                    </p>

                </div>

                <div class="menu-item-price">
                    $8.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Chicken Caesar
                    </h3>

                    <p>
                        Grilled chicken breast, crisp lettuce, parmesan and Caesar dressing.
                    </p>

                </div>

                <div class="menu-item-price">
                    $10.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Mediterranean Salad
                    </h3>

                    <p>
                        Tomatoes, cucumber, olives, feta, greens and lemon dressing.
                    </p>

                </div>

                <div class="menu-item-price">
                    $8.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Avocado Garden
                    </h3>

                    <p>
                        Avocado, mixed greens, cherry tomatoes, cucumber and herbs.
                    </p>

                </div>

                <div class="menu-item-price">
                    $9.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Quinoa Fresh Bowl
                    </h3>

                    <p>
                        Quinoa, roasted vegetables, greens and light lemon dressing.
                    </p>

                </div>

                <div class="menu-item-price">
                    $9.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Burrata Garden
                    </h3>

                    <p>
                        Creamy burrata, tomatoes, fresh basil and olive oil.
                    </p>

                </div>

                <div class="menu-item-price">
                    $11.00
                </div>

            </div>

        </div>

    </div>

</section>



<!-- =========================================
     LUNCH
========================================= -->

<section class="full-menu-section" id="lunch">

    <div class="full-menu-container">

        <div class="full-menu-heading">

            <p class="eyebrow">
                TAKE YOUR TIME
            </p>

            <h2>
                Lunch <span>Favorites</span>
            </h2>

            <p>
                Comforting plates made for a relaxed lunch with friends or family.
            </p>

        </div>


        <div class="menu-section-image lunch-section-image">

            <span>
                MADE TO ENJOY
            </span>

        </div>


        <div class="menu-items">


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Grilled Chicken Sandwich
                    </h3>

                    <p>
                        Grilled chicken, lettuce, tomato, cheese and house sauce.
                    </p>

                </div>

                <div class="menu-item-price">
                    $10.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        MIZAJ Club
                    </h3>

                    <p>
                        Chicken, turkey, cheese, lettuce, tomato and crispy bread.
                    </p>

                </div>

                <div class="menu-item-price">
                    $11.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Chicken Pasta
                    </h3>

                    <p>
                        Creamy pasta with grilled chicken, parmesan and fresh herbs.
                    </p>

                </div>

                <div class="menu-item-price">
                    $12.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Mushroom Pasta
                    </h3>

                    <p>
                        Creamy mushroom pasta finished with parmesan and herbs.
                    </p>

                </div>

                <div class="menu-item-price">
                    $11.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Grilled Chicken Plate
                    </h3>

                    <p>
                        Grilled chicken, roasted potatoes, vegetables and house sauce.
                    </p>

                </div>

                <div class="menu-item-price">
                    $13.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        MIZAJ Burger
                    </h3>

                    <p>
                        Juicy beef patty, cheddar, lettuce, tomato and MIZAJ sauce.
                    </p>

                </div>

                <div class="menu-item-price">
                    $12.50
                </div>

            </div>

        </div>

    </div>

</section>



<!-- =========================================
     DESSERTS
========================================= -->

<section class="full-menu-section" id="desserts">

    <div class="full-menu-container">

        <div class="full-menu-heading">

            <p class="eyebrow">
                SOMETHING SWEET
            </p>

            <h2>
                Desserts <span>& Bakery</span>
            </h2>

            <p>
                Freshly baked treats for the perfect ending to your MIZAJ moment.
            </p>

        </div>


        <div class="menu-section-image desserts-section-image">

            <span>
                A SWEET MOMENT
            </span>

        </div>


        <div class="menu-items">


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Classic Cheesecake
                    </h3>

                    <p>
                        Creamy cheesecake with a buttery biscuit base.
                    </p>

                </div>

                <div class="menu-item-price">
                    $6.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Chocolate Brownie
                    </h3>

                    <p>
                        Rich chocolate brownie served warm with a soft center.
                    </p>

                </div>

                <div class="menu-item-price">
                    $5.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Tiramisu
                    </h3>

                    <p>
                        Espresso-soaked layers with mascarpone and cocoa.
                    </p>

                </div>

                <div class="menu-item-price">
                    $6.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Lotus Cake
                    </h3>

                    <p>
                        Creamy cake with Lotus biscuit and caramelized biscuit crumbs.
                    </p>

                </div>

                <div class="menu-item-price">
                    $6.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Chocolate Cake
                    </h3>

                    <p>
                        Soft chocolate cake with rich chocolate cream.
                    </p>

                </div>

                <div class="menu-item-price">
                    $6.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Mini Croissant
                    </h3>

                    <p>
                        Freshly baked buttery croissant served warm.
                    </p>

                </div>

                <div class="menu-item-price">
                    $3.50
                </div>

            </div>

        </div>

    </div>

</section>



<!-- =========================================
     MIZAJ SPECIALS
========================================= -->

<section class="full-menu-section special-menu-section" id="specials">

    <div class="full-menu-container">

        <div class="full-menu-heading">

            <p class="eyebrow">
                ONLY AT MIZAJ
            </p>

            <h2>
                MIZAJ <span>Specials</span>
            </h2>

            <p>
                A few signature combinations created for moments that deserve
                something a little different.
            </p>

        </div>


        <div class="menu-section-image specials-section-image">

            <span>
                OUR SIGNATURES
            </span>

        </div>


        <div class="menu-items">


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        MIZAJ Signature Latte
                    </h3>

                    <p>
                        Our creamy signature latte with a subtle caramel finish.
                    </p>

                </div>

                <div class="menu-item-price">
                    $6.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Caramel Cloud
                    </h3>

                    <p>
                        Iced espresso, creamy milk and caramel foam.
                    </p>

                </div>

                <div class="menu-item-price">
                    $6.50
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        MIZAJ Brunch Board
                    </h3>

                    <p>
                        A sharing board with eggs, croissants, cheese, labneh and fresh fruit.
                    </p>

                </div>

                <div class="menu-item-price">
                    $16.00
                </div>

            </div>


            <div class="menu-item">

                <div class="menu-item-info">

                    <h3>
                        Sweet MIZAJ
                    </h3>

                    <p>
                        Mini dessert selection served with your choice of coffee.
                    </p>

                </div>

                <div class="menu-item-price">
                    $10.00
                </div>

            </div>

        </div>

    </div>

</section>



<!-- =========================================
     BOTTOM CTA
========================================= -->

<section class="menu-bottom">

    <h2>
        Find Your MIZAJ
    </h2>

    <p>
        Not sure what you're in the mood for?
        Go back and let MIZAJ choose a menu direction for you.
    </p>

    <a href="index.php#mood" class="menu-home-button">
        FIND YOUR MIZAJ →
    </a>

</section>



<!-- =========================================
     FOOTER
========================================= -->

<footer>

    <div class="footer-logo">
        MIZAJ
    </div>

    <p>
        Café & Bakery · Tripoli, Lebanon
    </p>

    <div class="footer-links">

        <a href="index.php#home">
            Home
        </a>

        <a href="menu.php">
            Menu
        </a>

        <a href="index.php#about">
            About
        </a>

        <a href="index.php#space">
            Our Space
        </a>

        <a href="index.php#contact">
            Contact
        </a>

    </div>

    <span>
        © 2026 MIZAJ Café & Bakery. All Rights Reserved.
    </span>

</footer>


</body>

</html>









