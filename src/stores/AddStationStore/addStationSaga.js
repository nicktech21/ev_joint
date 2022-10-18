import { call, put, takeLatest } from "@redux-saga/core/effects";
import addStationApis from "./addStationApi";
import { addStationConstants } from "./addStationConstant";


function* deleteAmenity({payload}) {
    const { id } = payload;
  

    try {
      yield put({type: addStationConstants.REMOVE_AMENITIES_REQUEST});
      const res = yield call(addStationApis.RemoveAmenities_Api,{id})
      const payload = res;
      yield put({
        type: addStationConstants.REMOVE_AMENITIES_RESPONSE,
        payload:payload,
      });
    } catch (e) {
        console.log(e);
      yield put({
        type: addStationConstants.REMOVE_AMENITIES_RESPONSE,
        payload: [],
      });
    }
  }



export function* addChargingStationSaga(){
    yield takeLatest(addStationConstants.REMOVE_AMENITIES_SAGA, deleteAmenity);
    
}
 