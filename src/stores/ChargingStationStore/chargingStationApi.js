import { axios } from "../../helper/axios";
import { ChargingStationConstant } from "./chargingStationConstant";

const chargingStationApi = {};

chargingStationApi.getChargingStations = (vendor_id) => {

  let qeuryParam = `?vendor_id=${vendor_id}`;

  return axios.get(
    `${ChargingStationConstant.CHARGING_STATION_API}${qeuryParam}`
  );

};


chargingStationApi.deleteChargingStation = ({ id }) => {
  return axios.delete(ChargingStationConstant.CHARGING_STATION_DELETE_API.replace(":id", id));
};


chargingStationApi.ChargingStationDetail = ({ id }) => {
  return axios.get(ChargingStationConstant.CHARGING_STATION_DETAIL_API.replace(":id", id));
};


chargingStationApi.getChargingPoint = (station_id) => {

  let qeuryParam = `?station_id=${station_id}`;

  return axios.get(
    `${ChargingStationConstant.GET_CHARGING_POINT_API}${qeuryParam}`
  );




};

chargingStationApi.DeleteChargingConnectorApi = ({ id }) => {

  return axios.delete(
    ChargingStationConstant.DELETE_CHARGING_CONNECTOR_API.replace(":id", id),

  );
};


// add charging point

chargingStationApi.Add_ChargingPointApi = ({
  name,
  station_id,
  cp_id,
  connectors,
}) => {
  const postData = {
    name,
    station_id,
    cp_id,
    connectors,
  };
  return axios.post(ChargingStationConstant.ADD_CHARGING_POINT_API, postData);
};



// add charging connector

chargingStationApi.Add_ChargingConnectorApi = ({
  charger_type_id,
  charge_point_id,
  price_per_khw,
  power,
}) => {
  const postConnectorData = {
    charger_type_id,
    charge_point_id,
    price_per_khw,
    power,
  };
  return axios.post(ChargingStationConstant.ADD_CHARGING_CONNECTOR_API, postConnectorData);
};


// edit charging point

chargingStationApi.Edit_ChargingPointApi = ({
  id,
  name,
  station_id,
  cp_id,
}) => {
  const postData = {
    id,
    name,
    station_id,
    cp_id,
  };
  return axios.put(ChargingStationConstant.EDIT_CHARGING_POINT_API, postData);
};

// edit charging Connector

chargingStationApi.Edit_ChargingConnecApi = ({
  id,
  charger_type_id,
  charge_point_id,
  price_per_khw,
  power,
}) => {
  const postDataUpdatedConnector = {
    id,
    charger_type_id,
    charge_point_id,
    price_per_khw,
    power,
  };
  return axios.put(ChargingStationConstant.EDIT_CHARGING_CONNECTOR_API, postDataUpdatedConnector);
};




export { chargingStationApi };
