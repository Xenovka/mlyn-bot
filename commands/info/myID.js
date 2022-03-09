module.exports = {
  commands: ["myid"],
  cooldown: 2,
  async callback({ message }) {
    const { channel, guild, author } = message;

    await message.reply(`**${author.username}**'s ID : ${author.id}`);
    await channel.send(`**${guild.name}**'s ID : ${guild.id}`);
  }
};
