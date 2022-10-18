
import { StationDetailConstant } from "./stationDetailConstant";

const stationDetailActions = {};

stationDetailActions.getBasicDetail = ({id}) => {
  return {
    type: StationDetailConstant.BASIC_DETAIL_SAGA,
    payload: {id},
  };
};

stationDetailActions.getStationOverView = () => {
  return {
    type: StationDetailConstant.STATION_OVERVIEW_SAGA,
  };
};

stationDetailActions.chargingEnableDisable = ({id, status}) => {
  return {
    type: StationDetailConstant.CHARGING_ENABLE_DISABLE_SAGA,
    payload: {id, status},
  };
}

stationDetailActions.chargingPointEnableDisable = ({id, status}) => {
  return {
    type: StationDetailConstant.CHARGING_POINT_ENABLE_DISABLE_SAGA,
    payload: {id, status},
  };
}
stationDetailActions.chargingPointDelete = (id) => {
  return {
    type: StationDetailConstant.CHARGING_POINT_DELETE_SAGA,
    payload: id,
  };
}






export { stationDetailActions };
