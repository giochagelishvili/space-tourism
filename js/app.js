$(document).ready(function() {
    var closeMenuButton = $('#close-menu-button');
    var openMenuButton = $('#hamburger-menu-button'); 

    closeMenuButton.on('click', function() {
        $('#nav-bar').css('transform', 'translateX(100%)');
    });

    openMenuButton.on('click', function() {
        $('#nav-bar').css('transform', 'translateX(0)');
    })
});