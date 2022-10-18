import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import { LoginConstant } from "./loginConstant";

const initialState = {
    
    isAuthenticated: false,

    userProfile: {},
    
};

export const LoginReducer = persistReducer(
    {
        storage,
        key: "login",
        whitelist: ["isAuthenticated","userProfile"],
    },
    (state = initialState, { type , payload }) => {
        switch (type) {
            case LoginConstant.LOGIN_DATA: {
                 
                return {
                    ...state,
                    isAuthenticated: true,
                    userProfile: {...payload},
                 
                };
            }
            case LoginConstant.LOGOUT_SAGA: {
               
                return initialState;
            }
 
            default:
                return state;
        }
    }
);
