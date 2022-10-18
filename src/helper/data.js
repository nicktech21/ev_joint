const dataHelper = {};

dataHelper.sorter = (a, b, type = "string") => {
  if ([undefined, null].includes(a)) {
    return -1;
  }

  if ([undefined, null].includes(b)) {
    return 1;
  }

  if (a === b) {
    return 0;
  }

  if (type === "string") {
    return a.length - b.length;
  }

  if (type === "number") {
    return a - b;
  }

  if (type === "date") {
    return new Date(a) - new Date(b);
  }
};

dataHelper.deepCopy = (data) => {
  data = JSON.stringify(data);

  return JSON.parse(data);
};

dataHelper.generateUniqueId = () =>
  `DEVICEID_${Math.floor(Math.random() * 100)}${Date.now()}`;

dataHelper.removeHTML = (data) => {
  const regex = /(<([^>]+)>)/ig;
  data = data.replace(regex, "");
  return data;
};

export { dataHelper };
