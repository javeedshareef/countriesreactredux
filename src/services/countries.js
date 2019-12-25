import axios from 'axios';
import { countriesFetched } from '../action';
import store from '../store';

export const getCountries = async (dispatch) => {
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    const action = countriesFetched(res.data);
    store.dispatch(action);
};