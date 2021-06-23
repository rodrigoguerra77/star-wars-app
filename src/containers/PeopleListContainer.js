import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import List from '../components/List'
import AppNav from '../components/AppNav'
import config from '../config'

const PeopleListContainer = () => {
  const [peopleData, setPeopleData] = useState([])
  const [pagination, setPagination] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${config.API_URL}people`)
      .then(res => {
        const { next, previous } = res.data
        setPagination({
          next: next,
          previous: previous
        })

        const peopleData = res.data.results
        setPeopleData(
          peopleData
        )
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        console.error(err);
      })
    }
    fetchData()
  }, [])

  const nextPage = () => {
    if(pagination.next) {
      setIsLoading(true)
      axios.get(pagination.next)
      .then(res => {
        const { next, previous } = res.data
        setPagination({
          next: next,
          previous: previous
        })

        const peopleData = res.data.results
        setPeopleData(
          peopleData
        )
        setIsLoading(false)
      })
      .catch(err => {
      setIsLoading(true)
      setError(true)
      console.error(err)
      })
    }
  }

  const previousPage = () => {
    if(pagination.previous) {
      setIsLoading(true)
      axios.get(pagination.previous)
        .then(res => {
          const { next, previous } = res.data
          setPagination({
            next: next,
            previous: previous
          })
  
          const peopleData = res.data.results
          setPeopleData(
            peopleData
          )
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(true)
        setError(true)
        console.error(err)
        })
    }
  }

  return (
    <>
      <AppNav />
      {
        !isLoading && !error &&
        <List peopleData={peopleData} />
      }
      {
        isLoading && <Box
        minHeight='77.5vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <CircularProgress style={{ color: 'yellow' }} />
      </Box>
      }
      {
        !isLoading && error &&
        <Typography color='error'>Algo ha salido mal.</Typography>
      }
      <Box display='flex' justifyContent='center' width='100%'>
        { pagination.previous &&
          <IconButton onClick={previousPage}>
            <ArrowBackIosIcon style={{color: 'yellow'}} />
          </IconButton>
        }
        {
          pagination.next &&
          <IconButton onClick={nextPage}>
            <ArrowForwardIosIcon style={{color: 'yellow'}} />
          </IconButton>
        }

      </Box>
    </>
  )
}

export default PeopleListContainer