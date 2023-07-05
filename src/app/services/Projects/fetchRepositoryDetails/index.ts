/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Repositorie from '../../Repositorie/getRepositorieGit'
import { type IFetchRepositoryDetailsReturn } from './types'

const fetchRepositoryDetails = async (
  repoId: number | null,
  repoLink?: string
): Promise<IFetchRepositoryDetailsReturn> => {
  const repositorySearchedById =
    typeof repoId === 'number' ? await Repositorie.findOneById(repoId) : null

  const repositoryTechnologiesPoints =
    repositorySearchedById != null
      ? await Repositorie.findTechnologies(repositorySearchedById.languages_url)
      : null

  return {
    repoLink: !repoLink ? repositorySearchedById?.svn_url ?? null : repoLink,
    repositoryTechnologiesPoints: !repoLink
      ? repositoryTechnologiesPoints
      : null,
  }
}

export default fetchRepositoryDetails
