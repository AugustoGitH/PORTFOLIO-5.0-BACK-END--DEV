import { type Request, type Response } from 'express'

import jwt from 'jsonwebtoken'

import forceReturnType from '../../../utils/forceReturnType'
import constants from './constants'
import { type IResponseSend } from './types'

const verifyCredentials = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { TOKEN_AUTHENTICATION, TOKEN_SECRET } = process.env
  const token = req.cookies[TOKEN_AUTHENTICATION ?? '']

  if (token === undefined) {
    res.status(200).send(
      forceReturnType<IResponseSend>({
        isAuthenticated: false,
        message: constants.MESSAGE_TOKEN_NOT_FOUND,
      })
    )
    return
  }
  try {
    jwt.verify(token, TOKEN_SECRET)
    res.status(200).send(
      forceReturnType<IResponseSend>({
        isAuthenticated: true,
        message: constants.MESSAGE_PERMISSION_ACCEPTED,
      })
    )
  } catch (error) {
    res.status(200).send(
      forceReturnType<IResponseSend>({
        isAuthenticated: false,
        message: constants.MESSAGE_NOT_PERMISSION,
      })
    )
  }
}

export default verifyCredentials
