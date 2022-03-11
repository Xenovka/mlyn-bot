const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["wakeup"],
  cooldown: 2,
  maxArgs: 1,
  async callback({ message }) {
    const { channel, mentions, author, createdAt } = message;
    let memberName = author.username;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("alarm");

    const embed = new MessageEmbed()
      .setColor("ORANGE")
      .setDescription(`WAKE UP, **${memberName}**!!!`)
      .setImage(GIF_URL)
      .setFooter({ text: `Wakeup • ${moment(createdAt).calendar()}` });

    channel.send({ embeds: [embed] });
  }
};
