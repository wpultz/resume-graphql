import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongo from 'mongoose'
import dotenv from 'dotenv'

import { root, schema } from './Schema'

// Load env vars from .env file.
// TODO only do this in DEV mode
dotenv.config()

const app = express()

mongo.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-q1iwg.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

mongo.connection.once('open', () => {
  console.log('connected to database')
})

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
    customFormatErrorFn: err => {
      if (err.message === 'UNKNOWN_COMPANY_FETCH_ERROR') {
        return { message: 'unknown error fetching company from db', statusCode: 500 }
      } else if (err.message === 'COMPANY_NOT_FOUND') {
        return { message: 'company not found', statusCode: 404 }
      } else {
        return { message: 'completely unknown error', statusCode: 500 }
      }
    }
  })
)

app.listen(8080, () => {
  console.log('Server running on port 8080...')
})
