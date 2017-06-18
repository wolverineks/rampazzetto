import { expect } from 'chai'
import { describe, it } from 'mocha'
import { RNumber, RArray } from '../src/index.js'

describe('RNumber', () => {
  const one = new RNumber(1)
  const two = new RNumber(2)
  // const nOne = new RNumber(-1)
  // const nTwo = new RNumber(-2)
  const zero = new RNumber(0)

  describe('new', () => {
    it('should throw a TypeError if parameter is not a number', () => {
      const actual = () => { new RNumber('1') } // eslint-disable-line no-new
      expect(actual).to.throw(TypeError)
    })
  })

  describe('type', () => {
    it('should return the corresponding rType', () => {
      const expected = 'RNumber'
      const actual = one.type

      expect(actual).to.equal(expected)
    })
  })

  describe('value', () => {
    it('should return the wrapped value', () => {
      const expected = 1
      const actual = one.value

      expect(actual).to.equal(expected)
    })
  })

  describe('add()', () => {
    it('should return a new RNumber', () => {
      const expected = 'RNumber'
      const actual = (one.add(two)).type

      expect(actual).to.equal(expected)
    })

    it('should add the values of the two RNumbers', () => {
      const expected = 3
      const actual = (one.add(two)).value

      expect(actual).to.equal(expected)
    })
  })

  describe('subtract()', () => {
    it('should return a new RNumber', () => {
      const expected = 'RNumber'
      const actual = (one.subtract(two)).type

      expect(actual).to.equal(expected)
    })

    it('should return the result of subtracting the second RNumber from the first RNumber', () => {
      const expected = -1
      const actual = (one.subtract(two)).value

      expect(actual).to.equal(expected)
    })

    it('should return the result of subtracting the second RNumber from the first RNumber', () => {
      const expected = 1
      const actual = (two.subtract(one)).value

      expect(actual).to.equal(expected)
    })
  })

  describe('sum()', () => {
    it('should return a new RNumber', () => {
      const expected = 'RNumber'
      const actual = (one.sum(two)).type

      expect(actual).to.equal(expected)
    })

    it('should sum the values of the two RNumbers', () => {
      const expected = 3
      const actual = (one.sum(two)).value

      expect(actual).to.equal(expected)
    })
  })

  describe('diff()', () => {
    it('should return a new RNumber', () => {
      const expected = 'RNumber'
      const actual = (one.diff(two)).type

      expect(actual).to.equal(expected)
    })

    it('should return the diff from the first RNumber to the second RNumber', () => {
      const expected = 1
      const actual = (one.diff(two)).value

      expect(actual).to.equal(expected)
    })

    it('should return the diff from the first RNumber to the second RNumber', () => {
      const expected = -1
      const actual = (two.diff(one)).value

      expect(actual).to.equal(expected)
    })
  })

  describe('multiply()', () => {
    it('should return a new RNumber', () => {
      const expected = 'RNumber'
      const actual = (two.multiply(two)).type

      expect(actual).to.equal(expected)
    })

    it('should return the product of the first RNumber and the second RNumber', () => {
      const expected = 4
      const actual = (two.multiply(two)).value

      expect(actual).to.equal(expected)
    })

    it('should return the product of the first RNumber and the second RNumber', () => {
      const expected = 0
      const actual = (two.multiply(zero)).value

      expect(actual).to.equal(expected)
    })
  })

  describe('divide()', () => {
    it('should return a new RNumber', () => {
      const expected = 'RNumber'
      const actual = (two.divide(two)).type

      expect(actual).to.equal(expected)
    })

    it('should return the quotient of the first RNumber and the second RNumber', () => {
      const expected = 1
      const actual = (two.divide(two)).value

      expect(actual).to.equal(expected)
    })

    it('should return the product of the first RNumber and the second RNumber', () => {
      const expected = Infinity
      const actual = (two.divide(zero)).value

      expect(actual).to.equal(expected)
    })
  })
})

describe('RArray', function () {
  const one = new RNumber(1)
  const two = new RNumber(2)
  const three = new RNumber(3)
  const a1 = new RArray(one, two, three)
  const a2 = new RArray(one, two, three)

  describe('new', () => {
    it('should throw a TypeError if any parameter is not an RNumber', () => {
      const actual = () => { new RArray(one, two, 3) } // eslint-disable-line no-new
      expect(actual).to.throw(TypeError)
    })
  })

  describe('type', () => {
    it('should return the corresponding rType', () => {
      const expected = 'RArray'
      const actual = a1.type

      expect(actual).to.equal(expected)
    })
  })

  describe('value', () => {
    it('should return the wrapped value', () => {
      const expected = true
      const actual = Array.isArray(a1.value)

      expect(actual).to.equal(expected)
    })
  })

  describe('length', () => {
    it('should return an RNumber', () => {
      const expected = 'RNumber'
      const actual = a1.length.type

      expect(actual).to.equal(expected)
    })

    it('should return the length of the wrapped value', () => {
      const expected = 3
      const actual = a1.length.value

      expect(actual).to.equal(expected)
    })
  })

  describe('concat()', () => {
    const a3 = a1.concat(a2)

    it('should return an RArray', () => {
      const expected = 'RArray'
      const actual = a3.type

      expect(actual).to.equal(expected)
    })

    it('should combine 2 RArrays', () => {
      const expected = 6
      const actual = a3.length.value

      expect(actual).to.equal(expected)
    })
  })
})
