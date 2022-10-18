import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { bookingTableActions } from "stores/BookingTableStore/bookingTableAction"
import { commonActions } from "stores/common/commonActions"
// import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"

const mapStateToProps = (state) => {
    return {
     
        vehicleMasterData: state.common.vehiclesMasterData,
        locationData: state.common.locationData,
        manufacturerData: state.common.manufacturerData,
        isLoading: state.bookingTable.bookingTable.isLoading,
        profile: state.login.userProfile,
        
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   

    getBookingAction: bookingTableActions.getBookingTable,
    getVehiclesMasterAction: commonActions.getVehiclesMasterData,
    getLocationAction: commonActions.getLocationData,
    getManufacturerAction: commonActions.getManufacturerData
}, dispatch);

const DashboardStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default DashboardStore;