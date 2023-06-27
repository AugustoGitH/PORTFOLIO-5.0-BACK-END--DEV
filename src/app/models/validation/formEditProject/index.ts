import Joi, { type ValidationResult } from '@hapi/joi'

import { type IFormEditProject } from './types'

const schemaFormEditProject = (data: IFormEditProject): ValidationResult => {
  const schema = Joi.object({
    orderOfFive: Joi.number().optional().allow(0),
    name: Joi.string().min(4).max(47).required(),
    type: Joi.string().required(),
    technologiesUsed: Joi.array().items(Joi.string()).min(2).required(),
    websiteLink: Joi.string().optional().allow(''),
    videoLink: Joi.string().optional().allow(''),
    repoId: Joi.number().optional().allow(null),
    repoLink: Joi.string().optional().allow(''),
  })
  return schema.validate(data)
}

export default schemaFormEditProject
