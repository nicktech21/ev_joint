import { axios } from "../../helper/axios";
import { BookingTableConstant } from "./bookingTableConstant";

const bookingTableApi = {};

bookingTableApi.getbookingTable = ({status, model_id, station_id, manufacturer_id, from_date, to_date }) => {
      if(status === 'All'){ status = ''; }
      if(model_id === 'All'){ model_id = ''; }
      if(station_id === 'All'){ station_id = ''; }
      if(manufacturer_id === 'All'){ manufacturer_id = ''; }
      let qeuryParam = `?status=${status}&model_id=${model_id}&station_id=${station_id}&manufacturer_id=${manufacturer_id}&from_date=${from_date}&to_date=${to_date}`; 
      return axios.get(
    `${BookingTableConstant.BOOKING_TABLE_API}${qeuryParam}`
  );


  
};

export { bookingTableApi };
