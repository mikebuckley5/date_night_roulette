app.controller('movieAdderCtrl', function ($scope, $firebaseArray, $firebaseObject, movieRef2, restaurantRef, dessertRef, movieAdderSrvc) {

    $scope.theMovies = $firebaseArray(movieRef2);

    $scope.submitMovie = function (movie) {
        $scope.theMovies.$add({
            movie: movie
        });
        $scope.movie = "";
    };

    $scope.theRestaurant = $firebaseArray(restaurantRef);

    $scope.submitRestaurant = function (restaurant) {
        $scope.theRestaurant.$add({
            restaurant: restaurant
        });
        $scope.restaurant = "";
    };

    $scope.theDessert = $firebaseArray(dessertRef);

    $scope.submitDessert = function (dessert) {
        $scope.theDessert.$add({
            dessert: dessert
        });
        $scope.dessert = "";
    };



});
