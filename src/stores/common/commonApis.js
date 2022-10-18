import { axios } from "helper/axios";
import { commonConstants } from "./commonConstants";

const commonApis = {};

commonApis.getVehicleMasterData = (id) => {
        

    return axios.get(      
        commonConstants.VEHICLES_MASTER_API.replace("{id}", id)
        
      );

};

commonApis.getLocationData = (vendor_id) => {

   

    let qeuryParam = `?vendor_id=${vendor_id}`;


    return axios.get(
        `${commonConstants.LOCATION_API}${qeuryParam}`
        );
};

commonApis.getVehicleManufacturerData = () => {
    return axios.get(commonConstants.VEHICLES_MANUFACTURER_API);
};

commonApis.getAmenitiesData = () => {
    return axios.get(commonConstants.AMENITIES_API);
}


commonApis.uploadAttachment = ({
    file,
    type,
    attachment_of,
    station_id,
    vehicle_id,
    member_id,
}) => {
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    
    if (attachment_of !== undefined) {
        formData.append("attachment_of", attachment_of);
    }
    
    
   
    if (station_id !== undefined) {
        formData.append("station_id", station_id);
    }
    // if (vehicle_id !== undefined) {
    //     formData.append("vehicle_id", vehicle_id);
    // }
    // if (member_id !== undefined) {
    //     formData.append("member_id", member_id);
    // }

    return axios.post(commonConstants.ATTACHMENT_UPLOAD_API, formData);
    }
             

commonApis.downloadAttachment = (id) => {
    return axios.get(commonConstants.ATTACHMENT_DOWNLOAD_API.replace(":id", id));
}

commonApis.deleteAttachment = (id) => {
    return axios.delete(commonConstants.ATTACHMENT_DELETE_API.replace(":id", id));
}

commonApis.updateAttachment = (formData) => {
    return axios.put(commonConstants.ATTACHMENT_UPDATE_API, formData);
}

commonApis.getNetworkData = () => {
    return axios.get(commonConstants.NETWORK_API);
}

commonApis.chargerTypesApi = () => {
    return axios.get(commonConstants.CHARGER_TYPES_API);
}

export { commonApis };
