import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { helpSupportActions } from "stores/HelpSupportStore/helpSupportAction";

const mapStateToProps = (state) => {
  return {
    helpSupport: state.helpSupport.helpSupportList,
    faq:state.helpSupport.faqList,

    isLoading: state.helpSupport.helpSupport.isLoading,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getHelpSupportAction: helpSupportActions.getHelpSupport,
      getFaqAction: helpSupportActions.getFaq,

    },
    dispatch
  );

const HelpSupportStore = (Container) =>
  connect(mapStateToProps, mapDispatchToProps)(Container);
export default HelpSupportStore;
