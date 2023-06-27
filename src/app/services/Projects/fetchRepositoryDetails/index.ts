import Repositorie from '../../Repositorie/getRepositorieGit'
import { type IFetchRepositoryDetailsReturn } from './types'

const fetchRepositoryDetails = async (
  repoId: number | null,
  repoLink?: string | null
): Promise<IFetchRepositoryDetailsReturn> => {
  const repositorySearchedById =
    typeof repoId === 'number' ? await Repositorie.findOneById(repoId) : null
  const repositoryTechnologiesPoints =
    repositorySearchedById != null
      ? await Repositorie.findTechnologies(repositorySearchedById.labels_url)
      : null

  return {
    repoLink:
      typeof repoLink !== 'string'
        ? repositorySearchedById?.svn_url ?? null
        : repoLink,
    repositoryTechnologiesPoints:
      typeof repoLink !== 'string' ? repositoryTechnologiesPoints : null,
  }
}

export default fetchRepositoryDetails
