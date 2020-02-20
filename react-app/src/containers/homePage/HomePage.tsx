import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

import { getArticles } from '../../api/Requests';

import './HomePage.scss';

const sections = `arts, automobiles, books, business, fashion, food, health,
home, insider, magazine, movies, national, nyregion, obituaries,
opinion, politics, realestate, science, sports, sundayreview,
technology, theater, tmagazine, travel, upshot, world`
    .replace(/ /g, '')
    .split(',');

function HomePage(): React.FunctionComponentElement<JSX.Element> {
    const [selectedSection, setSelectedSection] = useState('arts');
    const [articles, setArticles] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const { t, i18n } = useTranslation();
    console.log('i18n', i18n);

    const load = async (section: any) => {
        setSelectedSection(section);
        const response = await getArticles(section);
        setArticles(response.data.results || []);
    };

    const loadArticles = async (e: any) => {
        if (!e || !e.target) {
            return;
        }
        setSelectedSection(e.target.value);
        await load(e.target.value);
    };

    const initializeArticles = () => {
        load(selectedSection).then(r => console.log('TODO Warning error', r));
        setInitialized(true);
    };

    useEffect(() => {
        if (!initialized) {
            initializeArticles();
        }
    });

    return (
        <div className="HomePage">
            <div className="col-12">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block d-lg-block d-xl-block">
                        <ListGroup className="sections">
                            {sections.map(s => (
                                <ListGroup.Item key={s} className="list-group-item" active={s === selectedSection}>
                                    <a
                                        href="/#"
                                        className="link"
                                        onClick={() => {
                                            load(s).then(r => console.log('TODO Warning error', r));
                                        }}
                                    >
                                        {t(s)}
                                    </a>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                    <div className="col right">
                        <Form className="d-sm-block d-md-none d-lg-none d-xl-none">
                            <Form.Group controlId="section">
                                <Form.Label>{t('Section')}</Form.Label>
                                <Form.Control as="select" onChange={loadArticles} value={selectedSection}>
                                    {sections.map(s => (
                                        <option key={s} value={s}>
                                            {t(s)}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <h1>{t(selectedSection)}</h1>
                        {articles.map((a: any, i) => (
                            <Card key={i}>
                                <Card.Body>
                                    <Card.Title>{a.title}</Card.Title>
                                    <Card.Img
                                        variant="top"
                                        className="image"
                                        src={
                                            Array.isArray(a.multimedia) && a.multimedia[a.multimedia.length - 1]
                                                ? a.multimedia[a.multimedia.length - 1].url
                                                : null
                                        }
                                    />
                                    <Card.Text>{a.abstract}</Card.Text>
                                    <Button variant="primary" onClick={() => (window.location.href = a.url)}>
                                        {t('Go')}
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
