export type TProjectType = 'e-commerce' | 'web app' | 'lading page' | 'all'
export type TProjectTechnologiesUsed =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'firebase'
  | 'nodejs'
  | 'bootstrap'
  | 'mongodb'
  | 'sass'
  | 'typescript'
  | 'reactjs'
  | 'nextjs'

export interface IProjectImages {
  cover: string
  images: string[]
}

export type IRepositoryTechnologiesPoints = Record<string, number>
