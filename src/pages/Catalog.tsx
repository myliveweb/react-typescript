import React from 'react'
import Typography from '@material-ui/core/Typography'

export const Catalog: React.FC = () => {
  return (
    <Typography
      component="h2"
      variant="h2"
      style={{
        color: 'green',
        textAlign: 'center',
        margin: '100px',
        height: '500px',
      }}
    >
      CATALOG
    </Typography>
  )
}
