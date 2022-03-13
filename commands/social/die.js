const moment = require("moment");
const { MessageEmbed } = require("discord.js");

const getAnimeGIF = require("../../composable/getAnimeGIF");

module.exports = {
  commands: ["die", "dead", "died"],
  cooldown: 2,
  async callback({ message }) {
    const { channel, createdAt } = message;

    const GIF_URL = await getAnimeGIF("die");

    const embed = new MessageEmbed()
      .setColor("BLACk")
      .setDescription(`I'm dead 😵`)
      .setImage(GIF_URL)
      .setFooter({ text: `Die • ${moment(createdAt).calendar()}` });

    channel.send({ embeds: [embed] });
  }
};
