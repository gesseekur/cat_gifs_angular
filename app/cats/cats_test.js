'use strict';

describe('myApp.cats', function() {

  beforeEach(module('myApp.cats'));

  describe('CatsCtrl', function(){

    it('should define CatsCtrl', inject(function($controller) {
      var CatsCtrl = $controller('CatsCtrl');
      expect(CatsCtrl).toBeDefined();
    }));

  });
});
