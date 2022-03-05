const { MessageEmbed } = require("discord.js");
const channelType = require("../../composable/channelType");

module.exports = {
  commands: ["channelinfo", "cinfo", "ci"],
  async callback({ message }) {
    const { channel, guild, client } = message;
    const channelID = channel.id;

    const bot = client.user;

    const embed = new MessageEmbed()
      .setAuthor({ iconURL: guild.iconURL(true), name: guild.name })
      .setThumbnail("https://cdn.koya.gg/utilities/hashtag.png")
      .setColor("BLUE")
      .addFields([
        {
          name: "Channel Name",
          value: `<#${channelID}>`,
          inline: true
        },
        {
          name: "Channel ID",
          value: channelID,
          inline: true
        },
        {
          name: "Channel Type",
          value: channelType(channel.type),
          inline: false
        },
        {
          name: "Topic",
          value: channel.topic || "None",
          inline: false
        }
      ])
      .setFooter({ iconURL: bot.displayAvatarURL(), text: `${bot.username} • Today` });

    channel.send({ embeds: [embed] });
  }
};
