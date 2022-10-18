import _get from "lodash";
import { formatHelper } from "helper/format"

const registerParsers = {};

registerParsers.login = (res) => {

  if (!res) {
    return {};
  }
  return res;

}



export { registerParsers };
