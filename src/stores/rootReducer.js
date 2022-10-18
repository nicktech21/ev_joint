import { combineReducers } from "redux";
import { ChargingDataReducers } from "./ChargingDataStore/chargingDataReducer";
import { ChargingStationReducers } from "./ChargingStationStore/chargingStationReducer";
import { BookingTableReducers } from "./BookingTableStore/bookingTableReducer";

import { LoginReducer } from "./LoginStore/loginReducer";
import { CustomerTableReducer } from "./CustomerTableStore/customerTableReducer";
import { CustomerDetailReducer } from "./CustomerDetailStore/customerDetailReducer";


import { HelpSupportReducers } from "./HelpSupportStore/helpSupportReducer";
import { StationDetailReducers } from "./StationDetailStore/stationDetailReducer";
import { NotificationReducers } from "./NotificationStore/notificationReducer";
import { commonReducers } from "./common/commonReducers";
import { VendorReducers } from "./VendorStore/vendorReducer";
// import { AddStationReducers } from "./AddStationStore/addStationReducer";

const rootReducers = combineReducers({
    
    chargingStation: ChargingStationReducers,
    bookingTable: BookingTableReducers,
    // AddStationReducers:AddStationReducers,
    chargingData: ChargingDataReducers,
    login:  LoginReducer,
    customerTable: CustomerTableReducer,
    personalDetail: CustomerDetailReducer,
    common: commonReducers,
    Vendors: VendorReducers,
    helpSupport: HelpSupportReducers,
    stationDetail: StationDetailReducers,
    notification: NotificationReducers,

    
});

export default rootReducers;
