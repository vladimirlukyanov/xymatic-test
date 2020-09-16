import axios from 'axios';

// Login Method
// https://api.coinlore.net/api/ticker/?id=1
const fetchBitcoinPrice = () => {
    return axios.get('https://api.coinlore.net/api/ticker/?id=1').then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}

export {
    fetchBitcoinPrice
}