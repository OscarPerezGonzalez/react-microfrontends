/* eslint-disable global-require */
require('dotenv').config()
const { join } = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')

const useragent = require('express-useragent')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../config/webpack.dev')

const port = process.env.SERVER_PORT

const compiler = webpack(webpackConfig)
const serverConfig = { port, hot: true }

class Server {
  constructor() {
    this.app = express()
    this.port = port

    // Middlewares
    this.middlewares()
  }

  middlewares() {
    this.app.use(webpackDevMiddleware(compiler, serverConfig))
    this.app.use(webpackHotMiddleware(compiler))
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    )
    this.app.use(cookieParser())
    this.app.use(express.json())
    this.app.use(useragent.express())

    this.app.use(express.static('/'))
  }

  get() {
    this.app.get('*', (_req, res, next) => {
      compiler.outputFileSystem.readFile(
        join(__dirname, '../../', 'build', 'index.html'),
        // eslint-disable-next-line consistent-return
        (err, result) => {
          if (err) {
            return next(err)
          }
          res.set('content-type', 'text/html')
          res.send(result)
          res.end()
        }
      )
    })
  }

  listen() {
    this.app.listen(this.port, err => {
      if (!err) {
        console.log(`App Dev listening on port ${this.port}`)
      }
    })
  }
}

module.exports = Server
