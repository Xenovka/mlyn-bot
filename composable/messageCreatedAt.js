const moment = require("moment");

module.exports = (createdAt) => {
  return moment(createdAt).calendar();
};
