import { Schema, model } from 'mongoose'

const positionSchema = new Schema({
  title: String,
  highlights: [String],
  start: String,
  end: String
})

export default model('Position', positionSchema)
