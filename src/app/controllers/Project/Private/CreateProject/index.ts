/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import schemaFormCreateProject from '../../../../models/validation/formCreateProject'
import fetchRepositoryDetails from '../../../../services/Projects/fetchRepositoryDetails'
import handleModelBasedAuth from '../../../../services/Projects/handleModelBasedAuth'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IResponseSend, type IBodyRequest } from './types'

const createProject = async (req: Request, res: Response): Promise<void> => {
  const projectFormCreated: IBodyRequest = req.body
  const { error } = schemaFormCreateProject(projectFormCreated)

  if (error !== undefined) {
    res.status(400).send(
      forceReturnType<IResponseSend>({
        message: error.message,
        project: null,
      })
    )
    return
  }

  const { repoId, repoLink } = projectFormCreated

  const {
    repoLink: repoLinkSearched,
    repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched,
  } = await fetchRepositoryDetails(repoId, repoLink)

  const newProject = {
    ...projectFormCreated,
    ...(repoLinkSearched && { repoLink: repoLinkSearched }),
    ...(repositoryTechnologiesPointsSearched && {
      repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched,
    }),
  }

  try {
    const projectCreated = await new Project(newProject).save()
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_SUCCESS_CREATE_PROJECT,
        project: handleModelBasedAuth(projectCreated).private(),
      })
    )
  } catch (error) {
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_CREATE_PROJECT,
        project: null,
      })
    )
  }
}

export default createProject
