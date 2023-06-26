import { type IFormLogin } from '../../../models/validation/formLogin/types'

export interface IBodyRequest extends IFormLogin {}

export interface IResponseSend {
  message: string
}
