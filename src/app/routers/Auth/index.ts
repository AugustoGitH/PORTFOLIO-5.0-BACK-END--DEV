import { Router } from 'express'

import {
  loginController,
  verifyCredentialsController,
} from '../../controllers/Auth'
import constants from './constants'

const router = Router()

router.post(constants.ROUTE_API_AUTH_LOGIN, loginController)
router.get(
  constants.ROUTE_API_AUTH_VERIFY_CREDENTIAL,
  verifyCredentialsController
)

const authRouters = router

export default authRouters
