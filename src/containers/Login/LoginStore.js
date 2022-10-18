import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction } from "stores/LoginStore/loginAction";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    userProfile: state.login.userProfile,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        updateAuthDataAction: loginAction.updateAuthData,
    },
    dispatch
  );

const LoginStore = (Container) =>
  connect(mapStateToProps,mapDispatchToProps)(Container);
export default LoginStore;
