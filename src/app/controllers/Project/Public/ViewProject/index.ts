import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IBodyRequest, type IResponseSend } from './types'

const viewProject = async (req: Request, res: Response): Promise<void> => {
  const { idProject }: IBodyRequest = req.body

  try {
    const project = await Project.findById(idProject)
    if (project == null) {
      res.status(404).send(
        forceReturnType<IResponseSend>({
          message: constants.MESSAGE_PROJECT_NOT_FOUND,
        })
      )
      return
    }

    await Project.findByIdAndUpdate(idProject, {
      $inc: { views: 1 },
    })

    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.SUCCESS_MESSAGE_PROJECT_VIEW,
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_PROJECT_VIEW,
      })
    )
  }
}

export default viewProject
