import { type IProjectModelDocument } from '../../../models/db/Project/types'
import {
  type IProjectPublic,
  type IProjectPrivate,
  type IReturnHandleModelBasedAuth,
} from './types'

const handleModelBasedAuth = (
  project: IProjectModelDocument
): IReturnHandleModelBasedAuth => {
  return {
    private: (): IProjectPrivate => project,
    public: (): IProjectPublic => {
      const {
        _id,
        createdAt,
        favorite,
        images,
        likes,
        name,
        orderOfFive,
        repoId,
        repoLink,
        websiteLink,
        repositoryTechnologiesPoints,
        technologiesUsed,
        type,
        videoLink,
        views,
      } = project
      return {
        _id,
        createdAt,
        favorite,
        images,
        likes,
        name,
        orderOfFive,
        repoId,
        repoLink,
        repositoryTechnologiesPoints,
        technologiesUsed,
        type,
        videoLink,
        views,
        websiteLink,
      }
    },
  }
}

export default handleModelBasedAuth
