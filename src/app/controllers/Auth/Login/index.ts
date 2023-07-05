import { type Request, type Response } from 'express'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import schemaFormLogin from '../../../models/validation/formLogin'
import forceReturnType from '../../../utils/forceReturnType'
import constants from './constants'
import { type IBodyRequest, type IResponseSend } from './types'

const login = async (req: Request, res: Response): Promise<void> => {
  const { name, password }: IBodyRequest = req.body

  const { error } = schemaFormLogin({ name, password })

  const { NAME_ADMIN, PASSWORD_ADMIN, TOKEN_AUTHENTICATION, TOKEN_SECRET } =
    process.env

  if (error !== undefined) {
    res.status(400).send(
      forceReturnType<IResponseSend>({
        message: error.message,
      })
    )
    return
  }

  if (name !== NAME_ADMIN) {
    res.status(401).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_NAME_OUR_PASSWORD_INCORRECT,
      })
    )
    return
  }

  const passAndUserMatch = bcrypt.compareSync(password, PASSWORD_ADMIN ?? '')

  if (!passAndUserMatch) {
    res.status(401).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_NAME_OUR_PASSWORD_INCORRECT,
      })
    )
    return
  }
  try {
    const token = jwt.sign(
      {
        adminName: name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      TOKEN_SECRET ?? ''
    )
    res.cookie(TOKEN_AUTHENTICATION, token, {
      secure: true,
      httpOnly: true,
    })
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_SUCCESS_LOGIN,
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_LOGIN,
      })
    )
  }
}

export default login
