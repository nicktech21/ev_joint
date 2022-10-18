import { config } from "config/";

const localStorageStore = {};

localStorageStore.setToken = (v) => localStorage.setItem(config.tokenKey, v);
localStorageStore.getToken = () => localStorage.getItem(config.tokenKey);
localStorageStore.resetToken = () => localStorage.removeItem(config.tokenKey);
// vendor_id: "",
// name: "",
// email: "",
// mobile: "",
// status: "",
// pan: "",
// gst_no: "",
// area: "",
// business_type: "",
// business_email: "",
// business_mobile: "",
localStorageStore.setVendorData = (v) => {
    localStorage.setItem(config.vendor_id, v.id);
    localStorage.setItem(config.name, v.name);
    localStorage.setItem(config.email, v.email);
    localStorage.setItem(config.mobile, v.mobile);
    localStorage.setItem(config.status, v.status);
    localStorage.setItem(config.pan, v.pan);
    localStorage.setItem(config.gst_no, v.gst_no);
    localStorage.setItem(config.area, v.area);
    localStorage.setItem(config.business_type, v.business_type);
    localStorage.setItem(config.business_email, v.business_email);
    localStorage.setItem(config.business_mobile, v.business_mobile);
};
localStorageStore.getVendorData = () => {
    return {
        vendor_id: localStorage.getItem(config.vendor_id),
        name: localStorage.getItem(config.name),
        email: localStorage.getItem(config.email),
        mobile: localStorage.getItem(config.mobile),
        status: localStorage.getItem(config.status),
        pan: localStorage.getItem(config.pan),
        gst_no: localStorage.getItem(config.gst_no),
        area: localStorage.getItem(config.area),
        business_type: localStorage.getItem(config.business_type),
        business_email: localStorage.getItem(config.business_email),
        business_mobile: localStorage.getItem(config.business_mobile),
    }
};


localStorageStore.setLegacyToken = (v) =>
    localStorage.setItem(config.legacyTokenKey, v);
localStorageStore.getLegacyToken = () =>
    localStorage.getItem(config.legacyTokenKey);
localStorageStore.resetLegacyToken = () =>
    localStorage.removeItem(config.legacyTokenKey);

export { localStorageStore };
