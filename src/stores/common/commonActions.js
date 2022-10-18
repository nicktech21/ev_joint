import { commonConstants } from "./commonConstants";

const commonActions = {};

commonActions.getVehiclesMasterData = (id) => ({
    type: commonConstants.VEHICLES_MASTER_SAGA,
    payload:{id},
}
);


commonActions.getLocationData = ({vendor_id}) => 
   {
//    console.log('vendor_id',vendor_id);
 
    return {
    type: commonConstants.LOCATION_SAGA,
    vendor_id: vendor_id,
    }
}




commonActions.getManufacturerData = () => ({
    type: commonConstants.VEHICLES_MANUFACTURER_SAGA,
});

commonActions.getAmenitiesData = () => ({
    type: commonConstants.AMENITIES_SAGA,
});

// commonActions.getNetworkData = () => ({
//     type: commonConstants.NETWORK_SAGA,
// });


commonActions.uploadAttachment = (formData) => ({
    type: commonConstants.ATTACHMENT_UPLOAD_SAGA,
    formData,
});

commonActions.downloadAttachment = (id) => ({
    type: commonConstants.ATTACHMENT_DOWNLOAD_SAGA,
    id,
});

commonActions.deleteAttachment = (id) => ({
    type: commonConstants.ATTACHMENT_DELETE_SAGA,
    id,
});

commonActions.updateAttachment = (formData) => ({
    type: commonConstants.ATTACHMENT_UPDATE_SAGA,
    formData,
});

commonActions.getNetworkData = () => ({
    type: commonConstants.NETWORK_SAGA,
});

// charger type
commonActions.chargerTypeAction = () => ({
    type: commonConstants.CHARGER_TYPES_SAGA,
});


export { commonActions };
