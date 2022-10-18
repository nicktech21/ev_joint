export const devConfig = {
    environment: "DEVELOPMENT",

    
    // Mobile app - togglers
    isMobileApp: false,
    platform: "Web", // Web, Android, IOS


    
    debug: true,
    apiUrl: "https://api.evjoints.com/", // For QA Usage
    // apiUrl: "http://127.0.0.1:3001", // For Developer's Local Usage
    legacyApiUrl: "http://35.154.154.159",

    toastTimeout: 4000,
    tokenKey: "token",
    legacyTokenKey: "legacyToken",
    // vendor_id: d['id'],
    // name: d['name'],
    // email: d['email'],
    // mobile: d['mobile'],
    // status: d['status'],
    // pan: d['pan'],
    // gst_no: d['gst_no'],
    // area: d['area'],
    // business_type: d['business_type'],
    // business_email: d['business_email'],
    // business_mobile: d['business_mobile'],
    vendor_id: "",
    name: "",
    email: "",
    mobile: "",
    status: "",
    pan: "",
    gst_no: "",
    area: "",
    business_type: "",
    business_email: "",
    business_mobile: "",
    

    companyName: "Ev",
    companyLogo: "https://www.jarvisinvest.com/img/jarvis-text.png",

    //used for website url
    websiteUrl: "http://35.154.154.159:3004",
    tacUrl: "http://35.154.154.159:3004/terms-and-conditions",
    disclaimerUrl: "http://35.154.154.159:3004/disclaimer",

    //Intercome integration
    intercomId: {
        api_base: "https://api-iam.intercom.io",
        app_id: "l0kky5nw",
    },

    //Google Analytics Id
    googleAnalytics: "UA-128216506-2",

    //login Id
    loginId: {
        facebook: "2561521274138877",
        google: "779958761423-v38fgo12esla4bej2u8uts0brln0umkh.apps.googleusercontent.com",
        googleApp: "496928712576-cth57m2lo1uuk40mddsn2rila0ug72ou.apps.googleusercontent.com"
    },

    // used for payment gateway integration
    payment: {
        gateway: {
            razorpay: "RAZORPAY",
        },
        razorpay: {
            scriptURI: "https://checkout.razorpay.com/v1/checkout.js",
            key: "rzp_test_8awgF79xdNf6jm",
        },
    },

    // used for document signing process
    documentSigning: {
        gateway: {
            digio: "DIGIO",
        },
        digio: {
            scriptURI: "https://ext.digio.in/sdk/v9/digio.js",
            environment: "sandbox",
            method: "otp",
            isIframe: true,
        },
    },

    // used for broker integration
    broker: {
        statusIterationCount: 5,
        bokerRedirectUrl: "https://test-brokerintegration.jarvisinvest.com/api/odin-call-back",
        kleverTradebrokerRedirectUrl: "https://test-brokerintegration.jarvisinvest.com/api/arham-wealth-call-back", // For QA Usage
        // kleverTradebrokerRedirectUrl: "http://127.0.0.1:8000/api/arham-wealth-call-back", // For Developer's Local Usage
        platform: {
            smallcase: "small_case",
            mastertrust: "mastertrust",
            saral: "saral",
            bazaarindicator: "bazaarindicator",
            arham: "arham",
            bigul: "bigul",
            odin: "odin",
            wealthmunshi: "wealthmunshi",
            arhamshare: "arhamshare",
            tradecircle: "tradecircle",
            klevertrade: "klevertrade",
            iooa: "iooa",
        },
        smallcase: {
            scriptURI: "https://gateway.smallcase.com/scdk/2.0.0/scdk.js",
            gateway: "jarvisinvest-dev",
            config: {
                amo: true,
                leprechaunEnabled: true
            },
            logoUrl: "",
        },
        arham: {
            arham:{
                logoUrl: "/images/brokers/arhamshares.png",
            }
        },
        bigul: {
            logoUrl: "/images/brokers/bigul.png",
        },
        saral: {
            kunvarji: {
                logoUrl: "/images/brokers/kunvarji_logo.png",
            },
        },

        // sub-domain
        mastertrust: {
            logoUrl: "/images/brokers/master_trust_logo.png",
        },
        "demo-mastertrust": {
            logoUrl: "/images/brokers/master_trust_logo.png",
        },
        bazaarindicator: {
            logoUrl: "/images/brokers/bazaar-indicator.png",
        },
        "demo-bazaarindicator": {
            logoUrl: "/images/brokers/bazaar-indicator.png",
        },
        wealthmunshi: {
            logoUrl: "/images/brokers/wealthmunshi.png",
        },
        "demo-wealthmunshi": {
            logoUrl: "/images/brokers/wealthmunshi.png",
        },
        arhamshare: {
            logoUrl: "/images/brokers/arhamshares.png",
        },
        "demo-arhamshare": {
            logoUrl: "/images/brokers/arhamshares.png",
        },
        tradecircle: {
            logoUrl: "/images/brokers/tradeCirlce.png",
        },
        "demo-tradecircle": {
            logoUrl: "/images/brokers/tradeCirlce.png",
        },
        klevertrade: {
            logoUrl: "/images/brokers/klevertrade_login.png",
        },
        iooa: {
            logoUrl: "/images/brokers/iooa_login.png",
        },
    },
    

};
