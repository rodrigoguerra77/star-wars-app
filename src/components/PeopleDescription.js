import React from 'react'
import PeopleCard from './PeopleCard'
import { Link } from 'react-router-dom'

import Paper from "@material-ui/core/Paper"
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"


const PeopleDescription = ({ 
  peopleImage, 
  name,
  birthYear,
  gender,
  homeWorld,
  movies,
	classes }) => {
  return (
    <Grid container 
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12}>
        <Link to='/characters'>Volver</Link>
      </Grid>
      <Grid item md={3}>
        <PeopleCard image={peopleImage} name={name} />
      </Grid>
      <Grid item md={9}>
        <div className={classes.descriptionContainer}>
          <Paper className={classes.descriptionBox}>
            <Typography variant='h6' component='p'>Detalle</Typography>
            <br/>
            <Typography variant='body1' component='p' className={classes.descriptionText}>
              Año de Nacimiento: {birthYear}
            </Typography>
            <Typography variant='body1' component='p' className={classes.descriptionText}>
             Género: {gender}
            </Typography>
            <Typography variant='body1' component='p' className={classes.descriptionText}>
              Planeta Origen: {homeWorld}
            </Typography>
          </Paper>
        </div>
        <div className={classes.descriptionContainer}>
					<Paper className={classes.descriptionBox} >
            <Typography variant='h6' component='p'>Peliculas</Typography>
            <br/>
            {movies.map((item, index) => {
							return(
								<Typography key={index} variant='body1' component="p" className={classes.descriptionText}>
									{item}
								</Typography>
							)
						})}
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
}

export default withStyles({
	descriptionContainer:{
		margin: '2em',
	},
	descriptionBox:{
		padding: '2em',
        height: 'auto'
	},
	descriptionText:{
		fontSize: '1em',
		textAlign: 'justify',
		fontFamily: 'Verdana'
	}
})(PeopleDescription)