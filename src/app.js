const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

app.use(morgan('dev'))
app.set('port', process.env.PORT)

module.exports = app
