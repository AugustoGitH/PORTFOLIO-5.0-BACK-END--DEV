import Joi, { type ValidationResult } from '@hapi/joi'

import { type IFormLogin } from './types'

const schemaFormLogin = (data: IFormLogin): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().min(10).max(30).required(),
    password: Joi.string()
      .min(10)
      .max(30)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/)
      .required(),
  })
  return schema.validate(data)
}

export default schemaFormLogin
