$(function () {
    toggleMenu();
});

function toggleMenu() {
    let menuTemplate = $('#menu-template');
    $('#menu-opener').on('click', function () {
        if (menuTemplate.css('display') === "none")
            menuTemplate.slideToggle();
    });

    $('#content-template').on('click', function () {
        if (menuTemplate.css('display') === "block")
            menuTemplate.slideToggle();
    });
}