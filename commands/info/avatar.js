const { MessageAttachment } = require("discord.js");
const avatarMessage = require("../../composable/avatarMessage");

module.exports = {
  commands: ["avatar", "pp"],
  expectedArgs: "[@user]",
  minArgs: 0,
  maxArgs: 1,
  callback({ message }) {
    const { channel, author, mentions } = message;

    let attachment;

    if (!mentions.members.at(0)) {
      attachment = new MessageAttachment(author.avatarURL({ size: 4096, format: "png" }));
      return avatarMessage(channel, author, attachment);
    }

    const member = mentions.members.at(0);
    attachment = new MessageAttachment(member.displayAvatarURL({ size: 4096, format: "png" }));
    return avatarMessage(channel, author, attachment, member);
  }
};
