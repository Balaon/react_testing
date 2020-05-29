import React, { lazy } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import * as URL from './url';
import Home from '../screens/home/index';
import Shop from '../screens/shop/index';

export default(
    <Router>
        <Switch>
            <Route exact path={URL.HOME} component={ Home }/>
            <Route exact path={URL.SHOP} component={ Shop }/>    
        </Switch>
    </Router>
)