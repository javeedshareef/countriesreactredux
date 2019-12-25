import axios from 'axios';
import { countriesFetched } from '../action';
import store from '../store';

export const getCountries = async () => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    const action = countriesFetched(res.data);
    store.dispatch(action);
};