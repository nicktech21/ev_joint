// import { ChargingStationConstant } from "./customerTableConstant";

import { CustomerTableConstant } from "./customerTableConstant";


const customerTableActions = {};

customerTableActions.getCustomerTable = ({model_id, station_id, manufacturer_id}) => ({
    type: CustomerTableConstant.CUSTOMER_TABLE_SAGA,
    payload:{
            model_id:model_id,
            station_id:station_id,
            manufacturer_id:manufacturer_id
    }
});



export { customerTableActions };
