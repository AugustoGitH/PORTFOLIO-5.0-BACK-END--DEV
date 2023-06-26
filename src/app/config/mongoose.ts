import mongoose from 'mongoose'
import env from '../constants/env'

const { MODE, URL } = env.MONGO_CONNECTION_URL()

mongoose
  .connect(URL ?? '')
  .then(() => console.log(`Database under ${MODE} running.`))
  .catch((error) => console.log(error))
