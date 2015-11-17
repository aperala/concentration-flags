'use strict';

// Declare app level module which depends on views, and components
var concentrationFlags = angular.module('concentrationFlags', [
  'ngRoute',
  'concentrationFlags.version',
  'userApp',
  'firebase'
]);

concentrationFlags.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/welcome', {
        templateUrl: 'partials/welcome.html',
        controller: 'UserCtrl'
      }).
    otherwise({
      redirectTo: '/welcome'
    });
}]);
