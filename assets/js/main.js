;(function(){

  var doodleScript = angular.module('DoodleScript', ['ngRoute'], function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'main.html',
    })

    .when('/cats', {
      templateUrl: 'cats.html',
    })

    .otherwise('/', {
      templateUrl: 'main.html',
    })

  }) // END .when routing
})(); //END IIFE
