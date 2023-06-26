import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IBodyRequest, type IResponseSend, type TStateLike } from './types'

const likeProject = async (req: Request, res: Response): Promise<void> => {
  const { idProject, stateLike }: IBodyRequest = req.body

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
      $inc: {
        likes:
          stateLike === forceReturnType<TStateLike>('favorite')
            ? 1
            : stateLike === forceReturnType<TStateLike>('desfavorite')
            ? -1
            : 0,
      },
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
