
// Function that changes navbar colour at different points of the page. Also highlights section colour.
function scroll() {
    
    // Get scroll length and navbar variables
    var t = window.scrollY;
    var nav = document.getElementById("navbar");
    var navigation = document.getElementById("navigation");

    // variables to hold links of navbar.
    var brand = document.getElementById("brand");
    var l1 = document.getElementById("skills-link");
    var l2 = document.getElementById("project-link");
    var l3 = document.getElementById("about-link");
    var l4 = document.getElementById("contact-link");

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

    // Conditional that checks which section of the page the user is currently on
    if (t > t4 - 50) {
        l4.style.color = "black";
    } else if (t > t3 - 50) {
        l3.style.color = "black";
        nav.style.backgroundColor = "transparent";
        navigation.style.backgroundColor = "transparent";
    } else if (t > t2 - 50) {
        l2.style.color = "black";
        nav.style.backgroundColor = "#797979";
        navigation.style.backgroundColor = "#797979";
    } else if (t > t1 - 50) {
        l1.style.color = "black";
        nav.style.backgroundColor = "deepskyblue";
        navigation.style.backgroundColor = "deepskyblue";
    } else {
        brand.style.color = "black";
        nav.style.backgroundColor = "lightskyblue";
        navigation.style.backgroundColor = "lightskyblue";
    }
}

// JQUERY Function that bounces the social icons when hovered.

$(function() {
    // Variables to hold animation start classes and animation end classes
    var effects = 'animated bounce';
    var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

    // For the social-icon class, when hovered, add the classes to the icon.
    $('i.social-icon').hover(function() {
        // For every hover, also remove the classes once ended so that it can be hovered again.
        $(this).addClass(effects).one(effectsEnd, function() {
            $(this).removeClass(effects);
        });
    });
});