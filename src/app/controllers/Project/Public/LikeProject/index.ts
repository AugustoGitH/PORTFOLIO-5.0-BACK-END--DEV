import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import { type IActionRegister } from '../../../../models/db/Project/types'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import {
  type IQueryRequest,
  type IResponseSend,
  type TStateLike,
} from './types'

const likeProject = async (req: Request, res: Response): Promise<void> => {
  const { idProject, stateLike }: IQueryRequest = req.body
  const { CUSTOMER_ID } = process.env

  if (CUSTOMER_ID === undefined) {
    throw new Error('A variavel de ambiente TOKEN_CUSTOMER_ID é indefinida!')
  }

  const customerId: string | undefined = req.cookies[CUSTOMER_ID]

  if (idProject === undefined || stateLike === undefined) {
    res.status(400).send(
      forceReturnType<IResponseSend>({
        message: constants.ERROR_MESSAGE_ID_PROJECT_OUR_STATE_LIKE_UNDEFINED,
      })
    )
    return
  }

  try {
    const projectSelected = await Project.findById(idProject)
    if (projectSelected === null) {
      res.status(404).send(
        forceReturnType<IResponseSend>({
          message: constants.MESSAGE_PROJECT_NOT_FOUND,
        })
      )
      return
    }

    await Project.findByIdAndUpdate(idProject, {
      ...(stateLike === forceReturnType<TStateLike>('favorite') &&
      typeof customerId === 'string'
        ? {
            $push: {
              likes: forceReturnType<IActionRegister>({
                idCustomer: customerId,
                previewDate: new Date(),
              }),
            },
          }
        : stateLike === forceReturnType<TStateLike>('desfavorite') &&
          typeof customerId === 'string'
        ? {
            $pull: {
              likes: forceReturnType<Omit<IActionRegister, 'previewDate'>>({
                idCustomer: customerId,
              }),
            },
          }
        : {}),
    })
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.SUCCESS_MESSAGE_PROJECT_REACTED,
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_PROJECT_REACTED,
      })
    )
  }
}

export default likeProject
