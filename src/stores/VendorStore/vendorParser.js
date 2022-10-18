const VendorParser = {};

VendorParser.getVendor = (res) => {
  
    if (res) {
        res = res.result;
        
      }
    
      if (!res) {
        console.log("error");
        return {};
      }


    const parseTransactions = (t) =>
        t.map((e) => ({
            name : e.name ? e.name : "",
            mobile : e.mobile ? e.mobile : "",
            email : e.email ? e.email : "",
            pan : e.pan ? e.pan : "",
            gst_no : e.gst_no ? e.gst_no : "",
            last_login_at : e.last_login_at ? e.last_login_at : "",
     
        }));

  const data = parseTransactions(res);



  return data;




};

export { VendorParser };
