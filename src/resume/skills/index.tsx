import * as React from 'react'
import { useSelector } from 'react-redux'

import { Grid, Typography } from '@material-ui/core'

import { getSkills } from '../../modules/skills/'

import { Skill } from './Skill'

export function Skills() {
  const skills = useSelector(getSkills)

  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 10 }}>
        Skills
      </Typography>
      <Grid container spacing={1}>
        {skills.map(skill => (
          <Grid item key={skill.title} xs={12} sm={4} lg={3}>
            <Skill skill={skill} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
