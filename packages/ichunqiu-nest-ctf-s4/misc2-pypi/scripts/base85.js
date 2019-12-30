const getStdin = require('get-stdin')
const base85 = require('ascii85')

;(async () => {
  let encoded = await getStdin()
  let decoded = base85.decode(encoded).toString()
  console.log(decoded)
})()
