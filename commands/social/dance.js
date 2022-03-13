const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["dance"],
  cooldown: 2,
  maxArgs: 1,
  async callback({ message, args }) {
    const { channel, mentions, createdAt } = message;

    let memberName;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("dance");

    let embed = null;

    if (!args.length) {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`I'm dancing now`)
        .setImage(GIF_URL)
        .setFooter({ text: `Dance • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Dance **${memberName}** Danceee.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Dance • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
