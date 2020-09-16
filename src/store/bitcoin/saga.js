import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
    GET_BITCOIN_PRICE,
    GET_BITCOIN_PRICE_SUCCESS,
    GET_ETHEREUM_PRICE,
    GET_ETHEREUM_PRICE_SUCCESS,
    GET_LITCOIN_PRICE,
    GET_LITCOIN_PRICE_SUCCESS
} from './actionTypes';
import {fetchBitcoinPrice, fetchEthereumPrice, fetchLitcoinPrice} from '../../helpers/bitcoin_api';

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

function* getEthereumPrice() {
    const result = yield call(fetchEthereumPrice);

    try {
        yield put({
            type: GET_ETHEREUM_PRICE_SUCCESS,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function* getLitcoinPrice() {
    const result = yield call(fetchLitcoinPrice);

    try {
        yield put({
            type: GET_LITCOIN_PRICE_SUCCESS,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function* marketCapSaga() {
    yield all(
        [
            takeEvery(GET_BITCOIN_PRICE, getBitcoinPrice),
            takeEvery(GET_ETHEREUM_PRICE, getEthereumPrice),
            takeEvery(GET_LITCOIN_PRICE, getLitcoinPrice)
        ]
    )
}

export default marketCapSaga;
