import React, { FunctionComponentElement } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import HomePage from './containers/homePage/HomePage';
import TopBar from './containers/topBar/TopBar';
import SearchPage from './containers/searchPage/SearchPage';
import BreedsPage from './containers/breedsPage/BreedsPage';

import Footer from './containers/footer/footer';

import './App.scss';

const history = createHistory();

function App(): FunctionComponentElement<JSX.Element> {
    return (
        <div>
            <div className="app-page">
                <Router history={history}>
                    <TopBar />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/breeds" exact component={BreedsPage} />
                    <Route path="/search" exact component={SearchPage} />
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default App;
