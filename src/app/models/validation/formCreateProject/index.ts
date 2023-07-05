import Joi, { type ValidationResult } from '@hapi/joi'

import {
  type TProjectType,
  type TProjectTechnologiesUsed,
} from '../../../types/Project'
import { whiteListTechsUsedProject, whiteListTypesProject } from '../settings'
import { type IFormCreateProject } from './types'

const schemaFormCreateProject = (
  data: IFormCreateProject
): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(47).required(),
    images: Joi.object({
      cover: Joi.string().required(),
      images: Joi.array().items(Joi.string()).optional(),
    }).required(),
    type: Joi.string()
      .required()
      .custom((type: TProjectType, helper) => {
        if (!whiteListTypesProject.includes(type)) {
          return helper.error('O tipo selecionado é inválido!')
        }
        return type
      }),
    technologiesUsed: Joi.array()
      .items(Joi.string())
      .min(2)
      .required()
      .custom((techsSelected: TProjectTechnologiesUsed[], helper) => {
        if (
          !techsSelected.every((tech) =>
            whiteListTechsUsedProject.includes(tech)
          )
        ) {
          return helper.error('Alguma tecnologia selecionada é inválida!')
        }
        return techsSelected
      }),
    websiteLink: Joi.string().optional().allow(''),
    videoLink: Joi.string().optional().allow(''),
    repoId: Joi.number().optional().allow(null),
    repoLink: Joi.string().optional().allow(''),
  })
  return schema.validate(data)
}

export default schemaFormCreateProject
