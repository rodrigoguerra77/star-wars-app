import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PeopleDescription from '../components/PeopleDescription'
import AppNav from '../components/AppNav'
import config from '../config'

const PeopleContainer = () => {
  const [peopleData, setPeopleData] = useState({
    peopleId: '',
    name: '',
    birth_year: '',
    gender: '',
    homeWorld: '',
    films: [],
  })
  const { peopleId } = useParams()

  useEffect(() => {
    function getData() {
      axios
        .get(`${config.API_URL}people/${peopleId}/`)
        .then((res) => {
          const { name, birth_year, gender, films, homeworld } = res.data
          setPeopleData({
            peopleId,
            name,
            gender,
            homeworld,
            birth_year,
            films,
          })
        })
    }
    getData()
  }, [peopleId])

  return (
    <>
      <AppNav />
      <PeopleDescription peopleData={peopleData} />
    </>
  )
}

export default PeopleContainer
