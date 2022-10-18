import { axios } from "../../helper/axios";
import { addStationConstants} from "./addStationConstant";

const addStationApis = {};

addStationApis.addStation =({
  name,
  mobile,
  email,
  network_id,
  type,
  open_time,
  close_time,
  station_url,
  landmark,
  address,
  address2,
  pin,
  street,
  city,
  state,
  country,
  latitude,
  longitude,
  amenities,
  attachment_ids,
}) => {
  const postData = {
    name,
    mobile,
    email,
    network_id,
    type,
    open_time,
    close_time,
    station_url,
    landmark,
    address,
    address2,
    pin,
    street,
    city,
    state,
    country,
    latitude,
    longitude,
    amenities,
    attachment_ids,
  };
  return axios.post(addStationConstants.ADD_STATION_API, postData);
};


{/*
 "id": 0,
  "name": "string",
  "mobile": "string",
  "email": "string",
  "network_id": 0,
  "type": "string",
  "open_time": "20:54",
  "close_time": "13:52",
  "station_url": "string",
  "landmark": "string",
  "address": "string",
  "address2": "string",
  "pin": "string",
  "street": "string",
  "city": "string",
  "state": "string",
  "country": "string",
  "latitude": "string",
  "longitude": "string" */}


  
addStationApis.EditStation=(
{  id,
    name,
    mobile,
    email,
    network_id,
    type,
    open_time,
    close_time,
    station_url,
    landmark,
    address,
    address2,
    pin,
    street,
    city,
    state,
    country,
    latitude,
    longitude,
}
)=>{
  const postUpdatedData = {
    id,
    name,
    mobile,
    email,
    network_id,
    type,
    open_time,
    close_time,
    station_url,
    landmark,
    address,
    address2,
    pin,
    street,
    city,
    state,
    country,
    latitude,
    longitude,
    
  };
  return axios.put(addStationConstants.ADD_STATION_API, postUpdatedData);


}




/// add amenity

addStationApis.AddAmenities_Api = ({
  station_id,
  amenity_id
}) => {
  const postData = {
    station_id,
    amenity_id

  };
  console.log('postData      id amnt---',postData);
  return axios.post(addStationConstants.ADD_AMENITIES_API, postData);
};



addStationApis.RemoveAmenities_Api = ({
  station_id,
  amenity_id
}) => {
  const postData = {
    station_id,
    amenity_id

  };
  console.log('postData delete  id amnt---',postData);

  return axios.post(addStationConstants.REMOVE_AMENITIES_API, postData);
};


export default addStationApis;
