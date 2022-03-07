const { MessageEmbed } = require("discord.js");
const channelType = require("../../composable/channelType");
const moment = require("moment");
const messageCreatedAt = require("../../composable/messageCreatedAt");

module.exports = {
  commands: ["channelinfo", "cinfo", "ci"],
  async callback({ message }) {
    const { channel, guild, client, createdAt } = message;
    const channelID = channel.id;

    const bot = client.user;
    const channelCreatedAt = moment(channel.createdAt).format("dddd, MMMM DD, YYYY hh:mm A");
    const msgCreatedAt = messageCreatedAt(createdAt);

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
        },
        {
          name: "Created At",
          value: channelCreatedAt,
          inline: false
        }
      ])
      .setFooter({ iconURL: bot.displayAvatarURL(), text: `${bot.username} • ${msgCreatedAt}` });

    channel.send({ embeds: [embed] });
  }
};
