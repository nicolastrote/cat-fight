import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './TopBar.scss';

function TopBar({ location }: any) {
    const { pathname } = location;
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: any) => {
        localStorage.setItem('language', lng);
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand href="#home">{t('New York Times App')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" active={pathname === '/'}>
                        {t('Home')}
                    </Nav.Link>
                    <Nav.Link href="/search" active={pathname.includes('/search')}>
                        {t('Search')}
                    </Nav.Link>
                    <NavDropdown title={t('Language')} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => changeLanguage('en')}>{t('English')}</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage('fr')}>{t('French')}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default withRouter(TopBar);
