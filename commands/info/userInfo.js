const userInfoEmbedMessage = require("../../composable/userInfoEmbedMessage");

module.exports = {
  commands: ["userinfo", "ui", "whois"],
  cooldown: 2,
  expectedArgs: "[@user]",
  maxArgs: 1,
  async callback({ message, args, client }) {
    const { channel, author, mentions, createdAt, member } = message;

    const bot = await client.application.fetch();

    if (args.length === 1 && !mentions.members.at(0)) {
      await message.reply("Wrong argument passed! Mention a member as an argument!");
      return;
    } else if (mentions.members.at(0)) {
      userInfoEmbedMessage(channel, bot, author, mentions.members.at(0), createdAt);
      return;
    }

    userInfoEmbedMessage(channel, bot, author, member, createdAt);
  }
};
