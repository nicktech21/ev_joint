import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"
import { commonActions } from "stores/common/commonActions"

const mapStateToProps = (state) => {
    return {
        chargingStationData: state.chargingStation.chargingStationList,
        isLoading: state.chargingStation.chargingStation.isLoading,
        amenitiesData: state.common.amenitiesData,
        getChargingPointData: state.chargingStation.chargingPointList,
        profile: state.login.userProfile,
        chargerTypes: state.common.chargerTypes,

    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   
    getChargingStationsAction: chargingStationActions.getChargingStations,
    deleteChargingStationAction: chargingStationActions.deleteChargingStation,
    getAmenitiesAction: commonActions.getAmenitiesData,
    chargerTypeAction: commonActions.chargerTypeAction,
    getChargingPointAction:chargingStationActions.getChargingPoint,
    deleteChargingConnectorAction:chargingStationActions.deleteChargingConnectorActions
}, dispatch);

const ChargingStationStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default ChargingStationStore;