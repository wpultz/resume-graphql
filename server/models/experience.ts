import { Schema, model, Types } from 'mongoose'

const experienceSchema = new Schema({
  company: String,
  positions: [Types.ObjectId]
})

export default model('Experience', experienceSchema)
