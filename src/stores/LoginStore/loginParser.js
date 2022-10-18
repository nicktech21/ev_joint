

const loginParser = {};

loginParser.login = (res) => {

  if (!res) {
    return {};
    
  }

  const d = res.result;




  const data = {
    token: d?.token ?? "",
    vendor_id: d?.id ?? "",
    name: d?.name ?? "",
    email: d?.email ?? "",
    mobile: d?.mobile ?? "",
    status: d?.status ?? "",
    pan: d?.pan ?? "",
    gst_no: d?.gst_no ?? "",
    area: d?.area ?? "",
    date_of_birth: d?.date_of_birth ?? "",
    business_url: d?.business_url ?? "",
    business_type: d?.business_type ?? "",
    business_email: d?.business_email ?? "",
    business_mobile: d?.business_mobile ?? "",
    thumbnail: d?.thumbnail ?? "",
    is_admin: d?.user_type === "ADMIN" ? true : false,


  };




  return data;
};


export { loginParser };
