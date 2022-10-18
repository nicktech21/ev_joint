
const chargingStationParser = {};

chargingStationParser.chargingStation = (res) => {

  if (res) {
    res = res.result;

  }

  if (!res) {
    console.log("error");
    return {};
  }




  const parseTransactions = (t) =>
    t?.map((e) => ({
      name_of_charging_station: e["name"],
      name_of_network: e["chargingNetwork"]["name"],
      type_of_charging_station: e["type"],
      charging_points: e["no_of_charging_points"],
      stationId: e["id"],

    }));

  const data = parseTransactions(res);

  return data;

};



chargingStationParser.chargingPoint = (res) => {

  if (res) {
    res = res.result;

  }

  if (!res) {
    console.log("error");
    return {};
  }

  const parseCharginConnector = (t) =>
    t?.map((e) => ({
      id: e.id ?? "",
      name: e.charger_type == null ? "" : e.charger_type.name,
      thumbnail: e.charger_type == null ? "" : e.charger_type.thumbnail,
      capacity: e.power ?? "",
      rate: e.price_per_khw ?? "",


    }));


  const parseChargingPoint = (t) =>
    t?.map((e) => ({
      id: e.id ?? "",
      name: e.name ?? "",
      cp_id: e.cp_id ?? "",
      connecters: parseCharginConnector(e.connectors)




    }));

  const data = parseChargingPoint(res);



  return data;




};


chargingStationParser.chargingStationDetail = (res) => {


  if (res) {
    res = res.result;

  }

  if (!res) {
    console.log("error");
    return {};
  }



  console.log("res", res);

  const parseAttachments = (t) =>
    t?.map((e) => (
      {
        id: e?.id,
        url: e?.thumbnail,

      }));


  const parseIdandImage = (t) =>
    t?.map((e) => (
      {
        id: e?.id,
        name: e?.name,
      }));


  const parseIdamenities = (t) =>
    t?.map((e) => (
      {
        id: e?.id,
        name: e?.name,
      }));


  const parseAmenities = (a) =>
    a?.map((e) => (
      {
        id: e.amenity?.id,
        name: e.amenity ? e.amenity.name : " ",
        thumbnail: e.amenity ? e.amenity.thumbnail : " ",
      }));



  let data =
  {
    chargingStationName: res.name ? res.name : "",
    stationImage: res.thumbnail ? res.thumbnail : "",
    nameOfNetwork: " have to set value",
    stationUrl: res.station_url ? res.station_url : "",
    address: res.address ? res.address : "",
    openTime: res.open_time ? res.open_time : "",
    closeTime: res.close_time ? res.close_time : "",
    contactNumber: res.mobile ? res.mobile : "",
    contactEmail: res.email ? res.email : "",
    type: res.type ? res.type : "",
    latitude: res.latitude ? res.latitude : "",
    longitude: res.longitude ? res.longitude : "",
    stationId: res.id ? res.id : "",
    no_of_charging_points: res.no_of_charging_points ? res.no_of_charging_points : "",
    pin: res.pin ? res.pin : "",
    street: res.street ? res.street : "",
    city: res.city ? res.city : "",
    state: res.state ? res.state : "",
    country: res.country ? res.country : "",
    landmark: res.landmark ? res.landmark : "",
    address2: res.address2 ? res.address2 : "",
    network_id: res.network_id ? res.network_id : "",
    ratings: res.ratings ? res.ratings : "",

    attachments: parseAttachments(res.attachments ? res.attachments : ""),
    idandimagefordelete: parseIdandImage(res.attachments ? res.attachments : ""),
    amenity: parseIdamenities(res.attachments ? res.attachments : ""),

    // attachments: parseAttachments(res.attachments ? res.attachments : ""),
    idandimagefordelete: parseIdandImage(res.attachments ? res.attachments : ""),
    amenities: parseAmenities(res.stationsAmenities ? res.stationsAmenities : "")

  };



  return data;
}

export { chargingStationParser };
