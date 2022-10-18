import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { commonActions } from "stores/common/commonActions"

const mapStateToProps = (state) => {
    return {
       
        amenitiesData: state.common.amenitiesData,
        networkData: state.common.networkData,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   
    getAmenitiesAction: commonActions.getAmenitiesData,
    getNetworkAction: commonActions.getNetworkData,
}, dispatch);

const AddStationStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default AddStationStore;