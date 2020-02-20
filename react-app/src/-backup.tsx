// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import logo from './logo.svg';
import './App.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to CatFight.</p>
                <a
                    className="App-link"
                    href="https://github.com/nicolastrote/cat-fight"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CatFight
                </a>
            </header>
        </div>
    );
}

export default App;
