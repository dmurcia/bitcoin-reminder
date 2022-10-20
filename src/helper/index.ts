import { BTC } from '../interface'

export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0

/**
 * Create a plain structure of an array
 * @param data
 * @returns plain array
 */
export const createArray = (data: Array<BTC>): Array<number> => data.map((obj) => obj['last_trade_price'])

/**
 * @param data plain array of numbers
 * @returns the median of the numbers
 */
export const getMedian = (data: Array<number>): number => {
  const sorted = data.sort((a, b) => a - b)
  const sortedleft = sorted.length / 2
  const nSplice = sortedleft % 1 === 0 ? sortedleft - 1 : Math.floor(sortedleft)
  let result = 0
  sorted.splice(0, nSplice)
  sorted.splice(-nSplice, sorted.length)

  if (sorted.length === 2) {
    result = sorted[0] + sorted[1]
  } else {
    result = sorted[0]
  }
  return result
}
