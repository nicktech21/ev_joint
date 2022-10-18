import { axios } from "../../helper/axios";
import { setPasswordConstants } from "./setPasswordConstant";

const setPasswordApis = {};

setPasswordApis.setPassword = ({reset_password_code, password }) => {
    const postData = {
        reset_password_code,
        password,
    };

    return axios.post(setPasswordConstants.SETPASSWORD_API, postData);
};



export { setPasswordApis };
