const path = require("path");
const fs = require("fs");

require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
  ]
});

client.on("ready", () => {
  client.user.setPresence({
    activities: [{ name: "with vend", type: "PLAYING" }],
    status: "idle"
  });

  const commands = require("./commands/commandHandler");

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir));
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file));
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file));
      } else if (file !== "commandHandler.js") {
        const option = require(path.join(__dirname, dir, file));
        commands(client, option);
      }
    }
  };

  readCommands("commands");

  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
