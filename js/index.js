


var effects = 'animated bounce';
var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

// Get social icon image to bounce on hover by adding classes and removing
    $(".social-icon").mouseover(function() {
        $(this).addClass(effects).one(effectsEnd, function () {
            $(this).removeClass(effects);
        });
    });