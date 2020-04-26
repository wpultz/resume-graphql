import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { Education as IEducation } from '../../graphql/graphql'

import { Education } from './Education'

import { ContentCard } from '../common/ContentCard'

const qu = gql`
  {
    listEducations {
      school
      degree
      gpa
      id
    }
  }
`

export function Educations() {
  const { data } = useQuery<{ listEducations: IEducation[] }>(qu)

  const eduList = (
    <div>{data && data.listEducations.map(education => <Education key={education.id} education={education} />)}</div>
  )

  return <ContentCard title="Education" content={eduList} />
}
