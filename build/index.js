'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var RNumber = function RNumber (number) {
  if (typeof number !== 'number') {
    throw new TypeError('Not a valid parameter')
  }
  this.value = number
}

var prototypeAccessors = { type: {} }

prototypeAccessors.type.get = function () {
  return 'RNumber'
}

RNumber.prototype.add = function add (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = rnumber.value + this.value

  return new RNumber(result)
}

RNumber.prototype.subtract = function subtract (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = this.value - rnumber.value

  return new RNumber(result)
}

RNumber.prototype.sum = function sum (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = rnumber.value + this.value

  return new RNumber(result)
}

RNumber.prototype.diff = function diff (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = rnumber.value - this.value

  return new RNumber(result)
}

RNumber.prototype.multiply = function multiply (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = this.value * rnumber.value

  return new RNumber(result)
}

RNumber.prototype.divide = function divide (rnumber) {
  if (rnumber.type !== 'RNumber') { throw new TypeError('Not a valid parameter') }
  var result = this.value / rnumber.value

  return new RNumber(result)
}

Object.defineProperties(RNumber.prototype, prototypeAccessors)

var RArray = function RArray () {
  var elements = [], len = arguments.length
  while (len--) elements[ len ] = arguments[ len ]

  var isValid = elements.every(function (element) {
    return (element.type === 'RNumber')
  })
  if (!isValid) {
    throw new TypeError('Not valid parameter for RArray #constructor()')
  }
  this.value = elements
}

var prototypeAccessors$1 = { type: {}, length: {} }

prototypeAccessors$1.type.get = function () {
  return 'RArray'
}

prototypeAccessors$1.length.get = function () {
  var result = new RNumber(this.value.length)

  return result
}

RArray.prototype.concat = function concat (rarray) {
  if (rarray.type !== 'RArray') { throw new TypeError('Not a valid parameter for RArray #concat()') }
  var result = (this.value).concat(rarray.value)

  return new (Function.prototype.bind.apply(RArray, [ null ].concat(result)))()
}

Object.defineProperties(RArray.prototype, prototypeAccessors$1)

exports.RNumber = RNumber
exports.RArray = RArray
// # sourceMappingURL=index.js.map
