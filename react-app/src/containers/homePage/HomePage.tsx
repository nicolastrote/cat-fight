// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponentElement } from 'react';

import { ReactComponent as Logo } from './logo.svg';
import './HomePage.scss';

function HomePage(): FunctionComponentElement<JSX.Element> {
    return (
        <div className="box">
            <div className="home-page">
                <Logo className="logo" />
                <p>Welcome to CatFight.</p>
            </div>
        </div>
    );
}

export default HomePage;
