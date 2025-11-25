function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 36.3932, lng: 25.4615 },
        zoom: 10
    });

    var marker = new google.maps.Marker({
        position: { lat: 36.3932, lng: 25.4615 },
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "<h3>Welcome to Santorini, Greece! Γειά σου or hello!</h3>"
    });
    infoWindow.open(map, marker);
    new google.maps.Circle({
        strokeColor: "#005f99",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: "#87bfff",
        fillOpacity: 0.35,
        map: map,
        center: { lat: 36.3932, lng: 25.4615 },
        radius: 2000 
    });

    map.setOptions({
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    });
}

var button = document.getElementById("questionButton");
button.addEventListener("click", function() {
    alert("If you have questions, please let me know and email me at:\njrcomas@cps.edu");
});
