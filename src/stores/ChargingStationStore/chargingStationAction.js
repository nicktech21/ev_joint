import { ChargingStationConstant } from "./chargingStationConstant";


const chargingStationActions = {};

chargingStationActions.getChargingStations = (vendor_id) => (
    {
   
    type: ChargingStationConstant.CHARGING_STATION_SAGA,
    vendor_id: vendor_id,
});

chargingStationActions.deleteChargingStation = (id) => {
  
    return {
        type: ChargingStationConstant.CHARGING_STATION_DELETE_SAGA,
        payload: id,
    }
};

chargingStationActions.ChargingStationDetail = (id) => {
    
    return {
        type: ChargingStationConstant.CHARGING_STATION_DETAIL_SAGA,
        payload: id,
    }
};



 //charging point
chargingStationActions.getChargingPoint = (station_id) => (

    {
    type: ChargingStationConstant.GET_CHARGING_POINT_SAGA,
    station_id: station_id,
    
    
}

);

chargingStationActions.deleteChargingConnectorActions = (id) => {
    return {
      type: ChargingStationConstant.DELETE_CHARGING_CONNECTOR_SAGA,
      payload: id,
    };
  }




export { chargingStationActions };
