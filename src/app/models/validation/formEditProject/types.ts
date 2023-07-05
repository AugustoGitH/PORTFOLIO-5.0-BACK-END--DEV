import {
  type TProjectTechnologiesUsed,
  type TProjectType,
} from '../../../types/Project'

export interface IFormEditProject {
  orderOfFive: number
  name: string
  type: TProjectType
  technologiesUsed: TProjectTechnologiesUsed[]
  websiteLink: string
  videoLink: string
  repoId: number | null
  repoLink: string
  idProject: string
}
