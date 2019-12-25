import { getCountries } from "./services/countries";

export default (state = { countries: [] }, action) => {
    let newState = state;

    switch (action.type) {
        case 'CALL_API':
            getCountries();
            return state;

        case 'RESPONSE_RECEIVED':
            newState = { ...state, ...{ countries: action.data } };
            return newState;

        case 'SHOW_DETAILS':
            const countries = state.countries.map(c => c === action.country ? { ...c, isExpanded: true } : c);
            newState = { ...state, ...{ countries } };
            return newState;
        default:
            return state;
    }

};