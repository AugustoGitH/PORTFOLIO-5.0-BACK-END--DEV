import { Router } from 'express'

import credentialCheckAccess from '../../middleware/CredentialCheckAccess.ts'
import constants from './constants'
import privateRouters from './Private'
import publicRouters from './Public'
const router = Router()

router.use(constants.ROUTES_API_PRIVATE, credentialCheckAccess, privateRouters)
router.use(constants.ROUTES_API_PUBLIC, publicRouters)

const projectRouters = router

export default projectRouters
