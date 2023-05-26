$(document).ready(function() {
    var openMenuButton = $('#hamburger-menu-button'); // Open Menu (hamburger) Button
    var closeMenuButton = $('#close-menu-button'); // Close Menu Button

    var planetListItem = $('.planet-list-item'); // Planet list item (destination)

    // Add event listener to planet list item on click
    planetListItem.on('click', function() {
        // Activate planet which was clicked
        $('.planet-list-item').removeClass('planet-active');
        $(this).addClass('planet-active');

        // Name of the planet clicked
        var planetName = $(this).text();
        planetName = $.trim(planetName);

        // Load planet's information
        loadPlanet(planetName);
    });

    // Loads information about given planet from data.json
    function loadPlanet(planetName) {
        // Planet index
        var index = 0;

        // See which planet was clicked
        if (planetName == 'MOON') {
            index = 0;
        } else if (planetName == 'MARS') {
            index = 1;
        } else if (planetName == 'EUROPA') {
            index = 2;
        } else if (planetName == 'TITAN') {
            index = 3;
        }

        // Load JSON data
        $.getJSON('js/data.json', function(data) {
            // Load clicked planet's data
            var data = data.destinations[index];

            // Replace planet image
            $('.planet-image').fadeOut(150, function() {
                $('.planet-image').attr('src', data.images.webp).fadeIn(150);
            });

            // Replace planet's name
            $('.planet-name').fadeOut(150, function() {
                $('.planet-name').text(data.name).fadeIn(150);
            });

            // Replace planet's description
            $('.planet-description').fadeOut(150, function() {
                $('.planet-description').text(data.description).fadeIn(150);
            });

            // Replace distance to planet
            $('.distance').fadeOut(150, function() {
                $('.distance').text(data.distance).fadeIn(150);
            });

            // Replace travel time
            $('.travel-time').fadeOut(150, function() {
                $('.travel-time').text(data.travel).fadeIn(150);
            });
        });
    }

    // Opens nav menu
    openMenuButton.on('click', function() {
        $('#nav-bar').css('transform', 'translateX(0)');
    });

    // Closes nav menu
    closeMenuButton.on('click', function() {
        $('#nav-bar').css('transform', 'translateX(100%)');
    });

    // If homepage is open
    if (window.location.pathname == '/index.html') {
        // Activate 'HOME' nav item
        $('.nav-link').removeClass('active');
        $('#index-link').addClass('active');
    // Else if destination page is open
    } else if (window.location.pathname == '/destination.html') {
        // Activate 'DESTINATION' nav item
        $('.nav-link').removeClass('active');
        $('#destination-link').addClass('active');
    // Else if crew page is open
    } else if (window.location.pathname == '/crew.html') {
        // Activate 'CREW' nav item
        $('.nav-link').removeClass('active');
        $('#crew-link').addClass('active');
    // Else if technology page is open
    } else if (window.location.pathname == '/technology.html') {
        // Activate 'TECHNOLOGY' nav item
        $('.nav-link').removeClass('active');
        $('#technology-link').addClass('active');
    }
});