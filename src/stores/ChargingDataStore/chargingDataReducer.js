import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { ChargingDataConstant } from "./chargingDataConstant";


const initialState = {
    chargingDataList: [],
   
    chargingData: {

        isLoading: false,


    },
    
};

export const ChargingDataReducers = persistReducer(
    {
        storage,
        key: "chargingData",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
      
            case ChargingDataConstant.CHARGING_DATA_REQUEST:{
                return {
                    ...state,
                    chargingDataList: [],
                   chargingData: {

                    isLoading: true,
            
            
                },
                };
            }
            case ChargingDataConstant.CHARGING_DATA_RESPONSE: {
            
                return {
                    ...state,
                    chargingDataList: payload,
                   chargingData: {

                    isLoading: false,
            
            
                },
                };
            }
           

            default:
                return state;
        }
    }
);
