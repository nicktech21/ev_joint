import { axios } from "../../helper/axios";
import { CustomerDetailConstant } from "./customerDetailConstant";


const customerDetailApi = {};

customerDetailApi.getpersonalDetail = ({id}) => {
  console.log('custumer detail api id====',id );
  return axios.get(
    CustomerDetailConstant.PERSONAL_DETAIL_API.replace(":id", id)
  );
};


// customerDetailApi.getphotosUploaded = ({id}) => {
   
//   return [
//     {
//       image:"https://static.langimg.com/thumb/msid-84418846,imgsize-207614,width-700,height-525,resizemode-75/navbharat-times.jpg",
//       chargingStation:"Ace charging station",
//       date: "31 march 2021"
//     },
//     {
//         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/06/24/981540-global-petrol-prices.jpg",
//         chargingStation:"Ace charging station",
//         date: "31 feb 2020"
//       },    
//     {
//         image:"https://static.langimg.com/thumb/msid-84418846,imgsize-207614,width-700,height-525,resizemode-75/navbharat-times.jpg",
//         chargingStation:"Ace charging station",
//         date: "31 march 2021"
//       },
//       {
//         image:"https://static.langimg.com/thumb/msid-84418846,imgsize-207614,width-700,height-525,resizemode-75/navbharat-times.jpg",
//         chargingStation:"Ace charging station",
//         date: "31 march 2021"
//       }
//   ];



// };

customerDetailApi.getreviews = ({id}) => {
   
  // return [
  //   {
  //     location:"Reliance Energy Electric Vehicle Charging Station, Andheri",
  //     feedback: `Best Charging Experience, DC fast charger for public Charging
  //     services, Near to Mumbai international, Easy accessible and Double
  //     charging gun, Two EV of GB/T can be charged simultaneously, Use
  //     this charger for lowest and best charging prices, directly from
  //     volttic Mobile app.`,
  //     dp:"/images/dp.png",
  //     name:"Rachel Green"
  //   },
  //   {
  //     location:"Reliance Energy Electric Vehicle Charging Station, Andheri",
  //     feedback: `Best Charging Experience, DC fast charger for public Charging
  //     services, Near to Mumbai international, Easy accessible and Double
  //     charging gun, Two EV of GB/T can be charged simultaneously, Use
  //     this charger for lowest and best charging prices, directly from
  //     volttic Mobile app.`,
  //     dp:"/images/dp.png",
  //     name:"Rachel Green"
  //   }
  // ];

  return axios.get(
    CustomerDetailConstant.REVIEWS_API.replace(":id", id)
  );

}


customerDetailApi.getChargingData = ({id}) => {
//   return [
//        {
//         img: "https://5.imimg.com/data5/OX/QD/SX/SELLER-21173883/mahindra-latest-software-available-500x500.png",
//           carName: "Tata nexon av",
//           sub: "Varient",
//           chademo: "Ac Level 2",
//           power: "22.2kW",
//           time: "11:87:35",
//           amount: 70.65,
// }];
    
    return axios.get(
      CustomerDetailConstant.CHARGING_DATA_API.replace(":id", id)
    );
     
}


export { customerDetailApi };
