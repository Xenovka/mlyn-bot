const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["stupid", "baka", "idiot"],
  cooldown: 2,
  maxArgs: 1,
  async callback({ message }) {
    const { channel, mentions, author, createdAt } = message;
    let memberName = author.username;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("baka");

    let embed = null;

    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`**${memberName}**, Bakaaa!!!`)
        .setImage(GIF_URL)
        .setFooter({ text: `Baka • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Why so STUPIDDDD!!!, **${memberName}**.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Baka • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
