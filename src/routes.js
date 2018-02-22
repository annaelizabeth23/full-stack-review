import React from 'react';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import Account from './components/Account'

export default <React.Fragment>
    <Route exact path = '/' component={Login} />
    <Route exact path = '/account' component={Account} />
</React.Fragment>