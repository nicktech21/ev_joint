import { call, put, takeLatest } from "@redux-saga/core/effects";
import { helpSupportApi } from "./helpSupportApi";
import { HelpSupportConstant } from "./helpSupportConstant";
import { helpSupportParser } from "./helpSupportParser";





function* getHelpSupportList() {
    
    try {

        
        
        yield put({type: HelpSupportConstant.HELP_SUPPORT_REQUEST});

        

        
        const res = yield call(helpSupportApi.getHelpSupport)

        const payload=(res)

       
        

        yield put({
            type: HelpSupportConstant.HELP_SUPPORT_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        
        yield put({
            type: HelpSupportConstant.HELP_SUPPORT_RESPONSE,
            payload: [],
        });
    }
}

function* getFaqList(){
    try {

        
        
        yield put({type: HelpSupportConstant.FAQ_REQUEST});

        

        
        const res = yield call(helpSupportApi.getFaq)

        const payload = helpSupportParser.getfaq(res) ;
        

        yield put({
            type: HelpSupportConstant.FAQ_RESPONSE,
            payload:payload,
        });
    } catch (e) {
        
        yield put({
            type: HelpSupportConstant.FAQ_RESPONSE,
            payload: [],
        });
    }

}



export function* registerHelpSupportSaga() {
    yield takeLatest(HelpSupportConstant.HELP_SUPPORT_SAGA, getHelpSupportList);
    yield takeLatest(HelpSupportConstant.FAQ_SAGA, getFaqList);
}
