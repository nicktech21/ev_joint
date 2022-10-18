

import { HelpSupportConstant } from "./helpSupportConstant";

const helpSupportActions = {};

helpSupportActions.getHelpSupport = () => {
  return {
    type: HelpSupportConstant.HELP_SUPPORT_SAGA,
  };
};
helpSupportActions.getFaq = () =>{
  return{
    type: HelpSupportConstant.FAQ_SAGA
  }
}

export { helpSupportActions };
