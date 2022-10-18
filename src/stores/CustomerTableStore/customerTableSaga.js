import { call, put, takeLatest } from "@redux-saga/core/effects";
import { customerTableApi } from "./customerTableApi";
import { CustomerTableConstant } from "./customerTableConstant";
import { customerTableParser } from "./customerTableParser";
// import { ChargingStationConstant } from "./customerTableConstant";
// import { chargingStationApi } from "./customerTableApi";



function* getCustomerTableList({payload}) {
    let { model_id, station_id, manufacturer_id } = payload;
    try {
        yield put({ type: CustomerTableConstant.CUSTOMER_TABLE_REQUEST });
        

        const res = yield call(customerTableApi.getCustomerTable, { model_id, station_id, manufacturer_id });

        const payload = customerTableParser.customer(res);

        
        yield put({
            type: CustomerTableConstant.CUSTOMER_TABLE_RESPONSE,
            payload:payload,
        });
    } catch (e) {
       
        yield put({
            type: CustomerTableConstant.CUSTOMER_TABLE_RESPONSE,
            payload: [],
        });
    }
}



export function* registerCustomerTableSaga() {
    yield takeLatest(CustomerTableConstant.CUSTOMER_TABLE_SAGA, getCustomerTableList);
}
