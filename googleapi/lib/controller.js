var app = angular.module('map', []);

var lat = -3.43;
var lng = -38.32;
var map;

    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -3.43, lng: -38.32}, // Fortaleza
      zoom: 8,
      scrollwheel: true
    });
    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
  }

app.controller('mapCtrl', function ($scope) {
    var mapa = map;

    $scope.MudaCidade = function (cidade) {
        if (cidade == 'FOR') {
            //map.google.maps.LatLng(-3.43, -38.32);
             map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -3.43, lng: -38.32 },
                zoom: 8,
                scrollwheel: true
            });

            mapa.google.maps.LatLng(-34.397, 150.644);
        }
        
        if (cidade == 'RJ') {
            // map.google.maps.LatLng(-22.54, -43.12);
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -22.54, lng: -43.12 },
                zoom: 8,
                scrollwheel: true
            });
        }

        if (cidade == 'PAR') {
            //map.google.maps.LatLng(48, 48);
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 48.85, lng: 2.35 },
                zoom: 8,
                scrollwheel: true
            });
        }
    }
});
