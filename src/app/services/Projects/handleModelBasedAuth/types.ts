import {
  type IProject,
  type IProjectModelDocument,
} from '../../../models/db/Project/types'

export type TAuthProject = 'public' | 'private'

export interface IProjectPrivate extends IProjectModelDocument {}

export interface IProjectPublic extends IProject {
  _id: string
}

export interface IReturnHandleModelBasedAuth {
  private: () => IProjectPrivate
  public: () => IProjectPublic
}
