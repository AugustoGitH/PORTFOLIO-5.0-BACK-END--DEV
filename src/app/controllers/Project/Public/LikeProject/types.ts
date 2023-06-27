export type TStateLike = 'favorite' | 'desfavorite'

export interface IQueryRequest {
  idProject?: string
  stateLike?: TStateLike
}

export interface IResponseSend {
  message: string
}
