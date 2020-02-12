import * as React from 'react'

import { Header } from './header'
import { Skills } from './skills'
import { Experiences } from './experience'
import { Educations } from './education'

export function Resume() {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Header />
      </div>
      <div style={{ marginBottom: 40 }}>
        <Skills />
      </div>
      <div style={{ marginBottom: 40 }}>
        <Experiences />
      </div>
      <div style={{ marginBottom: 40 }}>
        <Educations />
      </div>
    </div>
  )
}
