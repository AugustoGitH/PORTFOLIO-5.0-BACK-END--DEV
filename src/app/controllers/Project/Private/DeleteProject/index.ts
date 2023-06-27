import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IResponseSend, type IParamnsRequest } from './types'

const deleteProject = async (req: Request, res: Response): Promise<void> => {
  const { idProject }: IParamnsRequest = req.params

  if (typeof idProject !== 'string') {
    res.status(400).send(
      forceReturnType<IResponseSend>({
        message: constants.ERROR_MESSAGE_NOT_ID_PROJECT,
      })
    )
    return
  }

  try {
    await Project.deleteOne({ _id: idProject })
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_SUCCESS_DELETE_PROJECT,
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_DELETE_PROJECT,
      })
    )
  }
}

export default deleteProject
