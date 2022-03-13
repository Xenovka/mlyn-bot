const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["ask", "asking"],
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

    const GIF_URL = await getAnimeGIF("ask");

    let embed = null;

    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Can I ask u a question???, **${memberName}**.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Ask • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`**${memberName}**, I wanna ask u a question, can I?`)
        .setImage(GIF_URL)
        .setFooter({ text: `Ask • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
