import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
    GET_BITCOIN_PRICE,
    GET_BITCOIN_PRICE_SUCCESS
} from './actionTypes';
import {fetchBitcoinPrice} from '../../helpers/bitcoin_api';

function* getBitcoinPrice() {
    const result = yield call(fetchBitcoinPrice);

    try {
        yield put({
            type: GET_BITCOIN_PRICE_SUCCESS,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function* marketCapSaga() {
    yield all(
        [
            takeEvery(GET_BITCOIN_PRICE, getBitcoinPrice)
        ]
    )
}

export default marketCapSaga;
