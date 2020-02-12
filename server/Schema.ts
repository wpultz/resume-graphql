import { buildASTSchema } from 'graphql'

import Education from './models/education'
import Experience from './models/experience'
import Skill from './models/skill'
import Position from './models/position'

import * as gqlTypes from '../graphql/graphql'

// import {
//   MutationAddEducationArgs,
//   MutationAddExperienceArgs,
//   MutationAddSkillArgs,
//   QueryGetEducationArgs
// } from '../graphql/graphql'
import { schemaAST } from '../graphql/schema'

export const root = {
  listEducations: () => {
    return Education.find()
  },

  getEducation: ({ id }: gqlTypes.QueryGetEducationArgs) => {
    return Education.findById(id)
  },

  getResume: () => {
    const education = Education.find()
    const experience = Experience.find()
    const skills = Skill.find()

    return { skills, education, experience }
  },

  addEducation: ({ education }: gqlTypes.MutationAddEducationArgs) => {
    const { school, degree, gpa, description = '' } = education
    const edu = new Education({
      school: school,
      degree: degree,
      gpa: gpa,
      description: description || ''
    })

    return edu.save()
  },

  addExperience: ({ experience }: gqlTypes.MutationAddExperienceArgs) => {
    const exp = new Experience({
      company: experience.company
    })

    return exp.save()
  },

  addPosition: async ({ companyId, position }: gqlTypes.MutationAddPositionArgs) => {
    // create and save the new position
    const pos = new Position(position)

    // find the company and add the position
    const exp = await Experience.findById(companyId)
    if (!exp) {
      throw new Error('COMPANY_NOT_FOUND')
    }

    // The company exists, so save the Position
    await pos.save()

    // Add the position id to the Experience's list of Position ids
    const docPos = exp.get('positions')
    docPos.push(pos._id)
    exp.set('positions', docPos)

    try {
      await exp.save()

      // Everything is cool, return the position object
      return pos
    } catch (err) {
      // Unable to save the Experience, so remove the new Position
      await pos.remove()
      throw new Error('EXPERIENCE_SAVE_FAILURE')
    }
  },

  addSkill: ({ skill }: gqlTypes.MutationAddSkillArgs) => {
    const sk = new Skill(skill)

    return sk.save()
  }
}

export const schema = buildASTSchema(schemaAST)

/* *** NOTE ***

This is how one of the articles I referenced defined types. This was insanity, so I opted to write the schema as a
literal and generate the types automatically with graphql-codegen and then create AST and query object with graphql.js
tools. The AST is exported from graphql/schema.ts. The generated TS types are export from graphql/graphql.tsx.

*/

// const EducationInputType = new GraphQLInputObjectType({
//   name: 'EducationInput',
//   fields: () => ({
//     school: {
//       type: GraphQLNonNull(GraphQLString)
//     },
//     degree: {
//       type: GraphQLNonNull(GraphQLString)
//     },
//     gpa: {
//       type: GraphQLNonNull(GraphQLString)
//     },
//     description: {
//       type: GraphQLString
//     }
//   })
// })

// const EducationType = new GraphQLObjectType({
//   name: 'Education',
//   fields: () => ({
//     id: { type: GraphQLID },
//     school: {
//       type: GraphQLString
//     },
//     degree: {
//       type: GraphQLString
//     },
//     gpa: {
//       type: GraphQLString
//     },
//     description: {
//       type: GraphQLString
//     }
//   })
// })

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     education: {
//       type: EducationType,
//       args: {
//         id: {
//           type: GraphQLID
//         }
//       },
//       resolve(parent, args) {
//         return Education.findById(args.id)
//       }
//     }
//   }
// })

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addEducation: {
//       type: EducationType,
//       args: {
//         input: { type: EducationInputType }
//       },
//       resolve(parent, { input }) {
//         let edu = new Education({
//           school: input.school,
//           degree: input.degree,
//           gpa: input.gpa,
//           description: input.description || ''
//         })

//         return edu.save()
//       }
//     }
//   }
// })

// export default new GraphQLSchema({ query: RootQuery, mutation: Mutation })
