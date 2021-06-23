import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const AppNav = (props) => {
  const { classes } = props
  
  return (
    <AppBar className={classes.NavColor} position='static'>
      <Toolbar variant="dense">
        <Typography variant="h6" component="p" color="inherit">
          <Link to='/' className='text-nav-app'>Star Wars</Link>
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