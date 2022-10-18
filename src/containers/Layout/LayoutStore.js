

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction } from "stores/LoginStore/loginAction";

const mapStateToProps = (state) => {
  return {
    profile: state.login.userProfile,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        logoutAction: loginAction.logout,
    },
    dispatch
  );

const LayoutStore = (Container) =>
  connect(mapStateToProps,mapDispatchToProps)(Container);
export default LayoutStore;
