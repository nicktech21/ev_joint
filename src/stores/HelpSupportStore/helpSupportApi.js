import { help } from "mathjs";
import { HelpSupportConstant } from "./helpSupportConstant";
import { axios } from "../../helper/axios";


const helpSupportApi = {};

helpSupportApi.getHelpSupport = () => {
  return [
    {
      contact_no: "9888888888",
      email: "john@gmail.com",
      address:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      facebook_link: "https://www.facebook.com/",
      twitter_link: "https://www.twitter.com/",
      instagram_link: "https://www.instagram.com/",
    },
  ];
};

helpSupportApi.getFaq = () => {
  return [
    {
      que: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      que: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return axios.get(HelpSupportConstant.FAQ_API);
};



export { helpSupportApi };
