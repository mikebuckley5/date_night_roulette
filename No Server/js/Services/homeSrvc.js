app.service('homeSrvc', function ($http, $q) {

//Gets movies object stored in firebase.
    this.getMovies = function () {
        var deffered = $q.defer();
        $http({
            method: 'GET',
            url: 'https://date-night-roulette.firebaseio.com/movieadder.json'
        }).then(function (response) {
            var rawData = response.data;
            var data = [];
            for (var key in rawData) {
                data.push(rawData[key].movie);
            };
            deffered.resolve(data);
        });
        return deffered.promise;
    };

//Gets restaurant objects stored in firebase.
    this.getRestaurant = function () {
        var deffered = $q.defer();
        $http({
            method: 'GET',
            url: 'https://date-night-roulette.firebaseio.com/restaurantadder.json'
        }).then(function (response) {
            var rawData = response.data;
            var data = [];
            for (var key in rawData) {
                data.push(rawData[key].restaurant);
            };
            deffered.resolve(data);
        });
        return deffered.promise;
    };

//Gets dessert places objects stored in firebase.
    this.getDessert = function () {
        var deffered = $q.defer();
        $http({
            method: 'GET',
            url: 'https://date-night-roulette.firebaseio.com/dessertadder.json'
        }).then(function (response) {
            var rawData = response.data;
            var data = [];
            for (var key in rawData) {
                data.push(rawData[key].dessert)
            };
            deffered.resolve(data);
        });
        return deffered.promise;
    };
});
