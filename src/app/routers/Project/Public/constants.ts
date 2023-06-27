import handleBaseURL from '../../../utils/handleBaseURL'

const constants = {
  ...handleBaseURL('/public/public', {
    ROUTE_API_PUBLIC_GET_PROJECTS: '/get-projects',
    ROUTE_API_PUBLIC_LIKE_PROJECT: '/like-project/:idProject',
    ROUTE_API_PUBLIC_VIEW_PROJECT: '/view-project/:idProject',
  }),
}

export default constants
