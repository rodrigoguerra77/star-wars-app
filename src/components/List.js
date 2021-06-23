import React from 'react'
import PeopleCard from './PeopleCard'
import { Grid } from '@material-ui/core'

const walk = (people, index) => {
  let peopleId = people.url.split('/')[people.url.split('/').length - 2]
  let imageUrl = `${process.env.PUBLIC_URL}/images/people/${peopleId}.jpg`

  return <PeopleCard 
    to={`/character/${peopleId}`} 
    key={index} 
    name={people.name} 
    image={imageUrl} 
  />
}

const List = ({ peopleData }) => {
  return (
    <>
      <Grid container justify='center'>
        { peopleData.map(walk) }
      </Grid>
    </>
  )
}

export default List