import { axios } from "../../helper/axios";
import { VendorConstant } from "./vendorConstant";


const VendorApi = {};

VendorApi.getVendor = () => {
   
    return axios.get(VendorConstant.VENDOR_TABLE_API);

};

export { VendorApi };
