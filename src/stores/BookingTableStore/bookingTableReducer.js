import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { BookingTableConstant } from "./bookingTableConstant";

const initialState = {
    bookingTableList: [],
   
    bookingTable: {

        isLoading: false,


    },
    
};

export const BookingTableReducers = persistReducer(
    {
        storage,
        key: "bookingTable",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
            case BookingTableConstant.BOOKING_TABLE_REQUEST: {
                return {
                    ...state,
                    bookingTableList: [],
                    bookingTable: {

                    isLoading: true,
            
            
                },
                };
            }
            case BookingTableConstant.BOOKING_TABLE_RESPONSE: {
            
                return {
                    ...state,
                    bookingTableList: payload,
                    bookingTable: {

                    isLoading: false,
            
            
                },
                };
            }
           

            default:
                return state;
        }
    }
);
