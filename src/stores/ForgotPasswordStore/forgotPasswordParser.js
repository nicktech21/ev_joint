import _get from "lodash";
// import { formatHelper } from "helper/format"

const forgotPasswordParsers = {};

forgotPasswordParsers.forgotPassword = (res) => {

  if (!res) {
    return {};
  }
  return res;

}



export { forgotPasswordParsers };
