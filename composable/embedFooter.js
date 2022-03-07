const moment = require("moment");

module.exports = (bot, createdAt) => {
  return { iconURL: bot.displayAvatarURL(), text: `${bot.username} • ${moment(createdAt).calendar()}` };
};
