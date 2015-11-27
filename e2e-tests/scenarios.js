'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('home', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/app/#/');
    });

    it('should render home when user navigates to /', function() {
      expect(element.all(by.css('h1')).first().getText()).
        toMatch(/Flag Match Game/);
    });

  }); //end home

  describe('auth', function() {

    beforeEach(function() {
      browser.get('http://localhost:8000/app/#/');
    });

    it('should get the player name when input', function() {
      var input = element(by.model('authCtrl.players.name'));
      input.sendKeys('Francis');
      expect(input.getAttribute('value')).toBe('Francis');
    });

  }); //end auth



});
