const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["bite", "eat"],
  cooldown: 2,
  expectedArgs: "[@user]",
  maxArgs: 1,
  minArgs: 1,
  async callback({ message }) {
    const { channel, mentions, author, createdAt } = message;
    let memberName = author.username;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("bite");

    let embed = null;

    if (message.content.includes("eat")) {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Nyam-Nyam, u're so delicious, **${memberName}**.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Eat • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`I bite youu!!!!, **${memberName}**`)
        .setImage(GIF_URL)
        .setFooter({ text: `Bite • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
