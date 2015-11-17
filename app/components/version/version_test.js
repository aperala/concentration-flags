'use strict';

describe('myApp.version module', function() {
  beforeEach(module('concentrationFlags.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
