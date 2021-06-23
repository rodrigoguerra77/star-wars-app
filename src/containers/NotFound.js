import React from 'react'
import {useHistory} from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AppNav from '../components/AppNav'

const NotFound = () => {
  const history = useHistory()

  return (
    <>
      <AppNav />
      <Box minHeight="70vh"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Typography style={{ color: "white" }}>
          Parece que te perdiste...
        </Typography>
        <IconButton onClick={() => history.push('/')}>
            <ArrowBackIosIcon style={{color: "yellow"}} />
            Regresar
          </IconButton>
      </Box>
    </>
  )
}

export default NotFound