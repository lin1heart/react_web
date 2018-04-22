import numeral from 'numeral'

export const YMDFormat = timestamp => {
  return numeral(timestamp).format('hh:mm:ss')
}
