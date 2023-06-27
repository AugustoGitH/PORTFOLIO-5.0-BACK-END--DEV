import { type Request, type Response } from 'express'

import Repositorie from '../../../../services/Repositorie/getRepositorieGit'
import forceReturnType from '../../../../utils/forceReturnType'
import constants from './constants'
import { type IResponseSend } from './types'

const getRepositories = async (req: Request, res: Response): Promise<void> => {
  const repositories = await Repositorie.findAll()

  res.status(200).send(
    forceReturnType<IResponseSend>({
      repositories,
      message: constants.SUCCESS_MESSAGE_GET_REPOSITORIES,
    })
  )
}

export default getRepositories
