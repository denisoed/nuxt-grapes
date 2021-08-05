const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// routers
const apiRouter = require('./routes')

const app = express()

// DB connection
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', err => {
  console.log('Mongoose error:', err)
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected\n')
});

// External middlewares
app.use(cors())
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))

// Enable trust proxy
app.enable('trust proxy')

app.use('/api', apiRouter)

module.exports = app
