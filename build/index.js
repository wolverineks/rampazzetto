'use strict';

var RNumber = function RNumber (number) {
  if (typeof number === 'object' && number !== null && number.type === 'RNumber') {
    return number
  }
  if (typeof number !== 'number') {
    throw new TypeError('Not a valid parameter')
  }
  this.value = number;

  return Object.freeze(this)
};

var prototypeAccessors = { type: {} };

RNumber.isRNumber = function isRNumber (candidate) {
  var isRNumber = (
    typeof candidate === 'object' &&
    candidate !== null &&
    candidate.type === 'RNumber'
  );

  return isRNumber
};

prototypeAccessors.type.get = function () {
  return 'RNumber'
};

RNumber.prototype.add = function add (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = rnumber.value + this.value;

  return new RNumber(result)
};

RNumber.prototype.subtract = function subtract (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = this.value - rnumber.value;

  return new RNumber(result)
};

RNumber.prototype.sum = function sum (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = rnumber.value + this.value;

  return new RNumber(result)
};

RNumber.prototype.diff = function diff (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = rnumber.value - this.value;

  return new RNumber(result)
};

RNumber.prototype.multiply = function multiply (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = this.value * rnumber.value;

  return new RNumber(result)
};

RNumber.prototype.divide = function divide (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = this.value / rnumber.value;

  return new RNumber(result)
};

Object.defineProperties( RNumber.prototype, prototypeAccessors );

var RArray = function RArray () {
  var elements = [], len = arguments.length;
  while ( len-- ) elements[ len ] = arguments[ len ];

  var convertedElements = elements.map(function (element) {
    return new RNumber(element)
  });
  this.value = convertedElements;

  return Object.freeze(this)
};

var prototypeAccessors$1 = { type: {},length: {} };

RArray.isRArray = function isRArray (candidate) {
  var isRArray = (
    typeof candidate === 'object' &&
    candidate !== null &&
    candidate.type === 'RArray'
  );

  return isRArray
};

prototypeAccessors$1.type.get = function () {
  return 'RArray'
};

prototypeAccessors$1.length.get = function () {
  var result = new RNumber(this.value.length);

  return result
};

RArray.prototype.concat = function concat (rarray) {
  if (rarray.type !== 'RArray') {
    throw new TypeError('Not a valid parameter for RArray #concat()')
  }

  return new (Function.prototype.bind.apply( RArray, [ null ].concat( this.value, rarray.value) ))
};

Object.defineProperties( RArray.prototype, prototypeAccessors$1 );

var index = {
  RNumber: RNumber,
  RArray: RArray
};

module.exports = index;
//# sourceMappingURL=index.js.map
