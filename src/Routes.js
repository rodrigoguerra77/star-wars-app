import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PeopleListContainer from './containers/PeopleListContainer'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={PeopleListContainer} />
        </Switch>
    )
}

export default Routes