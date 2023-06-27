import { type IFormEditProject } from '../../../../models/validation/formEditProject/types'

export interface IBodyRequest extends IFormEditProject {}
export interface IResponseSend {
  message: string
}
