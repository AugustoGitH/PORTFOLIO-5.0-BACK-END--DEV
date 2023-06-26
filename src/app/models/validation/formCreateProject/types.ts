import {
  type IProjectImages,
  type IRepositoryTechnologiesPoints,
  type TProjectTechnologiesUsed,
  type TProjectType,
} from '../../../types/Project'

export interface IFormCreateProject {
  name: string
  images: IProjectImages
  technologiesUsed: TProjectTechnologiesUsed[]
  type: TProjectType
  websiteLink: string
  videoLink: string
  repoId: number | null
  repositoryTechnologiesPoints: IRepositoryTechnologiesPoints
  repoLink: string
}
