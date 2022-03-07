const moment = require("moment");

module.exports = (createdAt) => {
  return `${moment(createdAt).format("dddd, MMMM DD, YYYY")} (${moment(createdAt).fromNow()})`;
};
