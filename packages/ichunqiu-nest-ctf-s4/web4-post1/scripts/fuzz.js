const _ = require('lodash')
const got = require('got')

;(async () => {
  const request = (value) => got.post('http://120.55.43.255:20133/', {
    form: {
      a: Buffer.from(value + 'cat'),
    },
  })
  try {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()-=_+[]{};\'\\:"|,./<>?'.split('')
    chars.forEach(async (c) => {
      let response = await request(c)
      console.log(response.body)
    })
    // let response = await got.post('http://120.55.43.255:20133/', {
    //   form: {
    //     a: 'filter',
    //   },
    // })
    // console.log(response.body)
  } catch (error) {
    // console.log(error.response.body)
    console.log(error)
  }
})()
