import { Router } from 'express'

import authRouters from './Auth'
import constants from './constants'
import projectRouters from './Project'

const router = Router()

router.use(constants.BASE_ROUTE_API_AUTH, authRouters)
router.use(constants.BASE_ROUTE_API_PROJECT, projectRouters)

const routers = router

export default routers
