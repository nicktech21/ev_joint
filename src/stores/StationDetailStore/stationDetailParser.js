
import { format } from "date-fns";


const stationDetailParser = {};

stationDetailParser.getBasicDetail = (res) => {
   

  
    if (res) {
      res = res.result;
      
    }
  
    if (!res) {
      console.log("error");
      return {};
    }
 

  

      const parsePhotos = (t) =>
    t.map((e) => (
      
      {
      image:e.thumbnail ? e.thumbnail : e.image,
      customerName:  e.customer_attachment === null ? "" : e.customer_attachment.first_name  + " " + e.customer_attachment.last_name ,
      date: format(new Date(e.created_at ? e.created_at:""), "dd MMM yyyy"),
      is_station: 1,
    }));


    const parseAttachments = (t) =>
    t.map((e) => (
      {
        id: e.id ,
        name: e.name,
        url: e.thumbnail,
        type : e.type,
      }));





 
    let station_name = res.name ? res.name : "";


       const ParseAmenities = (t) =>
    t.map((e) => ({
     name: e.amenity.name ? e.amenity.name : "",
     Image:e.amenity.thumbnail ? e.amenity.thumbnail : "",
    }));

    const parseConnecters = (t) =>
    t.map((e) => ({
      connectorType: e.charger_type ? e.charger_type : "",
      power: e.power ? e.power : "", 
      level:e.name ? e.name : "",
      price: e.price_per_khw ? e.price_per_khw : "",
      image:e.thumbnail ? e.thumbnail : "",
      id:e.id ? e.id : "",
      status:e.status ? e.status : "",
      
    }));

    const parseChargingPoints = (t) =>
    t.map((e) => ({
      name: e.name ? e.name : "",
      cpId: e.cp_id ? e.cp_id : "",
      id:e.id ? e.id : "",
      status:e.status ? e.status : "",
    

    }));

    const ParseReviews = (t) =>
    t.map((e) => ({
      feedback: e.review ? e.review : "",
       name:e.customer == null ? "":e.customer.first_name + " " + e.customer.last_name,
       dp:e.customer == null ? "":e.customer.thumbnail,
       location: station_name,
       rating: e.rating ? e.rating : "",
       is_station: 1,
    })); 



let data = 
      {
          chargingStationName :res.name ? res.name : "",
          stationImage: res.thumbnail ? res.thumbnail : "",
          nameOfNetwork : " have to set value",
          stationUrl : res.station_url ? res.station_url : "",
          stationLocation: res.address ? res.address : "",
          openTime: res.open_time ? res.open_time : "",
          closeTime: res.close_time ? res.close_time : "",
          contactNumber : res.mobile ? res.mobile : "",
          contactEmail : res.email ? res.email : "",
          likes: res.no_of_favourites ? res.no_of_favourites : "",
          type:res.type ? res.type : "",
          latitude:res.latitude ? res.latitude : "",
          longitude:res.longitude ? res.longitude : "",
          amenities:ParseAmenities(res.stationsAmenities ? res.stationsAmenities : ""),
         
          chargingPoints:parseChargingPoints(res.charging_points ? res.charging_points : ""),

          connecters:parseConnecters(res.connectors ? res.connectors : ""),

          photos :parsePhotos(res.review_attachments ? res.review_attachments : ""),

          attachments :parseAttachments(res.attachments ? res.attachments : ""),

          reviews :ParseReviews(res.feedback ? res.feedback : ""),
          summary:res.summary ? res.summary : "",
          ratings:res.summary.rating ? res.summary.rating : "",
          no_of_reviews:res.feedback == null ? 0 : res.feedback.length,
          charger_rating:res.summary.charger_rating ? res.summary.charger_rating : "",
          connector_rating:res.summary.connector_rating ? res.summary.connector_rating : "",
          accuracy_rating:res.summary.accuracy_rating ? res.summary.accuracy_rating : "",
          value_rating:res.summary.value_rating ? res.summary.value_rating : "",
          location_rating:res.summary.location_rating ? res.summary.location_rating : "",
          charger_rating_value:res.summary.charger_rating ? res.summary.charger_rating*20 : "",
          connector_rating_value:res.summary.connector_rating ? res.summary.connector_rating*20 : "",
          accuracy_rating_value:res.summary.accuracy_rating ? res.summary.accuracy_rating*20 : "",
          value_rating_value:res.summary.value_rating ? res.summary.value_rating*20 : "",
          location_rating_value:res.summary.location_rating ? res.summary.location_rating*20 : "",
          
        
      };



    return data;
  };




export { stationDetailParser };