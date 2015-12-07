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
.run(["$rootScope", "$location", function($rootScope, $location) {
$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
  if (error === "AUTH_REQUIRED") {
    $state.go("home");
  }
  });
}])
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
      templateUrl: 'games/memory.html',
      resolve: {
        "currentAuth": ["Auth", function (Auth) {
          return Auth.$requireAuth();
        }]
      }
    })
  $urlRouterProvider.otherwise('/');
  })

.constant('FirebaseUrl', 'https://concentration-flags.firebaseio.com/');

