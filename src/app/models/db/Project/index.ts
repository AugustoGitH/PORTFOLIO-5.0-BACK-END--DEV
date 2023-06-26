import { model, Schema, Document } from 'mongoose'
import { IProject, IProjectModelDocument } from './types'

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
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    repositoryTechnologiesPoints: { type: Object, default: {} },
    repoLink: { type: String, default: '' },
    favorite: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default model<IProjectModelDocument>('Project', projectSchema)