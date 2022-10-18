import _get from "lodash/get";
// import { formatHelper } from "helper/format";

const commonParsers = {};

commonParsers.vehiclesMasterData = (res) => {
    
    if (res) {
       
        res = res.result;
   
       
    }
    if (!res) {
        return [];
    }

    //return res;

    return res?.map( e => ({
        id: _get(e, "id", null),
        name: _get(e, "name", null),
    }));

};


commonParsers.manufacturerData = (res) => {
    if (res) {
        res = res.result.manufacturers;
    }
    if (!res) {
        return [];
    }
    //return res;

    return res?.map( e => ({
        id: _get(e, "id", null),
        name: _get(e, "name", null),
    }));

};


commonParsers.locationData = (res) => {
    if (res) {
        res = res.result;
    }
    if (!res) {
        return [];
    }

    // return res;

    return res?.map( e => ({
        id: _get(e, "id", null),
        name: _get(e, "name", null),
    }));

};


commonParsers.amenitiesData = (res) => {
    
   let data = [];

    if (res) {
        res = res.result;
    }
    if (!res) {
        return [];
    }

    data = res?.map( e => ({
        id: _get(e, "id", null),
        name: _get(e, "name", null),
    }));



    return data;

  


};



commonParsers.networkData = (res) => {

let data = [];


    if (res) {
        res = res.result;
    }
    if (!res) {
        return [];
    }

     data = res?.map( e => ({
        id: _get(e, "id", null),
        name: _get(e, "name", null),
    }));
 
    return data;
};


commonParsers.chargerTypes = (res) => {

    let data = [];
    
    
        if (res) {
            res = res.result;
        }
        if (!res) {
            return [];
        }
    
         data = res?.map( e => ({
            id: _get(e, "id", null),
            name: _get(e, "name", null),
        }));
     
        return data;
    };
    



export { commonParsers };
