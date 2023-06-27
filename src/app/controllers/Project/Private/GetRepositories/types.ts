import { type IRepositorie } from '../../../../types/Repositorie'

export interface IResponseSend {
  repositories: IRepositorie[] | null
  message: string
}
