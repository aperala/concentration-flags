'use strict';

angular.module('flagMatchApp')
  .controller('AuthCtrl', function (Auth, $state, $scope, Players){
    var authCtrl = this;
  
    var createPlayer = function(id, name) {
      var players = Players;
      players.$add({
        uid: id,
        name: name
      });
    }

    authCtrl.login = function() {
      $scope.authData = null;
      $scope.error = null;

      Auth.authAnonymously(function (error, authData) {
        createPlayer(authData.uid, authCtrl.players.name);

        $state.go('memory');
      }), (function (error){
        console.log("There was an error", error);
      });
    };

  });