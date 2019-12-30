const got = require('got')

const HOST = 'http://120.55.43.255:27189/'

const dump = async (seed, random, variable) => {
  let response = await got(`${HOST}/index.php`, {
    searchParams: {
      hello: variable,
      seed: seed,
      key: random,
    },
  })
  return response.body
}

;(async () => {
  let [seed, random, variable] = process.argv.slice(2)
  console.log(await dump(seed, random, variable))
})()
