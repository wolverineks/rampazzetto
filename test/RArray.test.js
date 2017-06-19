import { expect } from 'chai'
import { describe, it } from 'mocha'
import rampazzetto from '../src/index.js'
const { RNumber, RArray } = rampazzetto

describe('RArray', function () {
  const one = new RNumber(1)
  const two = new RNumber(2)
  const three = new RNumber(3)

  describe('new', () => {
    describe('with all R-type parameters', () => {
      it('should not throw a TypeError if all parameters are RNumbers', () => {
        const actual = () => {
          new RArray(one, two, three) // eslint-disable-line no-new
        }
        expect(actual).to.not.throw(TypeError)
      })

      // TODO: RStrings
      // TODO: RArrays
    })

    describe('with non R-type parameters', () => {
      it('should not throw a TypeError if some/all parameters are not RNumbers', () => {
        const actual = () => {
          new RArray(one, 2, 3) // eslint-disable-line no-new
        }
        expect(actual).to.not.throw(TypeError)
      })

      it('should convert numbers to RNumbers', () => {
        const a1 = new RArray(one, 2, 3)
        const expected = true
        const actual = a1.value.every(element => {
          return RNumber.isRNumber(element)
        })

        expect(actual).to.equal(expected)
      })
    })
  })

  describe('isRArray()', () => {
    it('should return true when given an RArray', () => {
      const rarray = new RArray(one, 2, 3)
      const expected = true
      const actual = RArray.isRArray(rarray)

      expect(actual).to.equal(expected)
    })

    it('should return false when given something other than an RArray', () => {
      const array = [1, 2, 3]
      const expected = false
      const actual = RArray.isRArray(array)

      expect(actual).to.equal(expected)
    })
  })

  describe('type', () => {
    it('should return the corresponding rType', () => {
      const a1 = new RArray(one, two, three)

      const expected = 'RArray'
      const actual = a1.type

      expect(actual).to.equal(expected)
    })
  })

  describe('value', () => {
    it('should return the wrapped value', () => {
      const a1 = new RArray(one, two, three)

      const expected = true
      const actual = Array.isArray(a1.value)

      expect(actual).to.equal(expected)
    })

    it('should throw an error if mutation is attempted', () => {
      const a1 = new RArray(one, two, three)

      const actual = () => {
        a1.value = 123
      }
      expect(actual).to.throw(TypeError)
    })

    it('should throw an error if mutation is attempted', () => {
      const a1 = new RArray(one, two, three)

      const actual = () => {
        a1.value = 123
      }
      expect(actual).to.throw(TypeError)
    })
  })

  describe('length', () => {
    it('should return an RNumber', () => {
      const a1 = new RArray(one, two, three)

      const expected = 'RNumber'
      const actual = a1.length.type

      expect(actual).to.equal(expected)
    })

    it('should return the length of the wrapped value', () => {
      const a1 = new RArray(one, two, three)

      const expected = 3
      const actual = a1.length.value

      expect(actual).to.equal(expected)
    })
  })

  describe('concat()', () => {
    it('should return an RArray', () => {
      const a1 = new RArray(one, two, three)
      const a2 = new RArray(one, two, three)
      const a3 = a1.concat(a2)

      const expected = 'RArray'
      const actual = a3.type

      expect(actual).to.equal(expected)
    })

    it('should combine 2 RArrays', () => {
      const a1 = new RArray(one, two, three)
      const a2 = new RArray(one, two, three)
      const a3 = a1.concat(a2)

      const expected = 6
      const actual = a3.length.value

      expect(actual).to.equal(expected)
    })
  })
})
