var map;

    function initMap() {
      var lat;
      var lng;
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -3.43, lng: -38.32}, // Fortaleza
      zoom: 8,
      scrollwheel: false
    });

    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    
  }
