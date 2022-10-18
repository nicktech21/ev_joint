import { axios } from "../../helper/axios";
import { forgotPasswordConstants } from "./forgotPasswordConstant";

const forgotPasswordApis = {};

forgotPasswordApis.forgotPassword = ({email, mobile }) => {
    const postData = {
        email,
        mobile,
    };

    return axios.post(forgotPasswordConstants.FORGOTPASSWORD_API, postData);
};



export { forgotPasswordApis };
