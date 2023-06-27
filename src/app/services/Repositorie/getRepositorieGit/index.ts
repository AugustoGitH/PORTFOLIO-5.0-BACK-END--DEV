import axios from 'axios'

import env from '../../../constants/env'
import { type IRepositoryTechnologiesPoints } from '../../../types/Project'
import { type IRepositorie } from '../../../types/Repositorie'

const Repositorie = {
  async fetchRepos(): Promise<IRepositorie[] | null> {
    try {
      const { data: repositories }: { data: IRepositorie[] } = await axios.get(
        env.API_ROUTE_GITHUB,
        {
          headers: {
            Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`,
          },
        }
      )
      return repositories
    } catch (error) {
      console.log(error)
      return null
    }
  },
  async findAll(): Promise<IRepositorie[] | null> {
    return await this.fetchRepos()
  },
  async findOneById(id: number): Promise<IRepositorie | null> {
    const repositories = await this.fetchRepos()
    return repositories?.find((repo) => repo.id === id) ?? null
  },
  async findTechnologies(
    languagesUrl: string
  ): Promise<IRepositoryTechnologiesPoints | null> {
    try {
      const {
        data: technologiesUsed,
      }: { data: IRepositoryTechnologiesPoints } = await axios.get(languagesUrl)
      return technologiesUsed
    } catch (error) {
      console.log(error)
      return null
    }
  },
}

export default Repositorie
