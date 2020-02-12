import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Education = {
   __typename?: 'Education',
  id: Scalars['ID'],
  school: Scalars['String'],
  degree: Scalars['String'],
  gpa: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type EducationInput = {
  school: Scalars['String'],
  degree: Scalars['String'],
  gpa: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type Experience = {
   __typename?: 'Experience',
  company: Scalars['String'],
  positions: Array<Position>,
};

export type ExperienceInput = {
  company: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  addEducation?: Maybe<Education>,
  addSkill?: Maybe<Skill>,
  addExperience?: Maybe<Experience>,
  addPosition?: Maybe<Position>,
};


export type MutationAddEducationArgs = {
  education: EducationInput
};


export type MutationAddSkillArgs = {
  skill: SkillInput
};


export type MutationAddExperienceArgs = {
  experience: ExperienceInput
};


export type MutationAddPositionArgs = {
  companyId: Scalars['ID'],
  position: PositionInput
};

export type Position = {
   __typename?: 'Position',
  title: Scalars['String'],
  highlights: Array<Maybe<Scalars['String']>>,
  start: Scalars['String'],
  end?: Maybe<Scalars['String']>,
};

export type PositionInput = {
  title: Scalars['String'],
  highlights: Array<Maybe<Scalars['String']>>,
  start: Scalars['String'],
  end?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  listEducations: Array<Maybe<Education>>,
  getEducation: Education,
  getResume?: Maybe<Resume>,
};


export type QueryGetEducationArgs = {
  id: Scalars['ID']
};

export type Resume = {
   __typename?: 'Resume',
  experience: Array<Maybe<Experience>>,
  education: Array<Maybe<Education>>,
  skills: Array<Maybe<Skill>>,
};

export type Skill = {
   __typename?: 'Skill',
  title: Scalars['String'],
  level: Scalars['Int'],
};

export type SkillInput = {
  title: Scalars['String'],
  level: Scalars['Int'],
};


