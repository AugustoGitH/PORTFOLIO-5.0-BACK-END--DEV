/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import fetchRepositoryDetails from '../../../../services/Projects/fetchRepositoryDetails'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IBodyRequest, type IResponseSend } from './types'

const ReloadRepoProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { repoId, idProject }: IBodyRequest = req.body
  if (typeof repoId !== 'number' || typeof idProject !== 'string') {
    res.status(400).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_ERROR_NOT_ID_PROJECT_OUR_REPO,
      })
    )
    return
  }

  const { repoLink, repositoryTechnologiesPoints } =
    await fetchRepositoryDetails(repoId)

  if (repoLink === null && repositoryTechnologiesPoints === null) {
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_ERROR_FETCH_INFOS_REPO,
      })
    )
    return
  }
  try {
    await Project.findByIdAndUpdate(idProject, {
      ...(repoLink && { repoLink }),
      ...(repositoryTechnologiesPoints && {
        repositoryTechnologiesPoints,
      }),
    })
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_SUCCESS_UPDATE_INFOS_REPO,
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_UPDATE_INFOS_REPO,
      })
    )
  }
}

export default ReloadRepoProject
