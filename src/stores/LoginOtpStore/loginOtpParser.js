import _get from "lodash";
// import { formatHelper } from "helper/format"

const loginOtpParsers = {};

loginOtpParsers.loginOtp = (res) => {

  if (!res) {
    return {};
  }
  return res;

}

loginOtpParsers.verifyOtp = (res) => {

  if (!res) {
    return {};
  }
  return res;

}



export { loginOtpParsers };
