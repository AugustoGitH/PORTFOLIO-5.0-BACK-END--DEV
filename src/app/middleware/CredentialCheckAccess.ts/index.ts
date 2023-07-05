import { type Request, type Response, type NextFunction } from 'express'

import jwt from 'jsonwebtoken'

import forceReturnType from '../../utils/forceReturnType'
import constants from './constants'
import { type IResponseSend } from './types'

const credentialCheckAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const tokenInCookies: string | undefined =
    req.cookies[process.env.TOKEN_AUTHENTICATION ?? '']
  const tokenInAuthorization: string | undefined = req.headers.authorization

  const tokenVerify = tokenInCookies ?? tokenInAuthorization

  if (tokenVerify === undefined) {
    res.status(404).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_ERROR_NOT_FOUND_TOKEN,
      })
    )
    return
  }

  try {
    jwt.verify(tokenVerify, process.env.TOKEN_SECRET ?? '')
    next()
  } catch (error) {
    res.status(401).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_ERROR_NOT_PERMISSION,
      })
    )
  }
}

export default credentialCheckAccess
