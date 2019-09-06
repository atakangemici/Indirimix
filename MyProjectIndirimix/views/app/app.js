var app = angular.module('indirimixApp',
    ['ui.bootstrap', 'ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/views/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/views/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/views/app/views/signup.html"
    });

    $routeProvider.when("/favorites", {
        controller: "favoritesController",
        templateUrl: "/views/app/views/favorites.html"
    });

    $routeProvider.when("/contact", {
        controller: "contactController",
        templateUrl: "/views/app/views/contact.html"
    });

    $routeProvider.when("/blog", {
        controller: "blogController",
        templateUrl: "/views/app/views/blog.html"
    });

    $routeProvider.when('/productdetail/:id', {
        controller: "productDetailController",
        templateUrl: "/views/app/views/productdetail.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/views/app/views/signup.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/views/app/views/login.html"
    });

    $routeProvider.when("/profile", {
        controller: "profileController",
        templateUrl: "/views/app/views/profile.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
    $locationProvider.html5Mode(true).hashPrefix('*');

});

