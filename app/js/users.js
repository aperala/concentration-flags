'use strict';

var userApp = angular.module('userApp', ['firebase']);

userApp.factory("users", ["$firebaseArray",
  function($firebaseArray) {
      // create a reference to the database where we will store our data
      var randomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://concentration-flags.firebaseio.com/users/" + randomId);

      // return it as a synchronized object
      return $firebaseArray(ref);
  }
]);

// User controller
userApp.controller('UserCtrl', ["$scope", "users", "$window",
  function($scope, users, $window){

    $scope.users = users;

  $scope.addUser = function() {
    $scope.user = "User" + Math.round(Math.random() * 100);

    $scope.uname = $scope.username;

    $scope.users.$add({
      id: $scope.user,
      username: $scope.uname
    });
    $window.location = '#/memory'
    $scope.username = "";
  };

}]);