module.exports = {
  commands: ["myid"],
  async callback({ message }) {
    const { channel, guild, author } = message;

    await message.reply(`**${author.username}**'s ID : ${author.id}`);
    await channel.send(`**${guild.name}**'s ID : ${guild.id}`);
  }
};
