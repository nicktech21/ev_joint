import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { ChargingStationConstant } from "./chargingStationConstant";

const initialState = {
    chargingStationList: [],
    deleteChargingStation: [],
    chargingPointList: [],
    deleteChargingConnectorList: [{}],
    chargingDetailList:[], 
    chargingStation: {

        isLoading: false,


    },
    
};

export const ChargingStationReducers = persistReducer(
    {
        storage,
        key: "chargingStation",
        whitelist: ['chargingPointList',"chargingDetailList"],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
            case ChargingStationConstant.CHARGING_STATION_REQUEST: {
                return {
                    ...state,
                   chargingStationList: [],
                   chargingStation: {

                    isLoading: true,
            
            
                },
                };
            }
            case ChargingStationConstant.CHARGING_STATION_RESPONSE: {
            
                return {
                    ...state,
                   chargingStationList: payload,
                   chargingStation: {

                    isLoading: false,
            
            
                },
                };
            }
            case ChargingStationConstant.CHARGING_STATION_DELETE_REQUEST: {
                return {
                    ...state,
                    deleteChargingStation: [],
                    chargingStation: {

                        isLoading: true,


                    },
                };
            }
            case ChargingStationConstant.CHARGING_STATION_DELETE_RESPONSE: {
                return {
                    ...state,
                    deleteChargingStation: payload,
                    chargingStation: {
                    isLoading: false,
                    },
                };
            }
            case ChargingStationConstant.CHARGING_STATION_DETAIL_REQUEST: {
                return {
                    ...state,
                    chargingDetailList: [],
                    chargingStation: {

                        isLoading: true,


                    },
                };
            }

            case ChargingStationConstant.CHARGING_STATION_DETAIL_RESPONSE: {
                return {
                    ...state,
                    chargingDetailList: payload,
                    chargingStation: {

                        isLoading: false,


                    },
                };
            }





            //charging point
            case ChargingStationConstant.GET_CHARGING_POINT_REQUEST: {
                return {
                    ...state,
                    chargingPointList: [],
                    chargingStation: {

                        isLoading: true,


                    },
                };
            }
            case ChargingStationConstant.GET_CHARGING_POINT_RESPONSE: {
                return {
                    ...state,
                    chargingPointList: payload,
                    chargingStation: {

                        isLoading: false,


                    },
                };
            }
            
           
            case ChargingStationConstant.DELETE_CHARGING_CONNECTOR_REQUEST:{

                return {
                    ...state,
                    deleteChargingConnectorList: [],
                    chargingStation: {

                    isLoading: true,


                },
                };

            }
            case ChargingStationConstant.DELETE_CHARGING_CONNECTOR_RESPONSE: {

                return {
                    ...state,
                    deleteChargingConnectorList: payload,
                    deleteSuccess: true,

                    chargingStation: {

                    isLoading: false,
 
                },
                };

            }


            default:
                return state;
        }
    }
);
