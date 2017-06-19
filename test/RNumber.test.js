import { expect } from 'chai'
import { describe, it } from 'mocha'
import rampazzetto from '../src/index.js'
const { RNumber } = rampazzetto

describe('RNumber', () => {
  describe('new', () => {
    describe('with valid parameter', () => {
      it('should not throw a TypeError if parameter is a number', () => {
        const actual = () => {
          new RNumber(1) // eslint-disable-line no-new
        }
        expect(actual).to.not.throw(TypeError)
      })

      it('should not throw a TypeError if parameter is an RNumber', () => {
        const one = new RNumber(1)
        const actual = () => {
          new RNumber(one) // eslint-disable-line no-new
        }
        expect(actual).to.not.throw(TypeError)
      })
    })

    describe('with invalid parameters', () => {
      it('should throw a TypeError if parameter is undefined', () => {
        const actual = () => {
          new RNumber(undefined) // eslint-disable-line no-new
        }
        expect(actual).to.throw(TypeError)
      })

      it('should throw a TypeError if parameter is a string', () => {
        const actual = () => {
          new RNumber('1') // eslint-disable-line no-new
        }
        expect(actual).to.throw(TypeError)
      })

      it('should throw a TypeError if parameter is an array', () => {
        const actual = () => {
          new RNumber([1, 2, 3]) // eslint-disable-line no-new
        }
        expect(actual).to.throw(TypeError)
      })

      it('should throw a TypeError if parameter is a boolean', () => {
        const actual = () => {
          new RNumber(true) // eslint-disable-line no-new
        }
        expect(actual).to.throw(TypeError)
      })

      it('should throw a TypeError if parameter is an object', () => {
        const actual = () => {
          new RNumber({a: 1, b: 2}) // eslint-disable-line no-new
        }
        expect(actual).to.throw(TypeError)
      })

      it('should throw a TypeError if parameter is null', () => {
        const actual = () => {
          new RNumber(null) // eslint-disable-line no-new
        }
        expect(actual).to.throw(TypeError)
      })
    })
  })

  describe('isRNumber', () => {
    it('should return true when given an RNumber', () => {
      const rnumber = new RNumber(1)
      const expected = true
      const actual = RNumber.isRNumber(rnumber)

      expect(actual).to.equal(expected)
    })

    it('should return false when given something other than an RNumber', () => {
      const number = 1
      const expected = false
      const actual = RNumber.isRNumber(number)

      expect(actual).to.equal(expected)
    })
  })

  describe('type', () => {
    it('should return the corresponding rType', () => {
      const one = new RNumber(1)

      const expected = 'RNumber'
      const actual = one.type

      expect(actual).to.equal(expected)
    })
  })

  describe('value', () => {
    it('should return the wrapped value', () => {
      const one = new RNumber(1)

      const expected = 1
      const actual = one.value

      expect(actual).to.equal(expected)
    })

    it('should throw an error if mutation is attempted', () => {
      const one = new RNumber(1)

      const actual = () => {
        one.value = 2
      }
      expect(actual).to.throw(TypeError)
    })
  })

  describe('add()', () => {
    it('should return a new RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 'RNumber'
      const actual = one.add(two).type

      expect(actual).to.equal(expected)
    })

    it('should add the values of the two RNumbers', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 3
      const actual = one.add(two).value

      expect(actual).to.equal(expected)
    })
  })

  describe('subtract()', () => {
    it('should return a new RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 'RNumber'
      const actual = one.subtract(two).type

      expect(actual).to.equal(expected)
    })

    it('should return the result of subtracting the second RNumber from the first RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = -1
      const actual = one.subtract(two).value

      expect(actual).to.equal(expected)
    })

    it('should return the result of subtracting the second RNumber from the first RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 1
      const actual = two.subtract(one).value

      expect(actual).to.equal(expected)
    })
  })

  describe('sum()', () => {
    it('should return a new RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 'RNumber'
      const actual = one.sum(two).type

      expect(actual).to.equal(expected)
    })

    it('should sum the values of the two RNumbers', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 3
      const actual = one.sum(two).value

      expect(actual).to.equal(expected)
    })
  })

  describe('diff()', () => {
    it('should return a new RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 'RNumber'
      const actual = one.diff(two).type

      expect(actual).to.equal(expected)
    })

    it('should return the diff from the first RNumber to the second RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = 1
      const actual = one.diff(two).value

      expect(actual).to.equal(expected)
    })

    it('should return the diff from the first RNumber to the second RNumber', () => {
      const one = new RNumber(1)
      const two = new RNumber(2)

      const expected = -1
      const actual = two.diff(one).value

      expect(actual).to.equal(expected)
    })
  })

  describe('multiply()', () => {
    it('should return a new RNumber', () => {
      const two = new RNumber(2)

      const expected = 'RNumber'
      const actual = two.multiply(two).type

      expect(actual).to.equal(expected)
    })

    it('should return the product of the first RNumber and the second RNumber', () => {
      const two = new RNumber(2)

      const expected = 4
      const actual = two.multiply(two).value

      expect(actual).to.equal(expected)
    })

    it('should return the product of the first RNumber and the second RNumber', () => {
      const two = new RNumber(2)
      const zero = new RNumber(0)

      const expected = 0
      const actual = two.multiply(zero).value

      expect(actual).to.equal(expected)
    })
  })

  describe('divide()', () => {
    it('should return a new RNumber', () => {
      const two = new RNumber(2)

      const expected = 'RNumber'
      const actual = two.divide(two).type

      expect(actual).to.equal(expected)
    })

    it('should return the quotient of the first RNumber and the second RNumber', () => {
      const two = new RNumber(2)

      const expected = 1
      const actual = two.divide(two).value

      expect(actual).to.equal(expected)
    })

    it('should return the product of the first RNumber and the second RNumber', () => {
      const two = new RNumber(2)
      const zero = new RNumber(0)

      const expected = Infinity
      const actual = two.divide(zero).value

      expect(actual).to.equal(expected)
    })
  })
})
