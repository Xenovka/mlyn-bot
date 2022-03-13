const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["amazed", "woah", "wow"],
  cooldown: 2,
  maxArgs: 1,
  async callback({ message }) {
    const { channel, mentions, author, createdAt } = message;
    let memberName = author.username;

    if (mentions.members.size) {
      memberName = mentions.members.at(0).user.username;
    }

    const GIF_URL = await getAnimeGIF("amazing");

    let embed = null;

    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`WOWW That's Amazing!!, **${memberName}**.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Amazed • ${moment(createdAt).calendar()}` });
    } else {
      embed = new MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`Woaaahhhhhh!!!!!, **${memberName}** I'm amazed.`)
        .setImage(GIF_URL)
        .setFooter({ text: `Amazed • ${moment(createdAt).calendar()}` });
    }

    channel.send({ embeds: [embed] });
  }
};
