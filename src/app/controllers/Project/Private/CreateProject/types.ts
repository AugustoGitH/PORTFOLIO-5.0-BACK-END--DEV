import { type IFormCreateProject } from '../../../../models/validation/formCreateProject/types'

export interface IBodyRequest extends IFormCreateProject {}

export interface IResponseSend {
  message: string
}
