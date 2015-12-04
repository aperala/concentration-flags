angular.module('flagMatchApp')
  .factory('Players', function ($firebaseArray, $firebaseObject, FirebaseUrl){
    var playersRef = new Firebase(FirebaseUrl+'players');
    var players = $firebaseArray(playersRef);

    var Players = {
      getProfile: function(uid) {
        return $firebaseObject(playersRef.child(uid));
      },
      getName: function(uid) {
        return players.$getRecord(uid).name;
      },
      all: players
    };

    return playersRef;
  })

  