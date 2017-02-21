angular.module("misPelisSeriesApp").controller("PeliculasCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment) {

    $scope.rutaEsProximante = function() {
        return $routeSegment.startsWith("peliculas.proximamente");
    };

    $scope.rutaEsCartelera = function() {
        return $routeSegment.startsWith("peliculas.cartelera");
    };
}]);