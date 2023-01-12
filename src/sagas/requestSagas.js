import { call, put, takeEvery } from 'redux-saga/effects'
import { requestSlice } from '../store/reducers/requestSlice';

function* workGetRequestFetch(actions) {
    const data = yield call(() => actions.payload);
    
    const steps = data.routes[0].legs[0].steps.map(item => {
        return item.maneuver.location.reverse()
    })

    yield put(requestSlice.actions.setPolyline(steps))
}

function* requestSaga() {
    yield takeEvery('request/getRequest', workGetRequestFetch)
}

export default requestSaga;