import querystring from 'querystring';
import axios from 'axios';
const APIURL = 'https://api.nytimes.com/svc';

export const search = (data: any) => {
    Object.keys(data).forEach(key => {
        data['api-key'] = 'you New York Times API key';
        if (!data[key]) {
            delete data[key];
        }
    });

    return axios.get(`${APIURL}/search/v2/articlesearch.json?${querystring.encode(data)}`);
};

export const getArticles = (section: any) =>
    axios.get(`${APIURL}/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_APIKEY}`);
