import { Document } from 'mongoose'
import {
  IProjectImages,
  IRepositoryTechnologiesPoints,
  TProjectTechnologiesUsed,
  TProjectType,
} from '../../../types/Project'

export interface IProject {
  orderOfFive: number
  name: string
  images: IProjectImages
  type: TProjectType
  technologiesUsed: TProjectTechnologiesUsed[]
  websiteLink: string
  videoLink: string
  repoId: number | null
  views: number
  likes: number
  repositoryTechnologiesPoints: IRepositoryTechnologiesPoints
  repoLink: string
  favorite: boolean
  createdAt: Date
}

export interface IProjectModelDocument extends IProject, Document {}