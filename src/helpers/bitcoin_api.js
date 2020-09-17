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

const fetchBitcoinMarketPrice = (start, end) => {
    return axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;

        if (response.data.bpi) {
            let _graph_arr = [];
            Object.keys(response.data.bpi).map(function (k) {
                _graph_arr.push({
                    x: k,
                    y: response.data.bpi[k]
                })
            })
            return _graph_arr;
        } else {
            throw response.data;
        }

    }).catch(err => {
        throw err[1];
    });
}

export {
    fetchBitcoinPrice,
    fetchEthereumPrice,
    fetchLitcoinPrice,
    fetchBitcoinMarketPrice
}