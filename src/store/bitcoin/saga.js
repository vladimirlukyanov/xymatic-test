import {all, call, put, takeEvery} from 'redux-saga/effects';
import {
    GET_BITCOIN_PRICE,
    GET_BITCOIN_PRICE_SUCCESS,
    GET_ETHEREUM_PRICE,
    GET_ETHEREUM_PRICE_SUCCESS,
    GET_LITCOIN_PRICE,
    GET_LITCOIN_PRICE_SUCCESS,
    GET_BITCOIN_MARKET_MONTH,
    GET_BITCOIN_MARKET_MONTH_SUCCESS,
    GET_BITCOIN_MARKET_SIXMONTH,
    GET_BITCOIN_MARKET_SIXMONTH_SUCCESS,
    GET_BITCOIN_MARKET_YEAR,
    GET_BITCOIN_MARKET_YEAR_SUCCESS,
    GET_BITCOIN_MARKET_ALL,
    GET_BITCOIN_MARKET_ALL_SUCCESS
} from './actionTypes';
import {fetchBitcoinPrice, fetchEthereumPrice, fetchLitcoinPrice, fetchBitcoinMarketPrice} from '../../helpers/bitcoin_api';

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

function* getBitcoinMarketMonth({start, end}) {
    const result = yield call(fetchBitcoinMarketPrice, start, end);

    try {
        yield put({
            type: GET_BITCOIN_MARKET_MONTH_SUCCESS,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function* getBitcoinMarketSixMonth({start, end}) {
    const result = yield call(fetchBitcoinMarketPrice, start, end);

    try {
        yield put({
            type: GET_BITCOIN_MARKET_SIXMONTH_SUCCESS,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function* getBitcoinMarketYear({start, end}) {
    const result = yield call(fetchBitcoinMarketPrice, start, end);

    try {
        yield put({
            type: GET_BITCOIN_MARKET_YEAR_SUCCESS,
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function* getBitcoinMarketAll({start, end}) {
    const result = yield call(fetchBitcoinMarketPrice, start, end);

    try {
        yield put({
            type: GET_BITCOIN_MARKET_ALL_SUCCESS,
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
            takeEvery(GET_LITCOIN_PRICE, getLitcoinPrice),
            takeEvery(GET_BITCOIN_MARKET_MONTH, getBitcoinMarketMonth),
            takeEvery(GET_BITCOIN_MARKET_SIXMONTH, getBitcoinMarketSixMonth),
            takeEvery(GET_BITCOIN_MARKET_YEAR, getBitcoinMarketYear),
            takeEvery(GET_BITCOIN_MARKET_ALL, getBitcoinMarketAll)
        ]
    )
}

export default marketCapSaga;
