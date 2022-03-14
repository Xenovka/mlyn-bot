const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["coffee"],
  cooldown: 2,
  maxArgs: 1,
  async callback({ message }) {
    const { channel, mentions, author, createdAt } = message;
    let memberName = author.username;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("coffee");

    let embed = null;

    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      embed = new MessageEmbed()
        .setColor("DARK_GOLD")
        .setDescription(`Hi, **${memberName}**. Here's a coffee for u <3`)
        .setImage(GIF_URL)
        .setFooter({ text: `Coffe • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("DARK_GOLD")
        .setDescription(`Hey, **${memberName}**, ${author.username} just gave u a cup of coffee.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Coffee • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
