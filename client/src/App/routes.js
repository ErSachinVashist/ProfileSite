import React from 'react'
import {Route} from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import NotFound from '../helpers/notFound'

const routes=[
    <Route key='profile' exact path='/' component={Profile}/>,
    <Route key='home' path='/home' component={Home}/>,
    <Route key='notFound' component={NotFound}/>
]

export default routes
