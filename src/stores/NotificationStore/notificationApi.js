import { axios } from "../../helper/axios";
import { NotificationConstant } from "./notificationConstant";

const notificationApi = {};

notificationApi.notifications = () => {



  // return [
  //       {
  //         title: "Notification 1",
  //         description: "This is notification 1",
  //       },
  //       {
  //         title: "Notification 2",
  //         description: "This is notification 2",
  //       },
  //       {
  //         title: "Notification 3",
  //         description: "This is notification 3",
  //       },
  //     ];

  

  return axios.get(
    NotificationConstant.NOTIFICATION_API,
  );


  
};

export { notificationApi };
