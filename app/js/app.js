'use strict';

var underscore = angular.module('underscore', []);
  underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

angular.module('flagMatchApp', [
  'firebase', 
  'angular-md5',
  'flagMatchApp.version',
  'ui.router',
  'ngResource',
  'underscore'
  ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      controller: "AuthCtrl as authCtrl",
      templateUrl: 'partials/home.html'
    })
    .state('memory', {
      url: '/memory',
      templateUrl: 'partials/memory.html'
    })
  $urlRouterProvider.otherwise('/');
  })

// Declare app level module which depends on views, and components
// var concentrationFlags = angular.module('concentrationFlags', [
//   'ngRoute',
//   'memoryGame',
//   'underscore'
// ]);

.constant('FirebaseUrl', 'https://concentration-flags.firebaseio.com/');

