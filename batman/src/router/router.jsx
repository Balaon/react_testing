import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

const RootPage = lazy(() => import('../pages/root'));
const DetailsPage = lazy(() => import('../pages/details'));

export default (
    <Switch>
        <Route exact path={ URL.ROOT } component={ RootPage } />
        <Route exact path={ URL.DETAILS_CODE } component={ DetailsPage } />
    </Switch>
)