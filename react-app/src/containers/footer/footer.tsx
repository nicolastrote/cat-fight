// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponentElement } from 'react';

import './footer.scss';

function Footer(): FunctionComponentElement<JSX.Element> {
    return (
        <div className="footer">
            <p>
                Made with <span className="heart">♥</span> by{' '}
                <a className="sign" target="_blank" rel="noopener noreferrer" href="https://codepen.io/nicolastrote">
                    Nicolas Trote
                </a>
            </p>
        </div>
    );
}

export default Footer;
