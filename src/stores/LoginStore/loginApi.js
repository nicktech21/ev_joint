import { axios } from "../../helper/axios";
import { LoginConstant } from "./loginConstant";

const loginApi = {};

loginApi.login = ({ email, password }) => {

    const postData ={
        email,
        password,  
    };

   return axios.post(LoginConstant.LOGIN_API, postData);
};



export { loginApi };
