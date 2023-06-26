import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import handleModelBasedAuth from '../../../../services/Projects/handleModelBasedAuth'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IResponseSend } from './types'

const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find({})
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.SUCCESS_MESSAGE_SEARCHED_PROJECTS,
        projects: projects.map((project) =>
          handleModelBasedAuth(project).public()
        ),
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_SEARCHED_PROJECTS,
        projects: null,
      })
    )
  }
}

export default getProjects
