const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["cry", "crying", "sad"],
  cooldown: 2,
  async callback({ message }) {
    const { channel, mentions, author, createdAt } = message;
    let memberName = author.username;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("cry");

    let embed = null;

    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`Huuaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!`)
        .setImage(GIF_URL)
        .setFooter({ text: `Cry • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`:'((((((((((((((((((((`)
        .setImage(GIF_URL)
        .setFooter({ text: `Cry • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
