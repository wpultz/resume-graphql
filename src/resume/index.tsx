import * as React from 'react'

import { Skills } from './skills'
import { Experiences } from './experience'
import { Educations } from './education'

import styles from './Resume.module.css'

export function Resume() {
  return (
    <div>
      <div className={styles.section}>
        <Skills />
      </div>
      <div className={styles.section}>
        <Experiences />
      </div>
      <div className={styles.section}>
        <Educations />
      </div>
    </div>
  )
}
