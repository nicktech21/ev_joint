import { put, takeLatest, call } from "@redux-saga/core/effects";
import { localStorageStore } from "stores/localStorage";
import { LoginConstant } from "./loginConstant";

function* logoutSaga() {
    yield put({ type: LoginConstant.RESET_AUTH_DATA });
    localStorageStore.resetToken();
   
}




export function* loginSagas() {
    yield takeLatest(LoginConstant.LOGOUT_SAGA, logoutSaga);
  
    
}
