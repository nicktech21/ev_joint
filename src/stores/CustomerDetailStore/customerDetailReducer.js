import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import { CustomerDetailConstant } from "./customerDetailConstant";
// import { ChargingStationConstant } from "./customerTableConstant";

const initialState = {
    personalDetailList: [{}],
    photosUploadedList: [{}],
    reviewsList: [{}],
    chargingDataList: [{}],
   
    personalDetail: {

        isLoading: true,


    },
    
};

export const CustomerDetailReducer = persistReducer(
    {
        storage,
        key: "customerDetail",
        whitelist: ['personalDetailList','photosUploadedList','chargingDataList', 'reviewsList'],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
            case CustomerDetailConstant.PERSONAL_DETAIL_REQUEST: {
                return {
                    ...state,
                    personalDetailList: [],
                    personalDetail: {

                    isLoading: true,
            
            
                },
                };
            }
            case CustomerDetailConstant.PERSONAL_DETAIL_RESPONSE: {
            
                return {
                    ...state,
                    personalDetailList: payload,
                    personalDetail: {

                    isLoading: false,
            
            
                },
                };
            }
           
            case CustomerDetailConstant.PHOTOS_UPLOADED_REQUEST: {
                return {
                    ...state,
                    photosUploadedList: [],
                    personalDetail: {

                    isLoading: true,
            
            
                },
                };
            }
            
            case CustomerDetailConstant.PHOTOS_UPLOADED_RESPONSE: {
            
                return {
                    ...state,
                    photosUploadedList: payload,
                    personalDetail: {

                    isLoading: false,
            
            
                },
                };
            }

            case CustomerDetailConstant.REVIEWS_REQUEST: {
                return {
                    ...state,
                    reviewsList: [],
                    reviews: {

                    isLoading: true,
            
            
                },
                };
            }

            case CustomerDetailConstant.REVIEWS_RESPONSE: {
            
                return {
                    ...state,
                    reviewsList: payload,
                    reviews: {

                    isLoading: false,
            
            
                },
                };
            }
            case CustomerDetailConstant.CHARGING_DATA_REQUEST:{
                return {
                    ...state,
                    chargingDataList: [],
                    personalDetail: {

                    isLoading: true,
            
            
                },
                };
            }
            case CustomerDetailConstant.CHARGING_DATA_RESPONSE: {
            
                return {
                    ...state,
                    chargingDataList: payload,
                    personalDetail: {

                    isLoading: false,
            
            
                },
                };
            }
           



            default:
                return state;
        }
    }
);
