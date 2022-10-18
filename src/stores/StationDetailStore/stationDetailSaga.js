import { call, put, takeLatest } from "@redux-saga/core/effects";

import { stationDetailApi } from "./stationDetailApi";

import { StationDetailConstant } from "./stationDetailConstant";
import { stationDetailParser } from "./stationDetailParser";

// import { ChargingStationConstant } from "./chargingStationConstant";
// import { chargingStationApi } from "./chargingStationApi";



function* getBasicDetailList({payload}) {
  const { id } = payload;
    try {

        
        
        yield put({type: StationDetailConstant.BASIC_DETAIL_REQUEST});
       

        

        
        const res = yield call(stationDetailApi.getBasicDetail,{id})
        

        const payload = stationDetailParser.getBasicDetail(res);


        

        yield put({
            type: StationDetailConstant.BASIC_DETAIL_RESPONSE,
            payload:payload,
        });
    } catch (e) {
      console.log(e);
        yield put({
            type: StationDetailConstant.BASIC_DETAIL_RESPONSE,
            payload: [],
        });
    }
}





function* chargingEnableDisable({payload}) {
  const { id, status } = payload;

  try {
    yield put({type: StationDetailConstant.CHARGING_ENABLE_DISABLE_REQUEST});
    const res = yield call(stationDetailApi.chargingEnableDisable,{id, status})
    const payload = res;
    yield put({
      type: StationDetailConstant.CHARGING_ENABLE_DISABLE_RESPONSE,
      payload:payload,
    });
  } catch (e) {
    yield put({
      type: StationDetailConstant.CHARGING_ENABLE_DISABLE_RESPONSE,
      payload: [],
    });
  }
}



function* chargingPointEnableDisable({payload}) {
  const { id, status } = payload;

  try {
    yield put({type: StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_REQUEST});
    const res = yield call(stationDetailApi.chargingPointEnableDisable,{id, status})
    const payload = res;
    yield put({
      type: StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_RESPONSE,
      payload:payload,
    });
  } catch (e) {
    yield put({
      type: StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_RESPONSE,
      payload: [],
    });
  }
}


function* chargingPointDelete({payload}) {
  const { id } = payload;

  

  try {
    yield put({type: StationDetailConstant.CHARGING_POINT_DELETE_REQUEST});
    const res = yield call(stationDetailApi.chargingPointDelete,{id})
    const payload = res;
    yield put({
      type: StationDetailConstant.CHARGING_POINT_DELETE_RESPONSE,
      payload:payload,
    });
  } catch (e) {
    yield put({
      type: StationDetailConstant.CHARGING_POINT_DELETE_RESPONSE,
      payload: [],
    });
  }
}




export function* registerStationdetailSaga() {
    yield takeLatest(StationDetailConstant.BASIC_DETAIL_SAGA, getBasicDetailList);
    yield takeLatest(StationDetailConstant.CHARGING_ENABLE_DISABLE_SAGA, chargingEnableDisable);
    yield takeLatest(StationDetailConstant.CHARGING_POINT_DELETE_SAGA, chargingPointDelete);
    yield takeLatest(StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_SAGA, chargingPointEnableDisable); 

    
    


}
