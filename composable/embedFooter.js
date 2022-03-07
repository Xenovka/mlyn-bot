const moment = require("moment");

module.exports = (bot, createdAt) => {
  return { iconURL: bot.iconURL(), text: `${bot.name} • ${moment(createdAt).calendar()}` };
};
