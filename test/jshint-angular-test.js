'use strict';

var jshintAngularModule = require('../lib/jshint-angular.js'),
    JSHINT = require("jshint").JSHINT,
    assert = require('assert');

function jshintRun(jshint, code) {
  jshint.addModule(jshintAngularModule);
  return jshint(code, {}, {});
}


//root (controller suite)
// - array is present
// - array is missing
suite('jshint-angularjs', function(){
  setup(function(){
  });

  suite('minification', function(){
    test('argument missing in array', function(){

      var result = jshintRun(JSHINT, "\
angular.module('foo')\
  .controller('BarCtrl', ['$other', function ($scope) {\
    console.log('hi');\
  }]);");
      console.log(JSHINT.errors);
      assert.ok(result);

    });
  });
});