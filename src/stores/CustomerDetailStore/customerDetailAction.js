import { CustomerDetailConstant } from "./customerDetailConstant";

const personalDetailActions = {};

personalDetailActions.getPersonalDetail = ({id}) => {
   console.log('id in custumer detail action',id);
   return  {
    type: CustomerDetailConstant.PERSONAL_DETAIL_SAGA,
    payload: {id},
}
};


personalDetailActions.getPhotosUploaded = ({id}) => {
    
    return {
        type: CustomerDetailConstant.PHOTOS_UPLOADED_SAGA,
        payload: {id},
    }
};

personalDetailActions.getReviews= ({id}) => {
   
    return {
        type: CustomerDetailConstant.REVIEWS_SAGA,
        payload: {id},
    }
};

personalDetailActions.getChargingData = ({id}) => {
   
    return {
        type: CustomerDetailConstant.CHARGING_DATA_SAGA,
        payload: {id},
    }
};




export { personalDetailActions };
