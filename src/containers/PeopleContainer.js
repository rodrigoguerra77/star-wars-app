import React, { Component, Fragment } from 'react'
import PeopleDescription from '../components/PeopleDescription'
import AppNav from '../components/AppNav'

import axios from 'axios'

class PeopleContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      peopleId: '',
      name: '',
      birthYear: '',
      gender: '',
      homeWorld: '',
      movies: []
    }
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }

  componentDidMount () {
    const { match } = this.props;
    const peopleId = match.params.peopleId
    const peopleUrl = `${process.env.REACT_APP_SWAPI_BASE_URL}people/${peopleId}/`

    this.getData(peopleUrl)
      .then(res => {
        const { name, birth_year, gender, films, homeworld } = res.data

        this.setState({
          peopleId: peopleId,
          name: name,
          birthYear: birth_year,
          gender: gender
        })

        films.map(element => {
          return this.getData(element)
            .then(res => {
              const films = res.data
              
              this.state.movies.push(films.title)
            })
            .catch(err => console.log(err))
        })

        return this.getData(homeworld)
        
      })
      .then(res => {
        const { name } = res.data

        this.setState({
          homeWorld: name
        })

      })
      .catch(err => console.log(err))
  }

  render () {
    const { peopleId, name, birthYear, gender, homeWorld, movies } = this.state
    const imageUrl = `${process.env.PUBLIC_URL}/images/people/${peopleId}.jpg`
console.log(movies);
    return (
      <Fragment>
        <AppNav />
        <PeopleDescription 
          id={peopleId} 
          peopleImage={imageUrl} 
          name={name} 
          birthYear={birthYear} 
          gender={gender} 
          homeWorld={homeWorld} 
          movies={movies} 
        />
      </Fragment>
    )
  }
}

export default PeopleContainer