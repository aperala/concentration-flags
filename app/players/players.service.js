angular.module('flagMatchApp')
  .factory('Players', function ($firebaseArray, $firebaseObject, FirebaseUrl){
    var playersRef = new Firebase(FirebaseUrl+'players');
    var players = $firebaseArray(playersRef);

    var Players = {};

    return players;
  })

  