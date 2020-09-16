import {
    GET_BITCOIN_PRICE_SUCCESS, GET_ETHEREUM_PRICE_SUCCESS, GET_LITCOIN_PRICE_SUCCESS,
} from './actionTypes';

const miniWidget = (state = [], action) => {
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

export default miniWidget;
