app.controller('movieAdderCtrl', function ($scope, $firebaseArray, $firebaseObject, movieRef2, restaurantRef, dessertRef, movieAdderSrvc) {
//Takes reference from resolve and creates new firebase array using reference.
    $scope.theMovies = $firebaseArray(movieRef2);

//Takes the array with reference stored in variable and submits new info for a movie.
    $scope.submitMovie = function (movie) {
        $scope.theMovies.$add({
            movie: movie
        });
        $scope.movie = "";
    };

//Takes reference from resolve and creates new firebase array using reference.
    $scope.theRestaurant = $firebaseArray(restaurantRef);

//Takes the array with reference stored in variable and submits new info for a restaurant.
    $scope.submitRestaurant = function (restaurant) {
        $scope.theRestaurant.$add({
            restaurant: restaurant
        });
        $scope.restaurant = "";
    };

//Takes reference from resolve and creates new firebase array using reference.
    $scope.theDessert = $firebaseArray(dessertRef);

//Takes the array with reference stored in variable and submits new info for a dessert place.
    $scope.submitDessert = function (dessert) {
        $scope.theDessert.$add({
            dessert: dessert
        });
        $scope.dessert = "";
    };



});
