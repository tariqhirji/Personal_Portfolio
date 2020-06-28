// Function that changes navbar colour at different points of the page. Also highlights section colour.
function scroll() {

    // Get scroll length and navbar variables
    var t = window.scrollY;
    var nav = document.getElementById("navbar");
    var navigation = document.getElementById("navbarResponsive");

    // variables to hold links of navbar.
    var brand = document.getElementById("brand");
    var l1 = document.getElementById("skills-link");
    var l2 = document.getElementById("project-link");
    var l3 = document.getElementById("about-link");
    var l4 = document.getElementById("contact-link");
    var hamburger = document.getElementById("hamburger");

    // variables to hold sections of the page.
    var s1 = document.getElementById("skills-section");
    var s2 = document.getElementById("projects-section");
    var s3 = document.getElementById("about-section");
    var s4 = document.getElementById("contact-section");

    // variables to hold offset from sections to the top of the page.
    var t1 = s1.offsetTop;
    var t2 = s2.offsetTop;
    var t3 = s3.offsetTop;
    var t4 = s4.offsetTop;

    //hold colours of original links to change back to after leaving section
    l1.style.color = "white";
    l2.style.color = "white";
    l3.style.color = "white";
    l4.style.color = "white";
    brand.style.color = "white";
    hamburger.style.color = "white";

    // Conditional that checks which section of the page the user is currently on
    // Less 50px to account for transition animation time of 1s 
    if (t > t4 - 50) {
        l4.style.color = "black";
    } else if (t > t3 - 50) {
        l3.style.color = "black";
        nav.style.backgroundColor = "transparent";
        navbarResponsive.style.backgroundColor = "transparent";
    } else if (t > t2 - 50) {
        l2.style.color = "black";
        nav.style.backgroundColor = "#CAF0F8";
        navbarResponsive.style.backgroundColor = "#CAF0F8";
    } else if (t > t1 - 50) {
        l1.style.color = "black";
        nav.style.backgroundColor = "#90E0EF";
        navbarResponsive.style.backgroundColor = "#90E0EF";
    } else {
        brand.style.color = "black";
        hamburger.style.color = "black";
        nav.style.backgroundColor = "#6BA4C7";
        navbarResponsive.style.backgroundColor = "#6BA4C7";
    }
}

// JQUERY Function that bounces the SOCIALS icons when hovered.
$(function () {
    // Variables to hold animation start classes and animation end classes
    var effects = 'animated bounce';
    var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

    // For the social-icon class, when hovered, add the classes to the icon.
    $('i.social-icon').hover(function () {
        // For every hover, also remove the classes once ended so that it can be hovered again.
        $(this).addClass(effects).one(effectsEnd, function () {
            $(this).removeClass(effects);
        });
    });
});


// JQUERY Function that wobbles the SKILLS icons when hovered.
$(function () {
    // Variables to hold animation start classes and animation end classes
    var effects2 = 'animated wobble';
    var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

    // For the social-icon class, when hovered, add the classes to the icon.
    $('i.skill-icon').hover(function () {
        // For every hover, also remove the classes once ended so that it can be hovered again.
        $(this).addClass(effects2).one(effectsEnd, function () {
            $(this).removeClass(effects2);
        });
    });
});


// Function that changes bg color of navbar to transparent in the event that the user 
// clicks on the contact link and was on a bg color (Was not changing if not scrolled.)
$(function () {
    $('#contact-link').click(function () {
        $('#navbar').css('background-color', 'transparent');
    });
})