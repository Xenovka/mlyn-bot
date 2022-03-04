module.exports = async (channel, author, attachment, member) => {
  if (member) {
    await channel.send(`<@${author.id}> request to see **${member.user.username}**'s avatar:`);
    await channel.send({ files: [attachment] });
    await channel.send(
      `Here's the link for you to access the avatar <${author.avatarURL({ size: 4096, format: "png" })}>  `
    );
    return;
  }

  await channel.send(`Hi, **${author.username}** here is your avatar:`);
  await channel.send({ files: [attachment] });
  await channel.send(
    `Here's the link for you to access the avatar <${author.avatarURL({ size: 4096, format: "png" })}>`
  );
};
