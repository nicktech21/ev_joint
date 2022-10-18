import { all } from "redux-saga/effects";

import { registerBookingTableSaga } from "./BookingTableStore/bookingTableSaga";
import { registerChargingDataSaga } from "./ChargingDataStore/chargingDataSaga";
import { registerChargingStationSaga } from "./ChargingStationStore/chargingStationSaga";
import { registerCustomerTableSaga } from "./CustomerTableStore/customerTableSaga";
import { registerHelpSupportSaga } from "./HelpSupportStore/helpSupportSaga";
import { registerPersonalDetailSaga } from "./CustomerDetailStore/customerDetailSaga";
import { registerStationdetailSaga } from "./StationDetailStore/stationDetailSaga";
import { registerNotificationSaga } from "./NotificationStore/notificationSaga";
import { registerCommonSagas } from "./common/commonSagas";
import { registerVendorSaga } from "./VendorStore/vendorSaga";

function* rootSaga() {
  yield all([
    registerChargingStationSaga(),
    registerChargingDataSaga(),
    registerBookingTableSaga(),
    registerCustomerTableSaga(),
    registerPersonalDetailSaga(),
    registerCommonSagas(),
    registerVendorSaga(),
    registerHelpSupportSaga(),
    registerStationdetailSaga(),
    registerNotificationSaga(),
  ]);
}

export default rootSaga;
