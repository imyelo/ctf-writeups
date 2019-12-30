const got = require('got')
const getStdin = require('get-stdin')

const HOST = 'http://120.55.43.255:20133'

const request = (command) => got.post(`${HOST}/`, {
  form: {
    a: command,
  },
})

;(async () => {
  const dict = await getStdin() || process.argv.slice(2)[0]
  const words = dict.split('\n').filter(Boolean)

  for (let i = 0; i < words.length; i++) {
    let command = words[i]
    let response = await request(command)
    console.log(command)
    console.log(response.body)
  }
})()
