const express = require('express')

const app = express()

app.get('/wait', (req, res) => {
  console.log('Started wait!')

  setTimeout(() => {
    res.send('Done!')
    console.log('Done!')
  }, 10000)
})

const setupGracefulShutdown = (httpServer) => {
  process.on('SIGHUP', () => {
    console.log('SIGHUP happened!')
    httpServer.close(() => {
      console.log('server closed!')
      process.exit(128 + 1)
    })
  })
  process.on('SIGINT', () => {
    console.log('SIGINT happened!')
    httpServer.close(() => {
      console.log('server closed!')
      process.exit(128 + 2)
    })
  })
  process.on('SIGTERM', () => {
    console.log('SIGTERM happened!')
    httpServer.close(() => {
      console.log('server closed!')
      process.exit(128 + 15)
    })
  })
}

const server = app.listen(8000)

setupGracefulShutdown(server)
