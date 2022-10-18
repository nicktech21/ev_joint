import { call, put, takeLatest } from "@redux-saga/core/effects";
import { chargingDataApi } from "./chargingDataApi";
import { ChargingDataConstant } from "./chargingDataConstant";
// import { ChargingStationConstant } from "./chargingStationConstant";
// import { chargingStationApi } from "./chargingStationApi";



function* getChargingDataList() {
    
    try {

        
        
        yield put({type: ChargingDataConstant.CHARGING_DATA_REQUEST});
       
        
        const res = yield call(chargingDataApi.getChargingData)

        const payload = res ;

        yield put({
            type: ChargingDataConstant.CHARGING_DATA_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: ChargingDataConstant.CHARGING_DATA_RESPONSE,
            payload: [],
        });
    }
}



export function* registerChargingDataSaga() {
    yield takeLatest(ChargingDataConstant.CHARGING_DATA_SAGA, getChargingDataList);
}
