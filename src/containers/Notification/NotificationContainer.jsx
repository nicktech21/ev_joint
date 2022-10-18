import React from "react";
import Notification from "components/Notification";


class NotificationContainer extends React.Component {
   
  async componentDidMount() {
    this.props.getNotifications();
 
  }

  render() {

   
  
return  (
 <>




<Notification data={this.props.notificationList} />
     
    </>
);
  }
};



export default NotificationContainer;

