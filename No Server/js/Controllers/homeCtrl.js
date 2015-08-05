app.controller('homeCtrl', function($scope, homeSrvc) {

  $scope.movieShow = false;
  $scope.restaurantShow = false;
  $scope.dessertShow = false;


  $scope.getRandomMovie = function() {
    homeSrvc.getMovies().then(function(response) {
      $scope.moviesArray = response;
      var randomNumber = Math.floor(Math.random() * $scope.moviesArray.length);
      $scope.movie = $scope.moviesArray[randomNumber];
      $scope.movieShow = true;
      // console.log(movie);
    })
  }();

  $scope.getRandomRestaurant = function() {
    homeSrvc.getRestaurant().then(function(response) {
      $scope.restaurantsArray = response;
      var randomNumber = Math.floor(Math.random() * $scope.restaurantsArray.length);
      $scope.restaurant = $scope.restaurantsArray[randomNumber];
      $scope.restaurantShow = true;
      // console.log(restaurant);
    })
  }();

  $scope.getRandomDessert = function() {
    homeSrvc.getDessert().then(function(response) {
      $scope.dessertsArray = response;
      var randomNumber = Math.floor(Math.random() * $scope.dessertsArray.length);
      $scope.dessert = $scope.dessertsArray[randomNumber];
      $scope.dessertShow = true;
      // console.log(dessert);
    })
  }();





})