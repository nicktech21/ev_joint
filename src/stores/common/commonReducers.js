import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

// import { config } from "config";
import { commonConstants } from "./commonConstants";

const initialState = {
    vehiclesMasterData: [],
    manufacturerData: [],
    locationData: [],
    amenitiesData: [],
    attachmentData: [],
    networkData: [],
    chargerTypes: [],


    vehiclesMaster: {
        isLoading: false,
    },

    locationMaster: {
        isLoading: false,
    },
    manufacturerMaster: {
        isLoading: false,
    },
    amenitiesMaster: {
        isLoading: false,
    },
    attachmentMaster: {
        isLoading: false,
    },
    networkMaster: {
        isLoading: false,
    },
    chargerMaster: {
        isLoading: false,
    }
    
};

export const commonReducers = persistReducer(
    {
        storage,
        key: "common",
        whitelist: ["vehiclesMasterData", "locationData", "manufacturerData",],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
           
            case commonConstants.VEHICLES_MASTER_REQUEST: {
                return {
                    ...state,
                    vehiclesMasterData: [],
                    vehiclesMaster: {
 
                     isLoading: true,
             
             
                 },
                };
            }

            case commonConstants.VEHICLES_MASTER_RESPONSE: {
                return {
                    ...state,
                    vehiclesMasterData: payload,
                    vehiclesMaster: {

                        isLoading: false,
                
                
                    },
                };
            }

            case commonConstants.LOCATION_REQUEST: {
                return {
                    ...state,
                    locationData: [],
                    locationMaster: {
 
                     isLoading: true,
             
             
                 },
                };
            }

            case commonConstants.LOCATION_RESPONSE: {
                return {
                    ...state,
                    locationData: payload,
                    locationMaster: {

                        isLoading: false,
                
                
                    },
                };
            }


            case commonConstants.VEHICLES_MANUFACTURER_REQUEST: {
                return {
                    ...state,
                    manufacturerData: [],
                    manufacturerMaster: {
 
                     isLoading: true,
             
             
                 },
                };
            }

            case commonConstants.VEHICLES_MANUFACTURER_RESPONSE: {
                return {
                    ...state,
                    manufacturerData: payload,
                    manufacturerMaster: {

                        isLoading: false,
                
                
                    },
                };
            }

            case commonConstants.AMENITIES_REQUEST: {
                return {
                    ...state,
                    amenitiesData: [],
                    amenitiesMaster: {

                        isLoading: true,

                    },
                };
            }

            case commonConstants.AMENITIES_RESPONSE: {
                return {
                    ...state,
                    amenitiesData: payload,
                    amenitiesMaster: {

                        isLoading: false,

                    },
                };
            }

            case commonConstants.ATTACHMENT_UPLOAD_REQUEST: {
                return {
                    ...state,
                    attachmentData: [],
                    attachmentMaster: {

                        isLoading: true,

                    },
                };
            }
            case commonConstants.ATTACHMENT_UPLOAD_RESPONSE: {
                return {
                    ...state,
                    attachmentData: payload,
                    attachmentMaster: {

                        isLoading: false,

                    },
                };
            }
            case commonConstants.NETWORK_REQUEST: {
                return {
                    ...state,
                    networkData: [],
                    networkMaster: {

                        isLoading: true,

                    },
                };
            }
            case commonConstants.NETWORK_RESPONSE: {
                return {
                    ...state,
                    networkData: payload,
                    networkMaster: {

                        isLoading: false,

                    },
                };
            }

            case commonConstants.CHARGER_TYPES_REQUEST: {
                return {
                    ...state,
                    chargerTypes: [],
                    chargerMaster: {

                        isLoading: true,

                    },
                };
            }
            case commonConstants.CHARGER_TYPES_RESPONSE: {
                return {
                    ...state,
                    chargerTypes: payload,
                    chargerMaster: {

                        isLoading: false,

                    },
                };
            }
            

          

            default:
                return state;
        }
    }
);
