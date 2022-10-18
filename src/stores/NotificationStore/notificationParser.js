
import { format } from "date-fns";

const notificationParser = {};

notificationParser.notification = (res) => {

   
    
  if (res) {
    res = res.result;
    
  }

  if (!res) {
    console.log("error");
    return {};
  }

  

  const parseTransactions = (t) =>
    t?.map((e) => ({
            title: e?.title,
            description: e?.description,
            date: format(new Date(e["created_on"]), "EEEE, dd MMM yyyy"),
    }));

  const data = parseTransactions(res);

  

  return data;
};

export { notificationParser };
