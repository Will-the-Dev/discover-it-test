import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './layout';
import { CafesList } from './modules';

export function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <CafesList />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
