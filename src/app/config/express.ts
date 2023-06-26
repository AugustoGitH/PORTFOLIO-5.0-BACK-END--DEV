import express from 'express'
import env from '../constants/env'

const app = express()

app.listen(env.PORT, () => {
  console.log(`Server ${env.MODE} running on port ${env.PORT}.`)
})
