module.exports = (client, options) => {
  let {
    commands = [],
    expectedArgs = "",
    permissionErrors = "",
    minArgs = 0,
    maxArgs = null,
    permissions = [],
    requiredRoles = [],
    callback
  } = options;

  client.on("messageCreate", async (message) => {
    const { member, content, guild } = message;

    const prefix = process.env.COMMAND_PREFIX;

    for (let alias of commands) {
      let args = content.split(" ");

      if (args[0] === prefix + alias) {
        for (const permission of permissions) {
          if (!member.permissions.has(permission)) {
            await message.reply(permissionErrors);
          }
        }

        for (const role of requiredRoles) {
          const findRole = guild.roles.cache.find((r) => r.name === role);

          if (!findRole || !member.roles.cache.has(findRole.id)) {
            await message.reply(`You must have ${role} to use this command!`);
          }
        }

        args.shift();

        if (args.length < minArgs || (maxArgs !== null && args.length > maxArgs)) {
          await message.reply(`Incorrect command usage! type ${prefix}${alias} ${expectedArgs} to use the command!`);
          return;
        }

        let parameters = {
          message,
          args,
          argsText: args.join(" "),
          client
        };

        callback(({ message, args, argsText, client } = parameters));
      }
    }
  });
};
