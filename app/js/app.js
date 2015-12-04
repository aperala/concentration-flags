'use strict';

var underscore = angular.module('underscore', []);
  underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

angular.module('flagMatchApp', [
  'firebase', 
  'angular-md5',
  'flagMatchApp.version',
  'ui.router',
  'ngResource',
  'ngAnimate',
  'underscore',
  'memoryGame'
  ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      controller: "AuthCtrl as authCtrl",
      templateUrl: 'auth/home.html'
    })
    .state('memory', {
      url: '/memory',
      controller: "MemoryGameCtrl as memoryGameCtrl",
      templateUrl: 'games/memory.html'
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

