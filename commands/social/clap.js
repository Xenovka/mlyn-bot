const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["clap"],
  cooldown: 2,
  maxArgs: 1,
  async callback({ message }) {
    const { channel, createdAt } = message;

    const GIF_URL = await getAnimeGIF("clap");

    const embed = new MessageEmbed()
      .setColor("ORANGE")
      .setDescription(`👏👏👏`)
      .setImage(GIF_URL)
      .setFooter({ text: `Clap • ${moment(createdAt).calendar()}` });

    channel.send({ embeds: [embed] });
  }
};
