import handleBaseURL from '../../../utils/handleBaseURL'

const constants = {
  ...handleBaseURL('/project/private', {
    ROUTE_API_PRIVATE_CREATE_PROJECT: '/create-project',
    ROUTE_API_PRIVATE_DELETE_PROJECT: '/delete-project/:idProject',
    ROUTE_API_PRIVATE_GET_PROJECT: '/get-project',
    ROUTE_API_PRIVATE_GET_REPOSITORIES: '/get-repositories',
    ROUTE_API_PRIVATE_RELOAD_REPO_PROJECT: '/reload-repo-project',
    ROUTE_API_PRIVATE_UPDATE_PROJECT: '/update-project',
  }),
}

export default constants
