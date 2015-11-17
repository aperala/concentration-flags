'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /welcome when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/welcome");
  });


  describe('welcome', function() {

    beforeEach(function() {
      browser.get('index.html#/welcome');
    });


    it('should render welcome when user navigates to /welcome', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Concentration Flags/);
    });

  });



});
