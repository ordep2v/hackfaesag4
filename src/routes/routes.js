import React from 'react';
import { Switch, Route } from "react-router-dom";

import Auth from '../screens/Auth'
import Home from '../screens/Home'

export const Routes = () => {
    return(
        <Switch>
            <Route path="/Auth" component={Auth} />
            <Route path="/Home" component={Home} />
        </Switch>
    )

}