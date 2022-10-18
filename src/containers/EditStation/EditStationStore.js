import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { commonActions } from "stores/common/commonActions"
//import { stationDetailActions } from "stores/StationDetailStore/stationDetailAction"
import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"

const mapStateToProps = (state) => {
    return {
        basicDetailData: state.chargingStation.chargingDetailList,
      
        amenitiesData: state.common.amenitiesData,
        networkData: state.common.networkData,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getBasicDetailAction: chargingStationActions.ChargingStationDetail,
  
    getAmenitiesAction: commonActions.getAmenitiesData,
    getNetworkAction: commonActions.getNetworkData,
}, dispatch);

const EditStationStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default EditStationStore;