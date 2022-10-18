import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { StationDetailConstant } from "./stationDetailConstant";



const initialState = {
    basicDetailList: [{}],

    chargingEnableDisableList: [{}],
    chargingPointDeleteList: [{}],
  
   
    stationDetail: {

        isLoading: false,


    },
    
};

export const StationDetailReducers = persistReducer(
    {
        storage,
        key: "stationdetail",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
      
            case StationDetailConstant.BASIC_DETAIL_REQUEST:{
                
                return {
                    ...state,
                    basicDetailList: [],
                    stationDetail: {

                    isLoading: true,
            
            
                },
                };
            }
            case StationDetailConstant.BASIC_DETAIL_RESPONSE: {
            
                return {
                    ...state,
                    basicDetailList: payload,
                    stationDetail: {

                    isLoading: false,
            
            
                },
                };
            }

            case StationDetailConstant.CHARGING_ENABLE_DISABLE_REQUEST:{

                return {
                    ...state,
                    chargingEnableDisableList: [],
                    stationDetail: {

                    isLoading: true,


                },
                };
            }
            case StationDetailConstant.CHARGING_ENABLE_DISABLE_RESPONSE: {

                return {
                    ...state,
                    chargingEnableDisableList: payload,
                    stationDetail: {

                    isLoading: false,
                        

                },
                };
            }

            case StationDetailConstant.CHARGING_POINT_DELETE_REQUEST:{

                return {
                    ...state,
                    chargingPointDeleteList: [],
                    stationDetail: {

                    isLoading: true,


                },
                };

            }
            case StationDetailConstant.CHARGING_POINT_DELETE_RESPONSE: {

                return {
                    ...state,
                    chargingPointDeleteList: payload,
                    deleteSuccess: true,

                    //reload station detail
                    stationDetail: {

                    isLoading: false,
                   

                        

                },
                };

            }

            case StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_REQUEST:{

                return {
                    ...state,
                    chargingEnableDisableList: [],
                    stationDetail: {

                    isLoading: true,


                },
                };
            }
            case StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_RESPONSE: {

                return {
                    ...state,
                    chargingEnableDisableList: payload,
                    stationDetail: {

                    isLoading: false,
                        

                },
                };
            }

            

         
          
           
          

            default:
                return state;
        }
    }
);
