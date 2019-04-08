$(function () {
    $('#menu-opener').on('click', function () {
        if ($('#menu-template').css('display') === "none")
            $('#menu-template').slideToggle();
    });

    $('#content-template').on('click', function () {
        if ($('#menu-template').css('display') === "block")
            $('#menu-template').slideToggle();
    });
});