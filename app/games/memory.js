'use strict';

var memoryGame = angular.module('memoryGame', ['flagMatchApp', 'underscore']);
  
memoryGame.controller('MemoryGameCtrl', ['$scope', 'Countries', '_',
  function ($scope, Countries, _) {
    Countries.query(function (data) {
      $scope.random_countries = _.sample(data, 16);
      $scope.orderProp = 'name';
    });
  }

  ])