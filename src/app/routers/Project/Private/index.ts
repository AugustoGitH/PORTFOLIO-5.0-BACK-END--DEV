import { Router } from 'express'

import {
  ReloadRepoProjectController,
  createProjectController,
  deleteProjectController,
  getProjectsController,
  getRepositoriesController,
  updateProjectController,
} from '../../../controllers/Project/Private'
import constants from './constants'

const router = Router()

router.post(constants.ROUTE_API_PRIVATE_CREATE_PROJECT, createProjectController)

router.delete(
  constants.ROUTE_API_PRIVATE_DELETE_PROJECT,
  deleteProjectController
)

router.get(constants.ROUTE_API_PRIVATE_GET_PROJECTS, getProjectsController)

router.get(
  constants.ROUTE_API_PRIVATE_GET_REPOSITORIES,
  getRepositoriesController
)

router.put(
  constants.ROUTE_API_PRIVATE_RELOAD_REPO_PROJECT,
  ReloadRepoProjectController
)

router.put(constants.ROUTE_API_PRIVATE_UPDATE_PROJECT, updateProjectController)

export default router
