import { call, put, takeLatest } from "@redux-saga/core/effects";
import { VendorConstant } from "./vendorConstant";
import { VendorApi } from "./vendoApi";
import { VendorParser } from "./vendorParser";

function* getVendorTable() {
    try {

        yield put({ type: VendorConstant.VENDOR_TABLE_REQUEST });
        

        const res = yield call(VendorApi.getVendor);

          const payload = VendorParser.getVendor(res);

    

        yield put({
            type: VendorConstant.VENDOR_TABLE_RESPONSE,
            payload:payload,
        });
    } catch (e) {
         console.log(e);
        yield put({
            type: VendorConstant.VENDOR_TABLE_RESPONSE,
            payload: [],
        });
    }
}

export function* registerVendorSaga() {
    yield takeLatest(VendorConstant.VENDOR_TABLE_SAGA, getVendorTable);   
}
