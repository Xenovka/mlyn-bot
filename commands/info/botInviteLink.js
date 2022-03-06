const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
  commands: ["invite"],
  async callback({ message }) {
    const messageButton = new MessageButton()
      .setStyle("LINK")
      .setLabel("Invite Me")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=948774973726675015&permissions=416594521335&scope=bot%20applications.commands"
      );

    const messageComponents = new MessageActionRow().addComponents([messageButton]);

    await message.reply("Click the button below to invite me into your server!");
    await message.channel.send({ components: [messageComponents] });
  }
};
