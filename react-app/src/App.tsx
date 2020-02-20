import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

import HomePage from './containers/homePage/HomePage';
import TopBar from './containers/topBar/TopBar';
import SearchPage from './containers/searchPage/SearchPage';

import './App.scss';

const history = createHistory();

function App(): React.FunctionComponentElement<JSX.Element> {

    return (
        <div className="App">
            <Router history={history}>
                <TopBar />
                <Route path="/" exact component={HomePage} />
                <Route path="/search" exact component={SearchPage} />
            </Router>
        </div>
    );
}

export default App;
