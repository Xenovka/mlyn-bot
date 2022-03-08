const { MessageEmbed } = require("discord.js");

const embedFooter = require("./embedFooter");
const formatCreatedAt = require("./formatCreatedAt");

module.exports = (channel, bot, author, member, createdAt) => {
  const memberRoles = member.roles.cache.filter((role) => role.name !== "@everyone").map((role) => `<@&${role.id}>`);

  const embed = new MessageEmbed()
    .setAuthor({ name: author.tag, iconURL: author.avatarURL() })
    .setColor("BLUE")
    .addFields([
      {
        name: "Nickname",
        value: member.displayName,
        inline: true
      },
      {
        name: "ID",
        value: author.id,
        inline: true
      },
      {
        name: "Created At",
        value: formatCreatedAt(author.createdAt),
        inline: false
      },
      {
        name: "Joined At",
        value: formatCreatedAt(member.joinedAt),
        inline: false
      },
      {
        name: "Server Boost",
        value: member.premiumSince ? "No" : "Yes",
        inline: false
      },
      {
        name: `Roles [${memberRoles.length}]`,
        value: memberRoles.length ? memberRoles.join(" ") : "None",
        inline: false
      },
      {
        name: "Permission(s)",
        value: member.permissions.toArray().join(", "),
        inline: false
      }
    ])
    .setFooter(embedFooter(bot, createdAt));

  channel.send({ embeds: [embed] });
  return;
};
