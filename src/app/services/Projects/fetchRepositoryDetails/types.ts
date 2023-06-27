import { type IRepositoryTechnologiesPoints } from '../../../types/Project'

export interface IFetchRepositoryDetailsReturn {
  repoLink: string | null
  repositoryTechnologiesPoints: IRepositoryTechnologiesPoints | null
}
