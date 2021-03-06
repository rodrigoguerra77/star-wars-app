import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PeopleListContainer from './containers/PeopleListContainer'
import PeopleContainer from './containers/PeopleContainer'
import NotFound from './containers/NotFound'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={PeopleListContainer} />
            <Route exact path='/character/:peopleId' component={PeopleContainer} />
            <Route path='*' component={NotFound} />
        </Switch>
    )
}

export default Routes