import express from 'express'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import env from '../../constants/env'
import routers from '../../routers'
import constants from './constants'

const app = express()

app.use(cookieParser())

app.use(
  cors({
    origin: env.HOST_NAME_FRONT().url ?? undefined,
    credentials: true,
  })
)

app.use(bodyParser.json({ limit: '9999999999mb' }))
app.use(bodyParser.urlencoded({ limit: '9999999999mb', extended: true }))

app.use(constants.BASE_ROUTES_API, routers)

app.listen(env.PORT, () => {
  console.log(`Server ${env.MODE} running on port ${env.PORT}.`)
})
