import { call, put, takeLatest } from "@redux-saga/core/effects";
import { commonApis } from "./commonApis";
import { commonParsers } from "./commonParsers";
import { commonConstants } from "./commonConstants";

function* vehicleMasterSaga( models ) {
   

    let id= models.payload.id;
    let type= models.type;
    
    try {
        yield put({ type: commonConstants.VEHICLES_MASTER_REQUEST });
        
        const res = yield call(commonApis.getVehicleMasterData,id);
        const payload = commonParsers.vehiclesMasterData(res);
        
        yield put({ type: commonConstants.VEHICLES_MASTER_RESPONSE, payload });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }
}

function* manufacturerSaga({ type }) {
    try {
        yield put({ type: commonConstants.VEHICLES_MANUFACTURER_REQUEST });
        
        const res = yield call(commonApis.getVehicleManufacturerData);
        const payload = commonParsers.manufacturerData(res);
        
        
        yield put({ type: commonConstants.VEHICLES_MANUFACTURER_RESPONSE, payload });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }
}


function* locationSaga( {type, vendor_id} ) {
    // let { vendor_id } = id.vendor_id;
    try {
        yield put({ type: commonConstants.LOCATION_REQUEST });
        
        const res = yield call(commonApis.getLocationData,vendor_id);


        const payload = commonParsers.locationData(res);

 
        
        yield put({ type: commonConstants.LOCATION_RESPONSE, payload });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }
}

function* amenitiesSaga({ type }) {
    try {
        yield put({ type: commonConstants.AMENITIES_REQUEST });
        
        const res = yield call(commonApis.getAmenitiesData);
        const payload = commonParsers.amenitiesData(res);
        
        yield put({ type: commonConstants.AMENITIES_RESPONSE, payload });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }
}


function* networkSaga({ type }) {
    try {
        yield put({ type: commonConstants.NETWORK_REQUEST });
        
        const res = yield call(commonApis.getNetworkData);
        const payload = commonParsers.networkData(res);
        
        yield put({ type: commonConstants.NETWORK_RESPONSE, payload });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }
}

function* attachmentSaga({ type, payload }) {
    try {
        yield put({ type: commonConstants.ATTACHMENT_UPLOAD_REQUEST });

        const res = yield call(commonApis.uploadAttachment, payload);
        const formData = commonParsers.uploadAttachment(res);

        yield put({ type: commonConstants.ATTACHMENT_UPLOAD_RESPONSE, formData });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }
}




// CHARGER  TYPES
function* chargerTypesSaga({ type }) {
    try {
        yield put({ type: commonConstants.CHARGER_TYPES_REQUEST });
        
        const res = yield call(commonApis.chargerTypesApi);
        const payload = commonParsers.networkData(res);
        yield put({ type: commonConstants.CHARGER_TYPES_RESPONSE, payload });
    } catch (error) {
        console.log(`Action ${type} failed with `, error);
    }

}



export function* registerCommonSagas() {
    yield takeLatest(commonConstants.VEHICLES_MASTER_SAGA, vehicleMasterSaga);
    yield takeLatest(commonConstants.LOCATION_SAGA, locationSaga);
    yield takeLatest(commonConstants.VEHICLES_MASTER_SAGA, manufacturerSaga);
    yield takeLatest(commonConstants.AMENITIES_SAGA, amenitiesSaga);
    yield takeLatest(commonConstants.ATTACHMENT_UPLOAD_SAGA, attachmentSaga);
    yield takeLatest(commonConstants.NETWORK_SAGA, networkSaga);
    yield takeLatest(commonConstants.CHARGER_TYPES_SAGA, chargerTypesSaga);
   
}
