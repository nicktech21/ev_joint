import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { notificationActions } from "stores/NotificationStore/notificationAction";

const mapStateToProps = (state) => {
  return {
    
    notificationList: state.notification.notificationList,
    isLoading: state.notification.notification.isLoading,

  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        getNotifications: notificationActions.getNotification,
    },
    dispatch
  );

const NotificationStore = (Container) =>
  connect(mapStateToProps,mapDispatchToProps)(Container);
export default NotificationStore;
