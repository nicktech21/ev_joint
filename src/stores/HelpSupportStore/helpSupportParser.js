const helpSupportParser = {};

helpSupportParser.getfaq = (res) => {

    if (res) {
        res = res.result;
        
      }

    
    
      if (!res) {
        console.log("error");
        return {};
      }

      const parsehelpSupportFaqs = (t) =>
      t?.map((e) => ({
          
        id:e?.id ?? "",
        que:e?.question ?? "",
        ans:e?.answer ?? "",


      
      }));


      const data = parsehelpSupportFaqs(res);

 

      return data;






  
}



// const data = parsehelpSupportFaqs (res);






export {helpSupportParser };