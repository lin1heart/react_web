const logWithColor = (color, prefix, ...args) => {
  console.log('%c' + prefix, 'color:' + color, ...args)
}

const success = (...args) => logWithColor('green', '__success__', ...args)
const fail = (...args) => logWithColor('red', '__fail__', ...args)
const log = (...args) => logWithColor('blue', '__log__', ...args)
const custom = ({ color, prefix, show = true }, ...args) =>
  show && logWithColor(color, prefix, ...args)

export default {
  success,
  fail,
  log,
  custom
}
