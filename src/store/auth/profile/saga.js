import {takeEvery, fork, put, all, call} from 'redux-saga/effects';

// Login Redux States
import {EDIT_PROFILE} from './actionTypes';
import {profileSuccess, profileError} from './actions';

//Include Both Helper File with needed methods
import {postProfile} from '../../../helpers/api';

function* editProfile({payload: {user}}) {

    try {
        const response = yield call(postProfile, '/post-fake-profile', {username: user.username, idx: user.idx});
        yield put(profileSuccess(response));

    } catch (error) {
        yield put(profileError(error));
    }
}

export function* watchProfile() {
    yield takeEvery(EDIT_PROFILE, editProfile)
}

function* ProfileSaga() {
    yield all([
        fork(watchProfile),
    ]);
}

export default ProfileSaga;