function initMap() {
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
            styles:
      [{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
    center: new google.maps.LatLng(40.681, -73.945)
  };
  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'assets/img/others/marker.png',
    map: map
  });
}
initMap()
