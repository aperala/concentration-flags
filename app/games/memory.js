'use strict';

var memoryGame = angular.module('memoryGame', ['flagMatchApp', 'underscore', 'ngAnimate']);


memoryGame.controller('MemoryGameCtrl', ['$scope', '$rootScope', '$firebaseObject', 'Countries', '_', 'Players',
  function ($scope, $rootScope, $firebaseObject, Countries, _, Players) {
    var memoryGameCtrl = this;
    $scope.playerId = $rootScope.authData.uid;
    $scope.player = $firebaseObject(Players.child($scope.playerId));

    memoryGameCtrl.getProfile = Players.getProfile;

    Countries.query(function (data) {
      $scope.random_countries = _.sample(data, 12);
      $scope.match_countries = _.shuffle($scope.random_countries);
    });


  }]); //end controller


memoryGame.directive("flipReveal", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './games/cards.html',
    scope: {
      name: '=',
      url: '=',
      flip: '='
    }
  }
})

