const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// routers
const apiRouter = require('./routes')

const app = express()

// External middlewares
app.use(cors())
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

// Enable trust proxy
app.enable('trust proxy')

app.use('/api', apiRouter)

module.exports = app
