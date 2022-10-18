import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import { HelpSupportConstant } from "./helpSupportConstant";


const initialState = {
    helpSupportList: [{}],
    faqList: [{}],
   
    helpSupport: {

        isLoading: false,


    },
    
};

export const HelpSupportReducers = persistReducer(
    {
        storage,
        key: "helpSupport",
        whitelist: [],
    },
    (state = initialState, { type, payload }) => {
        switch (type) {
      
            case HelpSupportConstant.HELP_SUPPORT_REQUEST:{
                return {
                    ...state,
                    helpSupportList: [],
                    helpSupport: {

                    isLoading: true,
            
            
                },
                };
            }
            
            case HelpSupportConstant.HELP_SUPPORT_RESPONSE: {
            
                return {
                    ...state,
                    helpSupportList: payload,
                    helpSupport: {

                    isLoading: false,
            
            
                },
                };
            }
            case HelpSupportConstant.FAQ_REQUEST:{
                return {
                    ...state,
                    faqList: [],
                    helpSupport: {

                    isLoading: true,
            
            
                },
                };
            }
            case HelpSupportConstant.FAQ_RESPONSE: {
            
                return {
                    ...state,
                    faqList: payload,
                    helpSupport: {

                    isLoading: false,
            
            
                },
                };
            }
           

            default:
                return state;
        }
    }
);
