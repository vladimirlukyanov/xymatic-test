import {
    GET_BITCOIN_PRICE_SUCCESS,
} from './actionTypes';

const miniWidget = (state = [], action) => {
    switch (action.type) {
        case GET_BITCOIN_PRICE_SUCCESS: {
            console.log(action.data);
            return action.data;
        }

        default:
            return state;
    }
};

export default miniWidget;
