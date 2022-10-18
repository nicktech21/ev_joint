import { axios } from "../../helper/axios";
import { loginOtpConstants } from "./loginOtpConstant";

const loginOtpApis = {};

loginOtpApis.loginOtp = ({email, mobile }) => {
    const postData = {
        email,
        mobile,
    };

    return axios.post(loginOtpConstants.LOGINOTP_API, postData);
};

loginOtpApis.verifyOtp = ({mobile, vendor_id, otp }) => {
    const postData = {
        mobile,
        vendor_id,
        otp,
    };

    return axios.post(loginOtpConstants.VERIFYOTP_API, postData);
};



export { loginOtpApis };
