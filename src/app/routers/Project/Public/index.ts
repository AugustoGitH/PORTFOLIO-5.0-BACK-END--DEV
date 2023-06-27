import { Router } from 'express'

import {
  getProjectsController,
  likeProjectController,
  viewProjectController,
} from '../../../controllers/Project/Public'
import constants from './constants'

const router = Router()

router.put(constants.ROUTE_API_PUBLIC_VIEW_PROJECT, viewProjectController)
router.put(constants.ROUTE_API_PUBLIC_LIKE_PROJECT, likeProjectController)
router.get(constants.ROUTE_API_PUBLIC_GET_PROJECTS, getProjectsController)

export default router
