const { MessageEmbed } = require("discord.js");
const channelType = require("../../composable/channelType");
const moment = require("moment");
const embedFooter = require("../../composable/embedFooter");

module.exports = {
  commands: ["channelinfo", "cinfo", "ci"],
  cooldown: 2,
  async callback({ message }) {
    const { channel, guild, client, createdAt } = message;
    const channelID = channel.id;

    const bot = client.user;
    const channelCreatedAt = moment(channel.createdAt).format("dddd, MMMM DD, YYYY hh:mm A");

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
      .setFooter(embedFooter(bot, createdAt));

    channel.send({ embeds: [embed] });
  }
};
