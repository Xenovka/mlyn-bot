const { MessageEmbed } = require("discord.js");
const embedFooter = require("../../composable/embedFooter");

module.exports = {
  commands: ["membercount", "mc"],
  async callback({ message, client }) {
    const { channel, guild, createdAt } = message;
    const { name: guildName, memberCount, maximumMembers } = guild;

    const fetchGuild = await guild.fetch();
    const onlineMembers = fetchGuild.approximatePresenceCount;
    const bot = await client.application.fetch();

    const embed = new MessageEmbed()
      .setAuthor({ name: guildName, iconURL: guild.iconURL() })
      .setColor("BLUE")
      .addFields([
        {
          name: "Members",
          value: memberCount.toString(),
          inline: false
        },
        {
          name: "Online Members",
          value: onlineMembers.toString(),
          inline: false
        },
        {
          name: "Maximum Members",
          value: new Intl.NumberFormat().format(maximumMembers),
          inline: false
        }
      ])
      .setFooter(embedFooter(bot, createdAt));

    channel.send({ embeds: [embed] });
  }
};
