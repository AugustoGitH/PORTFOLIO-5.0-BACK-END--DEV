import { type Request, type Response } from 'express'

import schemaFormCreateProject from '../../../../models/validation/formCreateProject'
import forceReturnType from '../../../../utils/forceReturnType'
import { type ISendResponse, type IBodyRequest } from './types'

const createProject = async (req: Request, res: Response): Promise<void> => {
  const projectFormCreated: IBodyRequest = req.body

  const { error } = schemaFormCreateProject(projectFormCreated)

  if (error !== undefined) {
    res.status(400).send(
      forceReturnType<ISendResponse>({
        message: error.message,
      })
    )
    return
  }

  const repositorySearchedById = 

}

export default createProject
