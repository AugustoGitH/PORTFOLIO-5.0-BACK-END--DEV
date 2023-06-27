import {
  type IProjectPrivate,
  type IProjectPublic,
} from '../../../../services/Projects/handleModelBasedAuth/types'

export interface IResponseSend {
  message: string
  projects: IProjectPrivate[] | IProjectPublic[] | null
}
