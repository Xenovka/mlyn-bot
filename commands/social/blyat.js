const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["blyat"],
  cooldown: 2,
  async callback({ message }) {
    const { channel, createdAt } = message;

    const GIF_URL = await getAnimeGIF("blyat");

    const embed = new MessageEmbed()
      .setColor("RED")
      .setDescription(`BLYATTTTT!!!!!!!`)
      .setImage(GIF_URL)
      .setFooter({ text: `Blyatooo • ${moment(createdAt).calendar()}` });

    channel.send({ embeds: [embed] });
  }
};
