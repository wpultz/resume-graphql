import gql from 'graphql-tag'

export const schemaAST = gql(`
  type Education {
    id: ID!
    school: String!
    degree: String!
    gpa: String!
    description: String
  }

  type Position {
    title: String!
    highlights: [String]!
    start: String!
    end: String
  }

  type Experience {
    company: String!
    positions: [Position!]!
  }

  type Skill {
    title: String!
    level: Int!
  }

  type Resume {
    experience: [Experience]!
    education: [Education]!
    skills: [Skill]!
  }

  input ExperienceInput {
    company: String!
  }

  input PositionInput {
    title: String!
    highlights: [String]!
    start: String!
    end: String
  }

  input EducationInput {
    school: String!
    degree: String!
    gpa: String!
    description: String
  }

  input SkillInput {
    title: String!
    level: Int!
  }

  type Query {
    listEducations: [Education]!
    getEducation(id: ID!): Education!
    getResume: Resume
  }

  type Mutation {
    addEducation(education: EducationInput!): Education
    addSkill(skill: SkillInput!): Skill
    addExperience(experience: ExperienceInput!): Experience
    addPosition(companyId: ID!, position: PositionInput!): Position
  }
`)

export default schemaAST
