export class RNumber {
  constructor (number) {
    if (typeof number !== 'number') {
      throw new TypeError('Not a valid parameter')
    }
    this.value = number
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

export class RArray {
  constructor (...elements) {
    const isValid = elements.every((element) => {
      return (element.type === 'RNumber')
    })
    if (!isValid) {
      throw new TypeError('Not valid parameter for RArray #constructor()')
    }
    this.value = elements
  }

  get type () {
    return 'RArray'
  }

  get length () {
    const result = new RNumber(this.value.length)

    return result
  }

  concat (rarray) {
    if (rarray.type !== 'RArray') throw new TypeError('Not a valid parameter for RArray #concat()')
    const result = (this.value).concat(rarray.value)

    return new RArray(...result)
  }
}
