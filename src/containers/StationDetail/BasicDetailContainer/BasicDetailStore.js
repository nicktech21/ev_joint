import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { basicDetailActions } from "stores/BasicDetailStore/basicDetailAction"

// import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"

const mapStateToProps = (state) => {
    return {
        basicDetailData: state.basicDetail.basicDetailList,
        isLoading: state.basicDetail.basicDetail.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   
    // getChargingStationsAction: chargingStationActions.getChargingStations,
    getBasicDetailAction: basicDetailActions.getBasicDetail,
}, dispatch)

const BasicDetailStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default BasicDetailStore;