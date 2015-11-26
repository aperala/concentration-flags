'use strict';

var underscore = angular.module('underscore', []);
  underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

// Declare app level module which depends on views, and components
var concentrationFlags = angular.module('concentrationFlags', [
  'ngRoute',
  'concentrationFlags.version',
  'userApp',
  'memoryGame',
  'concentrationFlagsServices',
  'firebase',
  'underscore'
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
