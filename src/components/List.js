import React, { Fragment } from 'react'
import PeopleCard from './PeopleCard'
import { Grid } from '@material-ui/core'

const walk = (people, index) => {
  let peopleId = people.url.split('/')[people.url.split('/').length - 2]
  let image = process.env.PUBLIC_URL + '/images/people/' + peopleId + '.jpg'
  return <PeopleCard key={index} name={people.name} image={image} />
}

const List = ({ peopleData }) => {
  return (
    <Fragment>
      <h1 className='title-white'>Lista de Personajes</h1>
      <Grid container spacing={24} justify='center'>
        { peopleData.map(walk) }
      </Grid>
    </Fragment>
  )
}

export default List