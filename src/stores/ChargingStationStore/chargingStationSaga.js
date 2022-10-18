import { call, put, takeLatest } from "@redux-saga/core/effects";
import { ChargingStationConstant } from "./chargingStationConstant";
import { chargingStationApi } from "./chargingStationApi";
import { chargingStationParser } from "./chargingStationParser";



function* getChargingStationList(id) {
    let {vendor_id} = id;
    try {
        yield put({ type: ChargingStationConstant.CHARGING_STATION_REQUEST });
        

        const res = yield call(chargingStationApi.getChargingStations,vendor_id);


        const payload = chargingStationParser.chargingStation(res);
      
        yield put({
            type: ChargingStationConstant.CHARGING_STATION_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        yield put({
            type: ChargingStationConstant.CHARGING_STATION_RESPONSE,
            payload: [],
        });
    }
}

function* deleteChargingStation({payload}) {
 const    {id} = payload;
    try {
        yield put({ type: ChargingStationConstant.CHARGING_STATION_DELETE_REQUEST });
        const res = yield call(chargingStationApi.deleteChargingStation,{id});
        yield put({
            type: ChargingStationConstant.CHARGING_STATION_DELETE_RESPONSE,
            payload: res,
        });
    } catch (e) {
        yield put({
            type: ChargingStationConstant.CHARGING_STATION_DELETE_RESPONSE,
            payload: {},
        });
    }
}

function* detailChargingStation({payload}) {
    const    {id} = payload;
          
           try {
           yield put({ type: ChargingStationConstant.CHARGING_STATION_DETAIL_REQUEST });
           const res = yield call(chargingStationApi.ChargingStationDetail,{id});

           console.log(res, id);
           const payload = chargingStationParser.chargingStationDetail(res);

           console.log(payload);
         
           yield put({
               type: ChargingStationConstant.CHARGING_STATION_DETAIL_RESPONSE,
               payload: payload,
           });
       } catch (e) {
        console.log(e);
           yield put({
               type: ChargingStationConstant.CHARGING_STATION_DETAIL_RESPONSE,
               payload: {},
           });
       }
   }



function* getChargingPointList(id) {
          let {station_id} = id;
       try {
           yield put({ type: ChargingStationConstant.GET_CHARGING_POINT_REQUEST });
           const res = yield call(chargingStationApi.getChargingPoint,station_id);
           const payload = chargingStationParser.chargingPoint(res);
           yield put({
               type: ChargingStationConstant.GET_CHARGING_POINT_RESPONSE,
               payload: payload,
               
           });
       } catch (e) {
        console.log(e);
           yield put({
               type: ChargingStationConstant.GET_CHARGING_POINT_RESPONSE,
               payload: {},
           });
       }
   }



   function* deleteChargingConnector({payload}) {
    const { id } = payload;
  

    try {
      yield put({type: ChargingStationConstant.DELETE_CHARGING_CONNECTOR_REQUEST});
      const res = yield call(chargingStationApi.DeleteChargingConnectorApi,{id})
      const payload = res;
      yield put({
        type: ChargingStationConstant.DELETE_CHARGING_CONNECTOR_RESPONSE,
        payload:payload,
      });
    } catch (e) {
        console.log(e);
      yield put({
        type: ChargingStationConstant.DELETE_CHARGING_CONNECTOR_RESPONSE,
        payload: [],
      });
    }
  }


export function* registerChargingStationSaga(){
    yield takeLatest(ChargingStationConstant.CHARGING_STATION_SAGA, getChargingStationList);
    yield takeLatest(ChargingStationConstant.GET_CHARGING_POINT_SAGA, getChargingPointList);
    yield takeLatest(ChargingStationConstant.CHARGING_STATION_DELETE_SAGA, deleteChargingStation);
    yield takeLatest(ChargingStationConstant.DELETE_CHARGING_CONNECTOR_SAGA, deleteChargingConnector);
    yield takeLatest(ChargingStationConstant.CHARGING_STATION_DETAIL_SAGA, detailChargingStation);
}
 