angular.module("misPelisSeriesApp").controller("PeliculasCarteleraCtrl", ["$scope", "ApiService", function($scope, ApiService) {
    ApiService
        .consultaApi("movie/now_playing")
        .then(
            function( resultado ) {
                $scope.peliculas = resultado.data.results;
            },
            function() {
                alert("Algo no ha ido bien");
            }
        );
}]);