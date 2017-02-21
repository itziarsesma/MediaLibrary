angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", function($routeSegmentProvider) {

    $routeSegmentProvider.when("/peliculas", "peliculas");
    $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente");
    $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera");
    $routeSegmentProvider.when("/series", "series");
    $routeSegmentProvider.when("/series/hoy", "series.hoy");
    $routeSegmentProvider.when("/series/enemision", "series.enemision");

    $routeSegmentProvider.segment("peliculas", {
        controller: "PeliculasCtrl",
        templateUrl: "views/Peliculas.html"
    });

    $routeSegmentProvider.within("peliculas").segment("proximamente", {
        controller: "PeliculasProximamenteCtrl",
        templateUrl: "views/PeliculasProximamente.html"
    });

    $routeSegmentProvider.within("peliculas").segment("cartelera", {
        controller: "PeliculasCarteleraCtrl",
        templateUrl: "views/PeliculasCartelera.html"
    });

    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });
}]);