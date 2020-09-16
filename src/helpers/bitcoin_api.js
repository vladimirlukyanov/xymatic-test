import axios from 'axios';

// https://api.coinlore.net/api/ticker/?id=1
const fetchBitcoinPrice = () => {
    return axios.get('https://api.coinlore.net/api/ticker/?id=90').then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}

const fetchEthereumPrice = () => {
    return axios.get('https://api.coinlore.net/api/ticker/?id=80').then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}

const fetchLitcoinPrice = () => {
    return axios.get('https://api.coinlore.net/api/ticker/?id=1').then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}

export {
    fetchBitcoinPrice,
    fetchEthereumPrice,
    fetchLitcoinPrice
}