import { axios } from "../../helper/axios";
import { StationDetailConstant } from "./stationDetailConstant";



const stationDetailApi = {};

stationDetailApi.getBasicDetail = ({id}) => {
  
  return axios.get(
    StationDetailConstant.BASIC_DETAIL_API.replace(":id", id)
  );
      
}


stationDetailApi.chargingEnableDisable = ({id, status}) => {

console.log();
  

  return axios.post(
    StationDetailConstant.CHARGING_ENABLE_DISABLE_API,
    {
      connector_id: id,
      status: status
    }
  );
}

stationDetailApi.chargingPointEnableDisable = ({id, status}) => {

  return axios.post(
    StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_API,
    {
     charge_point_id: id,
      status: status
    }
  );
}

stationDetailApi.chargingPointDelete = ({id}) => {

  return axios.delete(
    StationDetailConstant.CHARGING_POINT_DELETE_API.replace(":id", id),
    
  );
}


export { stationDetailApi };