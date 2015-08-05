app.controller('homeCtrl', function ($scope, homeSrvc) {

//When try again button is clicked, reload page.
    $scope.refreshPage = function () {
        $(document).click(function () {
            location.reload();
        });
    };

//Cards set to not show
    $scope.movieShow = false;
    $scope.restaurantShow = false;
    $scope.dessertShow = false;

//Gets array of movies from firebase, then generates random number which coordinates to movie object in array.
    $scope.getRandomMovie = function () {
        homeSrvc.getMovies().then(function (response) {
            $scope.moviesArray = response;
            var randomNumber = Math.floor(Math.random() * $scope.moviesArray.length);
            $scope.movie = $scope.moviesArray[randomNumber];
            $scope.movieShow = true;
        });
    } ();

//Gets array of restaurants from firebase, then generates random number which coordinates to restaurant object in array.
    $scope.getRandomRestaurant = function () {
        homeSrvc.getRestaurant().then(function (response) {
            $scope.restaurantsArray = response;
            var randomNumber = Math.floor(Math.random() * $scope.restaurantsArray.length);
            $scope.restaurant = $scope.restaurantsArray[randomNumber];
            $scope.restaurantShow = true;
        });
    } ();

//Gets array of dessert places from firebase, then generates random number which coordinates to dessert place object in array.
    $scope.getRandomDessert = function () {
        homeSrvc.getDessert().then(function (response) {
            $scope.dessertsArray = response;
            var randomNumber = Math.floor(Math.random() * $scope.dessertsArray.length);
            $scope.dessert = $scope.dessertsArray[randomNumber];
            $scope.dessertShow = true;
        });
    } ();
});
