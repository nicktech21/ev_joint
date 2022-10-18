
import { LoginConstant } from "./loginConstant";

const loginAction = {};



loginAction.updateAuthData = (payload) => ({
  type: LoginConstant.LOGIN_DATA,
  payload : payload,
 
}

);


loginAction.logout = () => ({
  type: LoginConstant.LOGOUT_SAGA,
});




export { loginAction};
