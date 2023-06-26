export type TStateLike = 'favorite' | 'desfavorite'

export interface IBodyRequest {
  idProject: string
  stateLike: TStateLike
}

export interface IResponseSend {
  message: string
}
