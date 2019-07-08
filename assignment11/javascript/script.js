var map;
$(document).ready(function () {

    initMap(51.50853,0.1278)
});

function initMap(lat,long) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: long},
        zoom: 8
    });
}
