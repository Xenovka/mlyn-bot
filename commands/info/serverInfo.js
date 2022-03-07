const embedFooter = require("../../composable/embedFooter");
const getServerLevel = require("../../composable/getServerLevel");

const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const formatCreatedAt = require("../../composable/formatCreatedAt");

module.exports = {
  commands: ["serverinfo", "si"],
  async callback({ message, client }) {
    const { channel, guild, createdAt } = message;
    const { name: guildName, memberCount, premiumSubscriptionCount, roles, channels } = guild;

    const bot = await client.application.fetch();
    const fetchGuild = await guild.fetch();
    const guildIcon = guild.iconURL();
    const onlineMembers = fetchGuild.approximatePresenceCount;
    const guildOwner = await guild.fetchOwner();
    const guildRoleCount = roles.cache.size;
    const channelCount = channels.channelCountWithoutThreads;

    const embed = new MessageEmbed()
      .setAuthor({ name: guildName, iconURL: guildIcon })
      .setColor("BLUE")
      .setThumbnail(guildIcon)
      .addFields([
        {
          name: "Server Owner",
          value: `${guildOwner.nickname}(${guildOwner.user.tag})`,
          inline: true
        },
        {
          name: "ID",
          value: fetchGuild.id,
          inline: true
        },
        {
          name: "Members",
          value: memberCount.toString(),
          inline: false
        },
        {
          name: "Online Members",
          value: onlineMembers.toString(),
          inline: true
        },
        {
          name: "Server Boost Status",
          value: `${premiumSubscriptionCount} (${getServerLevel(premiumSubscriptionCount)})`,
          inline: false
        },
        {
          name: "Roles",
          value: guildRoleCount.toString(),
          inline: false
        },
        {
          name: "Channel",
          value: channelCount.toString(),
          inline: true
        },
        {
          name: "Created At",
          value: formatCreatedAt(fetchGuild.createdAt),
          inline: false
        }
      ])
      .setFooter(embedFooter(bot, createdAt));
  }
};