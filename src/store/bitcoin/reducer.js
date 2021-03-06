import {
    GET_BITCOIN_PRICE_SUCCESS,
    GET_ETHEREUM_PRICE_SUCCESS,
    GET_LITCOIN_PRICE_SUCCESS,
    GET_BITCOIN_MARKET_MONTH_SUCCESS,
    GET_BITCOIN_MARKET_SIXMONTH_SUCCESS,
    GET_BITCOIN_MARKET_YEAR_SUCCESS,
    GET_BITCOIN_MARKET_ALL_SUCCESS
} from './actionTypes';

export const miniWidget = (state = [], action) => {
    switch (action.type) {
        case GET_BITCOIN_PRICE_SUCCESS: {
            return {
                ...state,
                bitcoin: action.data[0]
            };
        }

        case GET_ETHEREUM_PRICE_SUCCESS: {
            return {
                ...state,
                ethereum: action.data[0]
            };
        }

        case GET_LITCOIN_PRICE_SUCCESS: {
            return {
                ...state,
                litcoin: action.data[0]
            };
        }

        default:
            return state;
    }
};

export const overView = (state = [], action) => {
    switch (action.type) {

        case GET_BITCOIN_MARKET_MONTH_SUCCESS: {
            return {
                graph: action.data
            };
        }

        case GET_BITCOIN_MARKET_SIXMONTH_SUCCESS: {
            return {
                graph: action.data
            };
        }

        case GET_BITCOIN_MARKET_YEAR_SUCCESS: {
            return {
                graph: action.data
            };
        }

        case GET_BITCOIN_MARKET_ALL_SUCCESS: {
            return {
                graph: action.data
            };
        }

        default:
            return state;
    }
};
