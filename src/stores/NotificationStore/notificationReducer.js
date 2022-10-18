import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { NotificationConstant } from "./notificationConstant";

const initialState = {
    notificationList: [{}],
   
    notification: {

        isLoading: false,


    },
    
};

export const NotificationReducers = persistReducer(
    {
        storage,
        key: "notification",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
            case NotificationConstant.NOTIFICATION_REQUEST: {
                return {
                    ...state,
                   notificationList: [],
                   notification: {

                    isLoading: true,
            
            
                },
                };
            }
            case NotificationConstant.NOTIFICATION_RESPONSE: {
            
                return {
                    ...state,
                    notificationList: payload,
                    notification: {

                    isLoading: false,
            
            
                },
                };
            }
           

            default:
                return state;
        }
    }
);
