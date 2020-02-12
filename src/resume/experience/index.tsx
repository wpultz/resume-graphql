import * as React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import { getExperiences } from '../../modules/experience'

import { Experience } from './Experience'

export function Experiences() {
  const experiences = useSelector(getExperiences)

  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 10 }}>
        Experience
      </Typography>
      {experiences.map(experience => (
        <Experience experience={experience} key={experience.company} />
      ))}
    </div>
  )
}
