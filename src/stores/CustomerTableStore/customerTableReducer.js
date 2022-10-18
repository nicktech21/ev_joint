import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { CustomerTableConstant } from "./customerTableConstant";
// import { ChargingStationConstant } from "./customerTableConstant";

const initialState = {
    customerTableList: [],
   
    customerTable: {

        isLoading: false,


    },
    
};

export const CustomerTableReducer = persistReducer(
    {
        storage,
        key: "customerTable",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
            case CustomerTableConstant.CUSTOMER_TABLE_REQUEST: {
                return {
                    ...state,
                    customerTableList: [],
                    customerTable: {

                    isLoading: true,
            
            
                },
                };
            }
            case CustomerTableConstant.CUSTOMER_TABLE_RESPONSE: {
            
                return {
                    ...state,
                    customerTableList: payload,
                    customerTable: {

                    isLoading: false,
            
            
                },
                };
            }
           

            default:
                return state;
        }
    }
);
