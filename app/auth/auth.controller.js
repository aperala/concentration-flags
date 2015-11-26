'use strict';

angular.module('flagMatchApp')
  .controller('AuthCtrl', function (Auth, $state, $scope, FirebaseUrl, $firebaseArray){
    var authCtrl = this;
  
    authCtrl.createPlayer = function(id, name) {
      var players = Players;
      players.$add({
        player: id,
        name: name
      });
    }

    authCtrl.login = function() {
      $scope.authData = null;
      $scope.error = null;

      Auth.authAnonymously(function (error, authData) {
        console.log("Successfully logged in", authData.uid);
        var playersRef = new Firebase(FirebaseUrl+'players');
        var players = $firebaseArray(playersRef);
        players.$add({
          player: authData.uid,
          name: authCtrl.players.name
        });


        // createPlayer(authData.uid, authCtrl.players.name);
        $state.go('memory');
      }), (function (error){
        console.log("There was an error", error);
      });
    };



  });