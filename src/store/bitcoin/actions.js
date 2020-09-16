
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
