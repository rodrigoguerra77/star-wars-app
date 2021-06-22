import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const AppNav = (props) => {
  const { classes } = props
  
  return (
    <AppBar className={classes.NavColor} position='static'>
      <Toolbar variant="dense">
        <Typography variant="h6" component="p" color="inherit">
          Star Wars
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles({
  NavColor: {
    backgroundColor: '#ffe81f',
    color: '#000'
  }
}) (AppNav)