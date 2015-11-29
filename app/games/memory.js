'use strict';

var memoryGame = angular.module('memoryGame', ['flagMatchApp']);
  
memoryGame.controller('MemoryGameCtrl', ['$scope', 'Countries',

  function ($scope, Countries) {
    var memoryGameCtrl = this;

    $scope.countries = Countries.query();
    $scope.orderProp = 'name';
  }

  ])