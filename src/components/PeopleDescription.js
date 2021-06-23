import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import PeopleCard from './PeopleCard'

const getData = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((resp) => resolve(resp))
      .catch((err) => reject(err))
  })
}

const PeopleDescription = ({ peopleData, homeWorld, classes }) => {
  const [movieList, setMovieList] = useState([])
  const [movieListLoading, setMovieListLoading] = useState(true)
  const [peopleHomeworld, setPeopleHomeworld] = useState('')
  const [peopleHomeworldLoading, setPeopleHomeworldLoading] = useState(true)
  const peopleImage = `${process.env.PUBLIC_URL}/images/people/${peopleData.peopleId}.jpg`
  const history = useHistory()

  useEffect(() => {
    const renderMovies = () => {
      setMovieListLoading(true)
      const moviesPromises = []

      for (let i = 0; i < peopleData.films.length; i += 1) {
        const movie = peopleData.films[i]
        moviesPromises.push(getData(movie))
      }

      Promise.all(moviesPromises)
        .then((value) => {
          setMovieList(value.map((item) => item.data.title))
          setMovieListLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setMovieListLoading(false)
        })
    }
    if (peopleData.films.length) {
      renderMovies()
    }
  }, [peopleData.films])

  useEffect(() => {
    const fetchHomeworld = () => {
      setPeopleHomeworldLoading(true)
      axios
        .get(peopleData.homeworld)
        .then((res) => {
          const { name } = res.data
          setPeopleHomeworld(name)
          setPeopleHomeworldLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setPeopleHomeworldLoading(false)
        })
    }
    if (peopleData.homeworld) {
      fetchHomeworld()
    }
  }, [peopleData.homeworld])

  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justify='center'
    >
      <Grid item xs={12}>
        <IconButton onClick={() => history.push('/characters')}>
          <ArrowBackIcon style={{color: 'yellow'}} />
        </IconButton>
      </Grid>
      <Grid item md={4}>
        <div className={classes.descriptionContainer}>
          <PeopleCard image={peopleImage} name={peopleData.name} />
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.descriptionContainer}>
          <Paper className={classes.descriptionBox}>
            <Typography variant='h5' component='p'>
              Detalle
            </Typography>
            <br />
            <Typography
              variant='body1'
              component='p'
              className={classes.descriptionText}
            >
              Año de Nacimiento: {peopleData.birth_year}
            </Typography>
            <Typography
              variant='body1'
              component='p'
              className={classes.descriptionText}
            >
              Género: {peopleData.gender}
            </Typography>
            {peopleHomeworldLoading ? (
              <CircularProgress />
            ) : (
              <Typography
                variant="body1"
                component="p"
                className={classes.descriptionText}
              >
                Planeta Origen:{peopleHomeworld}
              </Typography>
            )}
          </Paper>
        </div>
      </Grid>
      <Grid item md={4}>
        <div className={classes.descriptionContainer}>
          <Paper className={classes.descriptionBox}>
            <Typography variant='h5' component='p'>
              Peliculas
            </Typography>
            <br />
            {movieListLoading ? (
              <CircularProgress  style={{ color: 'yellow' }} />
            ) : (
              movieList.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant='body1'
                    component='p'
                    className={classes.descriptionText}
                  >
                    {item}
                  </Typography>
                )
              })
            )}
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
}

export default withStyles({
  descriptionContainer: {
    margin: '2em',
  },
  descriptionBox: {
    padding: '2em',
    minHeight: '200px',
  },
  descriptionText: {
    fontSize: '1em',
    textAlign: 'justify',
    fontFamily: 'Verdana',
  },
})(PeopleDescription)
