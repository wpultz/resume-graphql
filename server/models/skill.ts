import { Schema, model } from 'mongoose'

const skillSchema = new Schema({
  title: String,
  level: String
})

export default model('Skill', skillSchema)
