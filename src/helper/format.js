import { config } from "../config";
const formatHelper = {};

formatHelper.currency = (
  value = 0,
  options = { locale: "en-IN", config: {} }
) => {
  // NOTE:
  //      refer config document from below link
  //      link: https://www.techonthenet.com/js/number_tolocalestring.php
  const config = {
    currency: "INR",
    style: "currency",
    useGrouping: false,
    maximumFractionDigits: 0,
    ...options.config,
  };
  return Number(
    Number(value).toFixed(config.maximumFractionDigits)
  ).toLocaleString(options.locale, config);
};

formatHelper.getImageURI = (slug = null) => {
    if (!slug) {
      return;
    }
    let slash = "";
    if (slug.slice(0, 1) !== "/") {
      slash = "/";
    }
    return `${config.apiUrl}${slash}${slug}`;
  };

formatHelper.getLegacyImageURI = (slug = null) => {
  if (!slug) {
    return;
  }
  let slash = "";
  if (slug.slice(0, 1) !== "/") {
    slash = "/";
  }
  return `${config.legacyApiUrl}${slash}${slug}`;
};

formatHelper.parseDecimal = (value = null) => {
  if (!value) {
    return;
  }
  return Number(value).toFixed(2);
};

formatHelper.sentenceCase = (str) =>
  str
    .split(" ")
    .map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1).toLowerCase()}`)
    .join(" ");

formatHelper.withZero = (n = 0) => {
  return `0${n}`.substr(-2);
};
export { formatHelper };
