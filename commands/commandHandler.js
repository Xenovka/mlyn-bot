let recentlyUsed = [];

module.exports = (client, options) => {
  let {
    commands = [],
    expectedArgs = "",
    permissionErrors = "",
    cooldown = -1,
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

        let cooldownString = `${guild.id}-${member.id}-${commands[0]}`;

        if (recentlyUsed.includes(cooldownString)) {
          const now = new Date().getSeconds();
          cooldown -= now % 5;
          message
            .reply(`Slow down, You have to wait for **${cooldown} seconds** to use this command again.`)
            .then((msg) => {
              setTimeout(() => {
                msg.delete();
              }, cooldown * 1000);
            });
          return;
        }

        args.shift();

        if (args.length < minArgs || (maxArgs !== null && args.length > maxArgs)) {
          await message.reply(`Incorrect command usage! type ${prefix}${alias} ${expectedArgs} to use the command!`);
          return;
        }

        if (cooldown > 0) {
          recentlyUsed.push(cooldownString);

          setTimeout(() => {
            recentlyUsed = recentlyUsed.filter((string) => string !== cooldownString);
          }, 1000 * cooldown);
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
