// This next section sets up the fading images for the features section on the sidebar. 
// SPEED: In milliseconds - how long the transition should take.
// TYPE: Type of slideshow: 'sequence', 'random' or 'random_start'
// CONTAINERHEIGHT: The height of the div that is calling the innerfade method.


$(function() {
    $('div#featured').innerfade({
        speed: 1500,
        timeout: 9000,
        type: 'sequence',
        containerheight: '733px'
    });
});