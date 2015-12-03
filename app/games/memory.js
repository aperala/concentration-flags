'use strict';

var memoryGame = angular.module('memoryGame', ['flagMatchApp', 'underscore', 'ngAnimate']);
  
memoryGame.controller('MemoryGameCtrl', ['$scope', 'Countries', '_',
  function ($scope, Countries, _) {
    Countries.query(function (data) {
      $scope.random_countries = _.sample(data, 12);
      $scope.match_countries = _.shuffle($scope.random_countries);
    });

  }

  ]); //end controller


memoryGame.directive("flipReveal", function() {
  return {
    restrict: 'E',
    // replace: true,
    templateUrl: './games/template.html',
    scope: {
      name: '=',
      url: '=',
      flip: '='
    }
  }
})