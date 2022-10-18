import { call, put, takeLatest } from "@redux-saga/core/effects";
import { NotificationConstant } from "./notificationConstant";
import { notificationApi } from "./notificationApi";
import { notificationParser } from "./notificationParser";



function* notificationList() {
    try {
        yield put({ type: NotificationConstant.NOTIFICATION_REQUEST });
        
        
        const res = yield call(notificationApi.notifications);

       
        
        const payload = notificationParser.notification(res);

    
        yield put({
            type: NotificationConstant.NOTIFICATION_RESPONSE,
            payload:payload,
        });
       

    } catch (e) {
      
        yield put({
            type: NotificationConstant.NOTIFICATION_RESPONSE,
            payload: [],
        });
       

    }
}



export function* registerNotificationSaga() {
    yield takeLatest(NotificationConstant.NOTIFICATION_SAGA, notificationList);
}
