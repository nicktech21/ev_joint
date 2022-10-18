import { axios } from "../../helper/axios";
import {  CustomerTableConstant } from "./customerTableConstant";

const customerTableApi = {};

customerTableApi.getCustomerTable = ({ model_id, station_id, manufacturer_id }) => {
  if(model_id === 'All'){ model_id = ''; }
  if(station_id === 'All'){ station_id = ''; }
  if(manufacturer_id === 'All'){ manufacturer_id = ''; }
  let qeuryParam = `?model_id=${model_id}&station_id=${station_id}&manufacturer_id=${manufacturer_id}`; 
   
    // return [
    //   {
    //     clientName: "Rachel Green",
    //     type_of_customers: "Unique",
    //     vehicle_model: "Tata Nexon Ev",
    //     power_consumed: "22.21 kW",
    //     time_spent: "01:00:00",
    //     amount_paid: "₹ 70.58",
    //     shareCode: "#01234567",
    //     clientImage: "CarIcon.svg",
    //   },
    //   {
    //     clientName: "Monica Geller",
    //     type_of_customers: "Unique",
    //     vehicle_model: "Tata Tigor Ev",
    //     power_consumed: "22.21 kW",
    //     time_spent: "01:00:00",
    //     amount_paid: "₹ 70.58",
    //     shareCode: "#01234567",
    //     clientImage: "CarIcon.svg",
    //   },
    //   {
    //     clientName: "Rachel Green",
    //     type_of_customers: "Returning",
    //     vehicle_model: "Hyundai Kona Electric",
    //     power_consumed: "22.21 kW",
    //     time_spent: "01:00:00",
    //     amount_paid: "₹ 70.58",
    //     shareCode: "#01234567",
    //     clientImage: "KeyIcon.svg",
    //   },
    //   {
    //     clientName: "Rachel Green",
    //     type_of_customers: "Returning",
    //     vehicle_model: "Tata Nexon Ev",
    //     power_consumed: "22.21 kW",
    //     time_spent: "01:00:00",
    //     amount_paid: "₹ 70.58",
    //     shareCode: "#01234567",
    //     clientImage: "CarIcon.svg",
    //   },
    //   {
    //     clientName: "Rachel Greentest",
    //     type_of_customers: "Returning",
    //     vehicle_model: "Tata Nexon Ev",
    //     power_consumed: "22.21 kW",
    //     time_spent: "01:00:00",
    //     amount_paid: "₹ 70.58",
    //     shareCode: "#01234567",
    //     clientImage: "CarIcon.svg",
    //   },
    // ];

    return axios.get(
      `${CustomerTableConstant.CUSTOMER_TABLE_API}${qeuryParam}`
  );

};



export { customerTableApi };
