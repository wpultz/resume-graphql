import * as React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import { getEducations } from '../../modules/education'

import { Education } from './Education'

export function Educations() {
  const educations = useSelector(getEducations)

  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 10 }}>
        Education
      </Typography>
      {educations.map(education => (
        <Education education={education} key={education.degree} />
      ))}
    </div>
  )
}
