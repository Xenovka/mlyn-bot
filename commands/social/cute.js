const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["cute", "kawai"],
  cooldown: 2,
  expectedArgs: "[@user]",
  maxArgs: 1,
  minArgs: 1,
  async callback({ message, args }) {
    const { channel, mentions, createdAt } = message;
    let memberName;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("ask");

    let embed = null;

    if (!args.length) {
      embed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`I'm so CUTEEEEEEEEEEEE.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Kawaii • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("PURPLE")
        .setDescription(`**${memberName}**, You're so KAWAIIIIII`)
        .setImage(GIF_URL)
        .setFooter({ text: `Kawaii • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
