import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { addStationConstants } from "./addStationConstant";



const initialState = {

    deleteChargingConnectorList: [{}],
    deleteAmenity: [{}],

    chargingStation: {

        isLoading: false,


    },

};


export const AddStationReducers = persistReducer(
    {
        storage,
        key: "chargingStation",
        whitelist: ['chargingPointList'],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {

            case addStationConstants.REMOVE_AMENITIES_REQUEST: {

                return {
                    ...state,
                    deleteChargingConnectorList: [],
                    deleteAmenity: [],

                    chargingStation: {

                        isLoading: true,


                    },


                };

            }
            case addStationConstants.REMOVE_AMENITIES_RESPONSE: {

                return {
                    ...state,
                    deleteAmenity: payload,
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