import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { customerTableActions } from "stores/CustomerTableStore/customerTableAction"
import { commonActions } from "stores/common/commonActions"
// import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"

const mapStateToProps = (state) => {
    return {
        // chargingStationData: state.chargingStation.chargingStationList,
        // isLoading: state.chargingStation.chargingStation.isLoading,
        customerTableData: state.customerTable.customerTableList,
        vehicleMasterData: state.common.vehiclesMasterData,
        locationData: state.common.locationData,
        manufacturerData: state.common.manufacturerData,
        isLoading: state.customerTable.customerTable.isLoading,
        profile: state.login.userProfile,

        
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   

    getCustomerTableAction: customerTableActions.getCustomerTable,
    getVehiclesMasterAction: commonActions.getVehiclesMasterData,
    getLocationAction: commonActions.getLocationData,
    getManufacturerAction: commonActions.getManufacturerData
}, dispatch);

const CustomerTableStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default CustomerTableStore;