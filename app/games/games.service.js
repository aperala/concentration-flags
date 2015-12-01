angular.module('flagMatchApp')
  .factory('Countries', function ($resource) {
    return $resource('countries/countries.json');
  });