import moment from 'moment';

import {
    GET_BITCOIN_PRICE,
    GET_ETHEREUM_PRICE,
    GET_LITCOIN_PRICE,
    GET_BITCOIN_MARKET_MONTH,
    GET_BITCOIN_MARKET_SIXMONTH,
    GET_BITCOIN_MARKET_YEAR,
    GET_BITCOIN_MARKET_ALL,
} from './actionTypes';

export const getBitcoinPrice = () => ({
    type: GET_BITCOIN_PRICE
});

export const getEthereumPrice = () => ({
    type: GET_ETHEREUM_PRICE
});

export const getLitcoinPrice = () => ({
    type: GET_LITCOIN_PRICE
});

export const getBitcoinPriceMonth = () => ({
    type: GET_BITCOIN_MARKET_MONTH,
    start: moment()
        .subtract(1, 'month')
        .format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD')
});

export const getBitcoinPriceSixMonth = () => ({
    type: GET_BITCOIN_MARKET_SIXMONTH,
    start: moment()
        .subtract(6, 'month')
        .format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD')
});

export const getBitcoinPriceYear = () => ({
    type: GET_BITCOIN_MARKET_YEAR,
    start: moment()
        .subtract(1, 'year')
        .format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD')
});

export const getBitcoinPriceAll = () => ({
    type: GET_BITCOIN_MARKET_ALL,
    start: '2013-09-01',
    end: moment().format('YYYY-MM-DD')
});