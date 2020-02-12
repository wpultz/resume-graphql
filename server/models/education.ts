import { Schema, model } from 'mongoose'

const educationSchema = new Schema({
  school: String,
  degree: String,
  gpa: String,
  description: String
})

export default model('Education', educationSchema)
