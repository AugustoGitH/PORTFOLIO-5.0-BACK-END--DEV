import { model, Schema } from 'mongoose'

import { type IProjectModelDocument } from './types'

const projectSchema = new Schema<IProjectModelDocument>(
  {
    orderOfFive: { type: Number, default: 0 },
    name: { type: String, required: true },
    images: { type: Object, required: true },
    type: { type: String, required: true },
    technologiesUsed: {
      type: [
        {
          type: String,
        },
      ],
      required: true,
    },
    websiteLink: { type: String, default: '' },
    videoLink: { type: String, default: '' },
    repoId: { type: Number, default: null },
    views: { type: [{ type: { previewDate: Date, idCustomer: String } }] },
    likes: { type: [{ type: { previewDate: Date, idCustomer: String } }] },
    repositoryTechnologiesPoints: { type: Object, default: {} },
    repoLink: { type: String, default: '' },
    favorite: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default model<IProjectModelDocument>('Project', projectSchema)
