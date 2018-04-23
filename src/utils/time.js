import moment from 'moment'

export const YMDFormat = timestamp => {
  console.log('timestamp is', timestamp)
  const newStamp = Number.parseFloat(timestamp)
  if (moment(newStamp).isValid()) {
    return moment(newStamp).format('hh.mm.ss')
  }
  return '-'
}
