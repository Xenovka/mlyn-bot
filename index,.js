require("dotenv").config();

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});

client.on("ready", () => {
  client.user.setPresence({
    activities: [{ name: "with vend", type: "PLAYING" }],
    status: "idle"
  });

  let commandHandler = require("./commandHandler");
  if (commandHandler.default) commandHandler = commandHandler.default;

  commandHandler(client);

  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
