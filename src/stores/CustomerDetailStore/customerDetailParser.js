
import { format } from "date-fns";
// import { differenceInHours } from "date-fns";

function calculateDuration(from_time, to_time) {
  // console.log('from_time, to_time', from_time, to_time);
  var from_time_f = new Date(from_time);
  var to_time_t = new Date(to_time);
  var diff = `${from_time_f.getTime()}` - `${to_time_t.getTime()}`;

  return diff;

}


const customerDetailParser = {};


customerDetailParser.getpersonalDetail = (res) => {
  if (res) {
    res = res.result;
    // console.log('personalDetail Data parser', res);
  }

  if (!res) {
    // console.log("error");
    return {};
  }



  const parsePhotos = (t) =>
    t.map((e) => {
      
  // console.log("parsePhotos",e,  t);
    return(
    {
      image: e?.thumbnail ,
      chargingStation_id: e?.station_id,
      StationName: e?.station !== null ? e.station.name : " ",
      date: format(new Date(e?.created_at), "dd MMM yyyy"),
    }
  )
});



  let VehicleName = "";

  for (let i = 0; i < res?.my_vehicles.length; i++) {
    if (i < 3) {
      VehicleName =
        VehicleName +
        res?.my_vehicles[i].manufacturer.name +
        " " +
        res?.my_vehicles[i].vehicle_model.name +
        ",";
    }
    if (i === 3) {
      VehicleName =
        VehicleName +
        res?.my_vehicles[i].manufacturer.name +
        " " +
        res?.my_vehicles[i].vehicle_model.name;
      break;
    }
  }


  let data = {
    name: res?.first_name + " " + res?.last_name,
    profilePic:
      "https://5.imimg.com/data5/OX/QD/SX/SELLER-21173883/mahindra-latest-software-available-500x500.png",
    id: "#00000" + res?.id,
    mobile: res?.mobile,
    carName: VehicleName,
    email: res?.email,
    photos: parsePhotos(res?.customer_attachment),
    bookingCount: res?.customerBookings.length,
  };

  return data;
};

customerDetailParser.getChargingData = (res) => {

  // console.log("custumer Detail parser data", res);


  if (res) {
    res = res !== null ? res.result.customerBookings : " ";
  }

  if (!res) {
    // console.log("error Data not Found");
    return [];
  }



  //invoice
  const parseAmenities = (t) =>
    t?.map((e) => ({
      thumbnail: e.amenity?.thumbnail,
      name: e.amenity?.name,

    }));

  const parseCharging = (t) =>
    t?.map((e) => {
      // console.log("custumer Detail parser data", t, e);


      return {
        // img: "",
        carName:
          e.vehicleBookings !== null
            ? 
            ( e.vehicleBookings.manufacturer.name +
            " " +
            e.vehicleBookings.vehicle_model.name) : " ",
        img:
          e.vehicleBookings !== null ? 
          e.vehicleBookings.manufacturer?.thumbnail : "",
        sub: "Variant",
        chademo: e.connectorBookings?.name ?? "",
        power: "to set",
        // time: "11:87:35",
        time: calculateDuration(e.to_time? e.to_time : "", e.from_time? e.from_time : ""),
        amount: "₹" + e.payable_amount ?? "",
        StationName: e.chargingStation == null ? "" : e.chargingStation?.name,
       
        charging_status: e.charging_status !==null ? e.charging_status : "Charging",

        invoice: {
          carName:
            e.vehicleBookings == null
              ? ""
              : e.vehicleBookings?.manufacturer.name +
              " " +
              e.vehicleBookings?.vehicle_model.name,
          chademo:
            e.connectorBookings == null
              ? ""
              : e.connectorBookings?.charger_type.name,

          power:
            e.connectorBookings == null
              ? " "
              : e.connectorBookings?.price_per_khw,

          time:
            e.connectorBookings == null
              ? " "
              :
              `${e.connectorBookings?.from_time} - ${e.connectorBookings?.to_time}`,
          progress: 75,
          chargingFee: 45.0,
          amenities: parseAmenities(e.chargingStation ? e.chargingStation?.stationsAmenities : ""),
          gst: 5,

        },
      };
    });

  const data = parseCharging(res);
  // console.log('data ', res, data);
  return data;
};

customerDetailParser.getReviews = (res) => {
  if (res) {
    res = res.result;
  }

  if (!res) {
    // console.log("error");
    return [];
  }

  const Name = res.customer.first_name
    ? res.customer.first_name
    : " " + res.customer.last_name
      ? res.customer.last_name
      : "";
  const profilePic = res.customer.thumbnail ? res.customer.thumbnail : " ";
  // console.log(" profilePic",profilePic);

  const parseDetail = (t) =>
    t.map((e) => {
      return {
        location: e.station_name ? e.station_name : "",
        feedback: e.review ? e.review : "",
        dp: profilePic,
        name: Name ? Name: "",
        rating: e? e.rating : "",
        date: format(new Date(e.created_at), "dd MMM yyyy"),
      };
    });

  const data = parseDetail(res.feedback);


  return data;
};
export { customerDetailParser };
