$(document).ready(function() {
    var openMenuButton = $('#hamburger-menu-button'); // Open Menu (hamburger) Button
    var closeMenuButton = $('#close-menu-button'); // Close Menu Button

    var planetListItem = $('.planet-list-item'); // Planet list item (destination)

    var crewNavCircle = $('.crew-nav-circle');

    // Add event listener to crew navigation circle on click
    crewNavCircle.on('click', function() {
        // Activate clicked circle
        $('.crew-nav-circle').removeClass('circle-active');
        $(this).addClass('circle-active');

        var circleIndex = $(this).index();
        
        loadCrew(circleIndex);
    });

    function loadCrew(index) {
        // Load JSON data
        $.getJSON('js/data.json', function(data) {
            // Load clicked planet's data
            var data = data.crew[index];

            // Replace crew member image
            $('.crew-image').fadeOut(150, function() {
                $('.crew-image').attr('src', data.images.webp).fadeIn(150);
            });

            // Replace crew member's position (role)
            $('.crew-position').fadeOut(150, function() {
                $('.crew-position').text(data.role).fadeIn(150);
            });

            // Replace crew member's name
            $('.crew-name').fadeOut(150, function() {
                $('.crew-name').text(data.name).fadeIn(150);
            });

            // Replace crew member's bio
            $('.crew-bio').fadeOut(150, function() {
                $('.crew-bio').text(data.bio).fadeIn(150);
            });
        });
    }

    // Add event listener to planet list item on click
    planetListItem.on('click', function() {
        // Activate planet which was clicked
        $('.planet-list-item').removeClass('planet-active');
        $(this).addClass('planet-active');

        // Name of the planet clicked
        var planetName = $.trim($(this).text());

        // Load planet's information
        loadPlanet(planetName);
    });

    // Opens nav menu
    openMenuButton.on('click', function() {
        $('#nav-bar').css('transform', 'translateX(0)');
    });

    // Closes nav menu
    closeMenuButton.on('click', function() {
        $('#nav-bar').css('transform', 'translateX(100%)');
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
});