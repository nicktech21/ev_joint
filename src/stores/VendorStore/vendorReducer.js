// import persistReducer from "redux-persist/lib/persistReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { VendorConstant } from "./vendorConstant";


const initialState = {
   VendorList: [],
     
};

export const VendorReducers = persistReducer(
    {
        storage,
        key: "Vendors",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
            case VendorConstant.VENDOR_TABLE_REQUEST: {
                return {
                    ...state,
                   VendorList: [],
                   Vendors: {

                    isLoading: true,
            
            
                },
                };
            }
            case VendorConstant.VENDOR_TABLE_RESPONSE: {
            
                return {
                    ...state,
                   VendorList: payload,
                   Vendors: {

                    isLoading: false,
            
            
                },
                };
            }
            
           

            default:
                return state;
        }
    }
);
