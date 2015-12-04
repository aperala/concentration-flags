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


    var setCurrentPlayer = function(player){      
      $rootScope.currentPlayer = player;
    }

    authCtrl.login = function() {
      $scope.authData = null;
      $scope.error = null;

      Auth.authAnonymously(function (error, authData) {

        createPlayer(authData.uid, authCtrl.players.name);
        // .$onAuth(setCurrentPlayer(data));
        $state.go('memory');
      }), (function (error){
        console.log("There was an error", error);
      });
    };

  });