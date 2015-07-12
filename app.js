var currencyApp = angular.module("currencyApp", ["ngRoute", "ngResource"]);

currencyApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.html",
            controller: "mainController"
        })
        .when("/rates", {
            templateUrl: "pages/rates.html",
            controller: "ratesController"
        });
});