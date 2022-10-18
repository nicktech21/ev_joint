
import _get from "lodash.get";


const chargingDataParser = {};

chargingDataParser.chargingData = (res) => {
    if (res && res.response) {
        res = res.response;
    }

    if (!res) {
        return {};
    }

  

    const parseTransactions = (t) =>
        t?.map((e) => ({
            vehicle_logo: _get(e, "vehicle_logo", ""),
            vehicle_name: _get(e, "vehicle_name", ""),
            sub_title: _get(e, "sub_title", ""),
            chademo: _get(e, "chademo", ""),
            power: _get(e, "power", ""),
            time: _get(e, "time", ""),
            amount: _get(e, "amount", ""),

            
          

        }));

  const data = parseTransactions(res);

  return data;
};


export { chargingDataParser };
