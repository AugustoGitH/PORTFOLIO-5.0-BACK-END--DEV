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
  const { TOKEN_AUTHENTICATION, TOKEN_SECRET } = process.env

  if (TOKEN_AUTHENTICATION === undefined || TOKEN_SECRET === undefined) {
    throw new Error(
      'TOKEN_AUTHENTICATION ou TOKEN_SECRET não se encontra nas variaveis de ambiente!'
    )
  }

  const tokenInCookies: string | undefined = req.cookies[TOKEN_AUTHENTICATION]
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
    jwt.verify(tokenVerify, TOKEN_SECRET)
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
