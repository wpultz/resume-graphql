import * as React from 'react'

import { Card, Typography } from '@material-ui/core'

import { ISkill } from '../../modules/skills'

// @ts-ignore
import styles from './Skill.module.css'

interface ISkillProps {
  skill: ISkill
}

export function Skill(props: ISkillProps) {
  const { skill } = props

  console.log(styles)

  // Skill level is out of 10; multiply by 10 to get the percentage
  const skillPct = skill.level * 10

  return (
    <Card style={{ padding: 10 }}>
      <Typography variant="h5">{skill.title}</Typography>
      <div>{skill.level}</div>
      <div className={styles.skillMeterBack}>
        <div className={styles.skillMeterFore} style={{ width: `${skillPct}%` }}></div>
      </div>
    </Card>
  )
}
