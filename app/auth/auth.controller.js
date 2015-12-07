'use strict';

angular.module('flagMatchApp')
  .controller('AuthCtrl', function ($state, Auth, $scope, Players, $rootScope, $firebaseObject){
    var authCtrl = this;
  
    var createPlayer = function(id, name) {
      var players = Players;
      players.child(id).set({
      displayName: name,
      turns: 0
    });

    }

    $scope.login = function() {
      $scope.authData = null;
      $scope.error = null;

      Auth.$authAnonymously().then(function (authData) {
        $rootScope.authData = authData;
        createPlayer(authData.uid, authCtrl.players.name);
        console.log($rootScope.authData);
        $state.go('memory');        
      }), (function (error){
        $scope.error = error;
        console.log("There was an error", error);
      });
     
    };

  });
