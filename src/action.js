export const callApi = () => {
    return {
        type: 'CALL_API'
    }
};

export const countriesFetched = (data) => {
    return {
        type: 'RESPONSE_RECEIVED',
        data
    }
};

export const showDetails = (country) => {
    return {
        type: 'SHOW_DETAILS',
        country
    }
};