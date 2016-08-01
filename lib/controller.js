var app = angular.module('map', []);

app.controller('mapCtrl', function ($scope) {

    $scope.MudaCidade = function (cidade) {
        if (cidade == 'FOR') {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -3.43, lng: -38.32 },
                zoom: 8,
                scrollwheel: true
            });
            //map.google.maps.LatLng(-3.43, -38.32);
        }
        if (cidade == 'RJ') {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -22.54, lng: -43.12 },
                zoom: 8,
                scrollwheel: true
            });
            // map.google.maps.LatLng(-22.54, -43.12);
        }
        if (cidade == 'PAR') {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 48.85, lng: 2.35 },
                zoom: 8,
                scrollwheel: true
            });
            //map.google.maps.LatLng(48, 48);
        }
    }

});
