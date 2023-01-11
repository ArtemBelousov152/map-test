import { call, put, takeEvery } from 'redux-saga/effects'
import { requestSlice } from '../store/reducers/requestSlice';
// https://routing.openstreetmap.de/routed-bike/route/v1/driving/30.379257202148434,59.87041621736217;30.382862091064453,59.86714172175382?overview=false&alternatives=true&steps=true

// https://routing.openstreetmap.de/routed-bike/route/v1/driving//59.84660399,30.29496392;59.82934196,30.42423701?overview=false&steps=true&alternatives=true

function* workGetRequestFetch(actions) {
    const {inLat, inLng, outLat, outLng} = actions.payload
    const data = yield call(() => fetch(`https://router.project-osrm.org/route/v1/driving/${inLng},${inLat};${outLng},${outLat}?overview=false&steps=true&alternatives=true`));
    console.log(actions.payload)

    const resultData = yield data.json();
    const steps = resultData.routes[0].legs[0].steps.map(item => {
        return item.maneuver.location.reverse()
    })
    yield put(requestSlice.actions.setPolyline(steps))
}

function* requestSaga() {
    yield takeEvery('request/getRequest', workGetRequestFetch)
}

export default requestSaga;