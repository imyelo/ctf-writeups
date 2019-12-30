const got = require('got')

const HOST = 'http://120.55.43.255:22712'
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`-=[];\'\,./~_+{}:"|<>? \n\r\t'.split('')

const request = (char) => got.post(`${HOST}/`, {
  form: {
    cmd: `cut${char}`,
  },
})

;(async () => {
  for (let i = 0; i < CHARS.length; i++) {
    let char = CHARS[i]
    let response = await request(char)
    console.log(`${char} code(${char.charCodeAt(0)})`)
    console.log(response.body)
  }
})()
