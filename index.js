const express = require('express')
const app = express()
const port = 3000
const { spawn } = require('child_process')

app.get('/', (req, res) => {
  console.log('request received')
  const child = spawn('ls', ['-a'])
    child.stdout.on('data', (data) => {
        console.log(data)
        res.send(data)
    })
    child.stderr.on('data', (data) => {
        console.log(data)
        res.send(data)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
