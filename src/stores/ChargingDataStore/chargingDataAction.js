import { ChargingDataConstant } from "./chargingDataConstant";

const chargingDataActions = {};

chargingDataActions.getChargingData = () => {
  return {
    type: ChargingDataConstant.CHARGING_DATA_SAGA,
  };
};

export { chargingDataActions };
