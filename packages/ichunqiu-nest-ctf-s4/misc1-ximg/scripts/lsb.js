const _ = require('lodash')
const pngjs = require('pngjs')
const getStdin = require('get-stdin')

;(async () => {
  const raw = await getStdin.buffer()
  const rgba = pngjs.PNG.sync.read(raw).data

  let bits = []
  rgba.forEach((byte, i) => {
    if (i % 4 === 3) {
      // skip alpha
      return
    }
    // take the lowest bit
    bits.push(byte.toString(2).slice(-1))
  })

  // convert bits to buffer
  const hex = _.range(0, bits.length, 8).map((v) => {
    return parseInt(_.range(8).map((i) => bits[v+i]).join(''), 2).toString(16)
  }).join('')
  const extracted = Buffer.from(hex, 'hex')

  process.stdout.write(extracted)
})()
