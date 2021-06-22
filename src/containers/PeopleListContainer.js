import React, { Component, Fragment } from 'react'
import axios from 'axios'
import List from '../components/List'
import AppNav from '../components/AppNav'
class PeopleListContainer extends Component {

  state = {
    peopleData: []
  }

  componentDidMount () {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      const peopleData = res.data.results

      this.setState({
        peopleData
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render () {
    const { peopleData } = this.state

    return (
      <Fragment>
        <AppNav />
        <List peopleData={peopleData} />
      </Fragment>
    )
  }
}

export default PeopleListContainer