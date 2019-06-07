import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import Form from './Form'
import PortraitList from './PortraitList';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/form' component={Form} />
            <Route path='/portrait/:id' component={PortraitList}/>
        </Switch>
    </main>
)

export default Main
