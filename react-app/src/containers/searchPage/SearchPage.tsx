import React from 'react';
import { useTranslation } from 'react-i18next';

import './SearchPage.scss';

function SearchPage(): React.FunctionComponentElement<JSX.Element> {
    const { t } = useTranslation();

    return (
        <div className="SearchPage">
            <h1 className="center">{t('Search')}</h1>
        </div>
    );
}
export default SearchPage;
