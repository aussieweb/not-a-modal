/* =============================================================
 * modal.js v1.0.0
 * A kinda-sorta-not-really modal window thingy.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net
 * ============================================================= */

$(function () {
    $('.modal').click(function(e) {
        e.preventDefault();
        var dataID = $(this).attr('data-target');
        $('.modal-menu').not(dataID).removeClass('active');
        $(dataID).toggleClass('active');
    });
    $('.modal-close').click(function(e) {
        e.preventDefault();
        $('.modal-menu').removeClass('active');
    });
});





/* =============================================================
 * js-accessibility.js v1.0.0
 * Adds .js class to <body> for progressive enhancement.
 * Script by Chris Ferdinandi - http://gomakethings.com
 * Licensed under WTFPL - http://www.wtfpl.net
 * ============================================================= */

$(function () {
    $('body').addClass('js'); // On page load, add the .js class to the <body> element.
});
