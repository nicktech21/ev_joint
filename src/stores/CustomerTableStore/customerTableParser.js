// import _get from "lodash";


function generateSharecode(customer_id) {
  let length = customer_id.toString().length;
 
  let sharecode = "#";
 
  for (let i = 0; i < (8 - length); i++) {
    sharecode += "0";
  }
  sharecode += customer_id;
  return sharecode;
}


const customerTableParser = {};

customerTableParser.customer = (res) => {
  if (res && res.response) {
    res = res.response;
  }

  if (!res) {
    return {};
  }

  const d = res["result"];

   



  const parseTransactions = (t) =>
    t?.map((e) => ({
      clientName: e["first_name"] + " " + e["last_name"],
      type_of_customers: e["customer_type"],
      vehicle_model: e["vehicle_model"],
      power_consumed: e["power_consumed"],
      time_spent: e["time_spent"],
      amount_paid: "₹"+e["amount_paid"],
      shareCode: generateSharecode(e["id"]),
      clientImage: "CarIcon.svg",
      customerId: e["id"],
    }));

  const data = parseTransactions(d);

 

  return data;
};

export { customerTableParser };
