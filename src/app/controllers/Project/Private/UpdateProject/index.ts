/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response } from 'express'

import Project from '../../../../models/db/Project'
import schemaFormEditProject from '../../../../models/validation/formEditProject'
import fetchRepositoryDetails from '../../../../services/Projects/fetchRepositoryDetails'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IBodyRequest, type IResponseSend } from './types'

const updateProject = async (req: Request, res: Response): Promise<void> => {
  const { idProject, ...restValuesEdited }: IBodyRequest = req.body
  const { error } = schemaFormEditProject({ idProject, ...restValuesEdited })

  if (error !== undefined) {
    res.status(400).send(
      forceReturnType<IResponseSend>({
        message: error.message,
      })
    )
    return
  }

  const {
    repoLink: repoLinkSearched,
    repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched,
  } = await fetchRepositoryDetails(
    restValuesEdited.repoId,
    restValuesEdited.repoLink
  )

  try {
    await Promise.all([
      Project.updateMany(
        { orderOfFive: restValuesEdited.orderOfFive },
        { orderOfFive: 0 }
      ),
      Project.findByIdAndUpdate(idProject, {
        ...restValuesEdited,
        ...(repoLinkSearched && { repoLink: repoLinkSearched }),
        ...(repositoryTechnologiesPointsSearched && {
          repositoryTechnologiesPoints: repositoryTechnologiesPointsSearched,
        }),
      }),
    ])
    res.status(200).send(
      forceReturnType<IResponseSend>({
        message: constants.MESSAGE_SUCCESS_EDIT_PROJECT,
      })
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      forceReturnType<IResponseSend>({
        message: constants.GENERIC_ERROR_MESSAGE_EDIT_PROJECT,
      })
    )
  }
}

export default updateProject
