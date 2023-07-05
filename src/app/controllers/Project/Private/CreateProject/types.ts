import { type IFormCreateProject } from '../../../../models/validation/formCreateProject/types'
import { type IProjectPrivate } from '../../../../services/Projects/handleModelBasedAuth/types'

export interface IBodyRequest extends IFormCreateProject {}

export interface IResponseSend {
  message: string
  project: IProjectPrivate | null
}
