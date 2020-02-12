import * as React from 'react'

import { Typography } from '@material-ui/core'

export function Header() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3">Wyatt Pultz</Typography>
      <Typography variant="subtitle2">
        Mechanicsville, VA | 540-424-9023 | wpultz@gmail.com | github.com/wpultz
      </Typography>
    </div>
  )
}
