import { axios } from "../../helper/axios";
import { ProfileConstant } from "./ProfileConstant";


const profileApis = {};


profileApis.profileUpdateApi = ({
        name,
        date_of_birth,
        pan,
        gst_no,
        area,       
        business_type,
        business_url,
        business_mobile,
        business_email,
}) => {
    const postData = {
        name,
        date_of_birth,
        pan,
        gst_no,
        area,
        business_type,
        business_url,
        business_mobile,
        business_email,
    };
    return axios.put(ProfileConstant.PROFILE_UPDATE_API, postData);
};



export { profileApis };
