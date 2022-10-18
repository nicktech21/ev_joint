import { BookingTableConstant } from "./bookingTableConstant";


const bookingTableActions = {};

bookingTableActions.getBookingTable = ({status, model_id, station_id, manufacturer_id, from_date, to_date}) => ({
    type: BookingTableConstant.BOOKING_TABLE_SAGA,
    payload:{
        model_id:model_id,
        station_id:station_id,
        manufacturer_id:manufacturer_id,
        status:status,
        from_date:from_date,
        to_date:to_date
}
});



export { bookingTableActions };
