angular.module('flagMatchApp')
  .factory('Players', function ($firebaseObject, FirebaseUrl){
    var playersRef = new Firebase(FirebaseUrl+'players/');

    return playersRef;
  })

  