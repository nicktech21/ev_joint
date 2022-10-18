import { call, put, takeLatest } from "@redux-saga/core/effects";
import {BookingTableConstant } from "./bookingTableConstant";
import { bookingTableApi } from "./bookingTableApi";
import { bookingTableParser } from "./bookingTableParser";



function* getBookingTableList({payload}) {
    let { status, model_id, station_id, manufacturer_id, from_date, to_date } = payload;

    try {
        yield put({ type: BookingTableConstant.BOOKING_TABLE_REQUEST });
        
        
        const res = yield call(bookingTableApi.getbookingTable, { model_id, station_id, manufacturer_id, status, from_date, to_date });

        
        const payload = bookingTableParser.bookingTable(res);

       
    
        yield put({
            type: BookingTableConstant.BOOKING_TABLE_RESPONSE,
            payload:payload,
        });
       

    } catch (e) {
        
        console.log(e);

        yield put({
            type: BookingTableConstant.BOOKING_TABLE_RESPONSE,
            payload: [],
        });
       

    }
}



export function* registerBookingTableSaga() {
    yield takeLatest(BookingTableConstant.BOOKING_TABLE_SAGA, getBookingTableList);
}
