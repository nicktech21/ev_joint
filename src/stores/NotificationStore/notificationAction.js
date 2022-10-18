import { NotificationConstant } from "./notificationConstant";


const notificationActions = {};

notificationActions.getNotification = () => ({
    type: NotificationConstant.NOTIFICATION_SAGA,
});



export { notificationActions };
