import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { personalDetailActions } from "stores/CustomerDetailStore/customerDetailAction"
// import { chargingStationActions } from "stores/ChargingStationStore/chargingStationAction"

const mapStateToProps = (state) => {
    return {
        personalDetailData: state.personalDetail.personalDetailList,
        photosUploaded: state.personalDetail.photosUploadedList,
        reviews: state.personalDetail.reviewsList,
        chargingData: state.personalDetail.chargingDataList,
        isLoading: state.personalDetail.personalDetail.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
   
    getChargingStationsAction: personalDetailActions.getChargingData,
    getPersonalDetailAction: personalDetailActions.getPersonalDetail,
    getPhotosUploadedAction: personalDetailActions.getPhotosUploaded,
    getReviewsAction: personalDetailActions.getReviews,

}, dispatch)

const CustomerDetailStore = (Container) => connect(mapStateToProps, mapDispatchToProps)(Container);
export default CustomerDetailStore;