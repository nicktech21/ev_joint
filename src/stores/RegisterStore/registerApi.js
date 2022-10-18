import { axios } from "../../helper/axios";
import { registerConstants } from "./registerConstant";

const registerApis = {};

registerApis.login = ({email, password }) => {
    const postData = {
        email,
        password,
    };

    return axios.post(registerConstants.SIGNUP_API, postData);
};


registerApis.signUp = ({
        name,
        date_of_birth,
        email,
        mobile,
        pan,
        gst_no,
        area,
        business_type,
        business_url,
        business_mobile,
        business_email,
}) => {
    const postData = {
        name,
        date_of_birth,
        email,
        mobile,
        pan,
        gst_no,
        area,
        business_type,
        business_url,
        business_mobile,
        business_email,
    };
    return axios.post(registerConstants.SIGNUP_API, postData);
};



export { registerApis };
