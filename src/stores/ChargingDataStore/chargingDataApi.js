
const chargingDataApi = {};

chargingDataApi.getChargingData = () => {
   return [
        {
          img: "https://5.imimg.com/data5/OX/QD/SX/SELLER-21173883/mahindra-latest-software-available-500x500.png",
          carName: "Tata nexon av",
          sub: "Varient",
          chademo: "Ac Level 2",
          power: "22.2kW",
          time: "11:87:35",
          amount: 70.65,
        },
        {
          img: "https://5.imimg.com/data5/OX/QD/SX/SELLER-21173883/mahindra-latest-software-available-500x500.png",
          carName: "Tata nexon av",
          sub: "varient",
          chademo: "Ac Level 2",
          power: "22.2kW",
          time: "11:87:35",
          amount: 70.65,
        },
      ];
      
}






// return axios.get(ChargingDataConstant.CHARGING_DATA_API);



export { chargingDataApi };