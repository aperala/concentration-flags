'use strict';

// Declare app level module which depends on views, and components
var concentrationFlags = angular.module('concentrationFlags', [
  'ngRoute',
  'concentrationFlags.version',
  'userApp',
  'memoryGame',
  'firebase'
]);

concentrationFlags.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/welcome', {
        templateUrl: 'partials/welcome.html',
        controller: 'UserCtrl'
      }).
    when('/memory', {
      templateUrl: 'partials/memory.html',
      controller: 'MemoryGameCtrl'
    }).
    otherwise({
      redirectTo: '/welcome'
    });
}]);
