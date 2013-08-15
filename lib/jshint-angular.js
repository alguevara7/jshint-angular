/*
 * jshint-angular
 * https://github.com/alexguev/jshint-angular
 *
 * Copyright (c) 2013 Alexei Guevara
 * Licensed under the MIT license.
 */

'use strict';

function filter(guard, fn) {
  return function (event) {
    if (guard(event)) {
      fn(event);
    }
  }
}

function isControllerDeclaration(event) {

}

function processControllerDeclaration(event) {

}

module.exports = function jshintAngularModule(linter) {
  linter.on('Punctuator', console.log);

  linter.on('Identifier', filter(isControllerDeclaration, processControllerDeclaration));

  linter.on('String', console.log);
};
