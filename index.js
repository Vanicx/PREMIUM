const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();

const client = new discord.Client();
client.login(botConfig.token);

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online (made by Vanicx).`);
    bot.user.setActivity("💜 Premium FiveM Shop 💜", {type: "CUSTOM_STATUS"});
})

bot.login(process.env.token);

