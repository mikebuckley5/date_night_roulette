var app = angular.module('app', ['ui.router', 'firebase']);

app.constant('fb', { url: 'https://date-night-roulette.firebaseio.com/' });

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/landing');
//For landing page.
    $stateProvider
        .state('landing', {
            url: '/landing',
            templateUrl: './Templates/landingTmpl.html'
        })
//For home page.
        .state('home', {
            url: '/home',
            templateUrl: './Templates/homeTmpl.html',
            controller: 'homeCtrl'
        })
//For movie/restaurant/dessert adding page.
        .state('movieadder', {
            url: '/movieadder',
            templateUrl: './Templates/movieAdderTmpl.html',
            controller: 'movieAdderCtrl',
            resolve: {
                movieRef2: function (movieAdderSrvc) {
                    return movieAdderSrvc.getMovieList();
                },
                restaurantRef: function (movieAdderSrvc) {
                    return movieAdderSrvc.getRestaurant();
                },
                dessertRef: function (movieAdderSrvc) {
                    return movieAdderSrvc.getDessert();
                }
            }
        });


});
