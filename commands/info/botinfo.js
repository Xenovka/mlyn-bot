const { MessageEmbed } = require("discord.js");
const messageCreatedAt = require("../../composable/messageCreatedAt");
const moment = require("moment");

module.exports = {
  commands: ["botinfo", "boti", "info", "bi"],
  async callback({ message, client }) {
    const { channel, createdAt } = message;
    const bot = await client.application.fetch();
    const botName = bot.name;
    const botIcon = bot.iconURL();
    const botCreatedAt = `${moment(bot.createdAt).format("dddd, MMMM DD, YYYY")} (${moment(bot.createdAt).fromNow()})`;
    const msgCreatedAt = messageCreatedAt(createdAt);

    const embed = new MessageEmbed()
      .setAuthor({ name: botName, iconURL: botIcon })
      .setThumbnail(bot.iconURL({ type: "png", size: 2048 }))
      .setColor("BLUE")
      .addFields([
        {
          name: "Creator",
          value: bot.owner.tag,
          inline: true
        },
        {
          name: "Version",
          value: "1.0.0",
          inline: true
        },
        {
          name: "Library",
          value: "Discord.js",
          inline: true
        },
        {
          name: "ID",
          value: bot.id,
          inline: false
        },
        {
          name: "Created At",
          value: botCreatedAt,
          inline: false
        },
        {
          name: "Invite Link",
          value:
            "https://discord.com/api/oauth2/authorize?client_id=948774973726675015&permissions=416594521335&scope=bot%20applications.commands",
          inline: false
        }
      ])
      .setFooter({ iconURL: botIcon, text: `${botName} • ${msgCreatedAt}` });

    channel.send({ embeds: [embed] });
  }
};
