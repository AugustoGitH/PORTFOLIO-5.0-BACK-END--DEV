import express from 'express'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import env from '../../constants/env'
import routers from '../../routers'
import constants from './constants'

const app = express()

app.use(cookieParser())

app.use(function (req, res, next) {
  cors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    credentials: true,
    preflightContinue: true,
  })

  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use(bodyParser.json({ limit: '9999999999mb' }))
app.use(bodyParser.urlencoded({ limit: '9999999999mb', extended: true }))

app.use(constants.BASE_ROUTES_API, routers)

app.listen(env.PORT, () => {
  console.log(`Server ${env.MODE} running on port ${env.PORT}.`)
})
