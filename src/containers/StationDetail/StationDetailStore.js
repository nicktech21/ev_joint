import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { stationDetailActions } from "stores/StationDetailStore/stationDetailAction"

// import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"

const mapStateToProps = (state) => {
    return {
        basicDetailData: state.stationDetail.basicDetailList,
        stationOverView: state.stationDetail.stationOverViewList,
        chargingEnableDisableData: state.stationDetail.chargingEnableDisableList,
        chargingPointDeleteData: state.stationDetail.chargingPointDeleteList,
        deleteSuccess: state.stationDetail.deleteSuccess,
        chargingPointEnableDisableData: state.stationDetail.chargingPointEnableDisableList,
        isLoading: state.stationDetail.stationDetail.isLoading,


    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   
    // getChargingStationsAction: chargingStationActions.getChargingStations,
    getBasicDetailAction: stationDetailActions.getBasicDetail,
    getStationOverViewAction: stationDetailActions.getStationOverView,
    chargingEnableDisableAction: stationDetailActions.chargingEnableDisable,
    chargingPointDeleteAction: stationDetailActions.chargingPointDelete,
    chargingPointEnableDisableAction: stationDetailActions.chargingPointEnableDisable,
    
}, dispatch)

const StationDetailStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default StationDetailStore;