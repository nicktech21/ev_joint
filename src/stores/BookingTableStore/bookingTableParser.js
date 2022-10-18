// import _get from "lodash";
// import { format } from "date-fns";
// import {differenceInMinutes} from "date-fns";

function calculateDuration(from_time, to_time) {

  var timeStart = new Date("01/01/2007 " + from_time).getMinutes();
  var timeEnd = new Date("01/01/2007 " + to_time).getMinutes();
  
  var minuteDiff = timeEnd - timeStart;    
  
  return minuteDiff;

}

function dateFormat(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();    

  //replace the month
  format = format.replace("MM", month.toString().padStart(2,"0"));        

  //replace the year
  if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2,2));
  }

  //replace the day
  format = format?.replace("dd", day.toString().padStart(2,"0"));

  return format;
}

function generateSharecode(customer_id) {
  let length = customer_id?.toString().length;
  let sharecode = "#";
 
  for (let i = 0; i < (8 - length); i++) {
    sharecode += "0";
  }
  sharecode += customer_id;
  return sharecode;
}



const bookingTableParser = {};

bookingTableParser.bookingTable = (res) => {

   
    
  if (res) {
    res = res.result;
    
  }

  if (!res) {
    console.log("error");
    return {};
  }


  const parseTransactions = (t) =>
    t?.map((e) => ({
            clientName: e["first_name"] + " " + e["last_name"],
            date: e["date"] ? dateFormat(''+e["date"]+'', 'dd/MM/yyyy') : "",
            vehicle_model: e["model"] ? e["model"] : "",
            slot: e["from_time"] ? e["from_time"]:" "+" - "+e["to_time"] ? e["to_time"] : "",
            duration: calculateDuration(e["from_time"],e["to_time"]) ?? "",
            status: e["charging_status"] ?? "",
            type_of_connecters: e["connector"] ?? "",
            shareCode: generateSharecode(e["id"]),//check if this is booking id or customer id 
            clientImage: "CarIcon.svg",
            customerId: e["id"] ?? "",
    }));

  const data = parseTransactions(res);

 

  return data;
};

export { bookingTableParser };
