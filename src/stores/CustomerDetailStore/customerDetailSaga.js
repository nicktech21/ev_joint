import { call, put, takeLatest } from "@redux-saga/core/effects";

import { customerDetailParser } from "./customerDetailParser";
import { customerDetailApi } from "./customerDetailApi";
import { CustomerDetailConstant } from "./customerDetailConstant";

function* getPersonalDetailList({payload}) {
    const id = payload.id;
    console.log('id in custumor detail saga===',  payload);
  
    
    try {
        yield put({ type: CustomerDetailConstant.PERSONAL_DETAIL_REQUEST });
        
        const res = yield call(customerDetailApi.getpersonalDetail,{id});   
       console.log('ras in custumor detail saga===',  res);
        const payload = customerDetailParser.getpersonalDetail(res); 

        console.log(payload);
        yield put({
            type:CustomerDetailConstant.PERSONAL_DETAIL_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: CustomerDetailConstant.PERSONAL_DETAIL_RESPONSE,
            payload: [],
        });
    }
}



function* getPhotosUploadedList({payload}) {
    const { id } = payload;
    try {
        yield put({ type: CustomerDetailConstant.PHOTOS_UPLOADED_REQUEST });
        
       
        const res = yield call(customerDetailApi.getphotosUploaded,{id});
        
        const payload = res ;
        
      
        
        yield put({
            type:CustomerDetailConstant.PHOTOS_UPLOADED_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        
console.log(e);
        yield put({
            type: CustomerDetailConstant.PHOTOS_UPLOADED_RESPONSE,
            payload: [],
        });
    }
}


function* getReviewsList({payload}) {
    const { id } = payload;
    try {
        yield put({ type: CustomerDetailConstant.REVIEWS_REQUEST });
        
   
        const res = yield call(customerDetailApi.getreviews,{id});
       
        const payload = customerDetailParser.getReviews(res);

       
        
        yield put({
            type:CustomerDetailConstant.REVIEWS_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: CustomerDetailConstant.REVIEWS_RESPONSE,
            payload: [],
        });
    }
}


function* getChargingDataList({payload}) {
    const { id } = payload;
    try {

        
        
        yield put({type: CustomerDetailConstant.CHARGING_DATA_REQUEST});

        const res = yield call(customerDetailApi.getChargingData,{id})
 

       const payload = customerDetailParser.getChargingData(res);
      

       

        yield put({
            type: CustomerDetailConstant.CHARGING_DATA_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: CustomerDetailConstant.CHARGING_DATA_RESPONSE,
            payload: [],
        });
    }
}






export function* registerPersonalDetailSaga() {
    yield takeLatest(CustomerDetailConstant.PERSONAL_DETAIL_SAGA, getPersonalDetailList);
    yield takeLatest(CustomerDetailConstant.PHOTOS_UPLOADED_SAGA, getPhotosUploadedList);
    yield takeLatest(CustomerDetailConstant.REVIEWS_SAGA, getReviewsList);
    yield takeLatest(CustomerDetailConstant.CHARGING_DATA_SAGA, getChargingDataList);


}
