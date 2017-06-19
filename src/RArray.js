import RNumber from './RNumber.js'

export default class RArray {
  constructor (...elements) {
    const convertedElements = elements.map(element => {
      return new RNumber(element)
    })
    this.value = convertedElements

    return Object.freeze(this)
  }

  static isRArray (candidate) {
    const isRArray = (
      typeof candidate === 'object' &&
      candidate !== null &&
      candidate.type === 'RArray'
    )

    return isRArray
  }

  get type () {
    return 'RArray'
  }

  get length () {
    const result = new RNumber(this.value.length)

    return result
  }

  concat (rarray) {
    if (rarray.type !== 'RArray') {
      throw new TypeError('Not a valid parameter for RArray #concat()')
    }

    return new RArray(...this.value, ...rarray.value)
  }
}
