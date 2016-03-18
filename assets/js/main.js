;(function(){

  var doodleScript = angular.module('DoodleScript', ['ngRoute'], function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'index.html',
    })

    .when('/cats', {
      templateUrl: 'cats.html',
    })

  }) // END .when routing
})(); //END IIFE
