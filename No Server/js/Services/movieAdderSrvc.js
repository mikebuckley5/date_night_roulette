app.service('movieAdderSrvc', function(fb) {

  this.getMovieList = function() {
    return new Firebase(fb.url + '/movieadder');
  }

  this.getRestaurant = function() {
    return new Firebase(fb.url + '/restaurantadder');
  }

  this.getDessert = function() {
    return new Firebase(fb.url + '/dessertadder');
  }




})
