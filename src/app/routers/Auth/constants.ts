import handleBaseURL from '../../utils/handleBaseURL'

const constants = {
  ...handleBaseURL('/auth', {
    ROUTE_API_AUTH_LOGIN: '/login',
    ROUTE_API_AUTH_VERIFY_CREDENTIAL: '/verify-credential',
  }),
}

export default constants
