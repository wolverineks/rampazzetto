export default class RNumber {
  constructor (number) {
    if (typeof number === 'object' && number !== null && number.type === 'RNumber') {
      return number
    }
    if (typeof number !== 'number') {
      throw new TypeError('Not a valid parameter')
    }
    this.value = number

    return Object.freeze(this)
  }

  static isRNumber (candidate) {
    const isRNumber = (
      typeof candidate === 'object' &&
      candidate !== null &&
      candidate.type === 'RNumber'
    )

    return isRNumber
  }

  get type () {
    return 'RNumber'
  }

  add (rnumber) {
    if (rnumber.type !== 'RNumber') throw new TypeError('Not a valid parameter')
    const result = rnumber.value + this.value

    return new RNumber(result)
  }

  subtract (rnumber) {
    if (rnumber.type !== 'RNumber') throw new TypeError('Not a valid parameter')
    const result = this.value - rnumber.value

    return new RNumber(result)
  }

  sum (rnumber) {
    if (rnumber.type !== 'RNumber') throw new TypeError('Not a valid parameter')
    const result = rnumber.value + this.value

    return new RNumber(result)
  }

  diff (rnumber) {
    if (rnumber.type !== 'RNumber') throw new TypeError('Not a valid parameter')
    const result = rnumber.value - this.value

    return new RNumber(result)
  }

  multiply (rnumber) {
    if (rnumber.type !== 'RNumber') throw new TypeError('Not a valid parameter')
    const result = this.value * rnumber.value

    return new RNumber(result)
  }

  divide (rnumber) {
    if (rnumber.type !== 'RNumber') throw new TypeError('Not a valid parameter')
    const result = this.value / rnumber.value

    return new RNumber(result)
  }
}
