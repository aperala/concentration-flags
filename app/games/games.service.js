angular.module('flagMatchApp')
  .factory('Countries', function ($resource) {
    return $resource('countries/:countryId.json', {}, {
      query: {method: 'GET', params:{countryId: 'countries'}, isArray:true}
    });
  });