import Joi, { type ValidationResult } from '@hapi/joi'

import {
  type TProjectTechnologiesUsed,
  type TProjectType,
} from '../../../types/Project'
import { whiteListTechsUsedProject, whiteListTypesProject } from '../settings'
import { type IFormEditProject } from './types'

const schemaFormEditProject = (data: IFormEditProject): ValidationResult => {
  const schema = Joi.object({
    idProject: Joi.string().required(),
    orderOfFive: Joi.number().optional().allow(0),
    name: Joi.string().min(4).max(47).required(),
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

export default schemaFormEditProject
